import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { __setPathsForTests, CACHE_SCHEMA, main } from '../build-card-cache';

// ---- helpers ----

function makeRoot(): { root: string; postsDir: string; cacheDir: string } {
  const root = mkdtempSync(path.join(tmpdir(), 'build-card-cache-test-'));
  const postsDir = path.join(root, 'posts');
  const cacheDir = path.join(root, '.cache');
  mkdirSync(postsDir, { recursive: true });
  mkdirSync(cacheDir, { recursive: true });
  return { root, postsDir, cacheDir };
}

function writePost(postsDir: string, name: string, body: string): void {
  writeFileSync(path.join(postsDir, name), body);
}

function readCache(cacheDir: string): {
  schema: string;
  found: Record<string, unknown>;
  not_found: Record<string, unknown>;
} {
  return JSON.parse(readFileSync(path.join(cacheDir, 'cards.json'), 'utf8'));
}

interface MockResponse {
  ok: boolean;
  status: number;
  json: () => Promise<unknown>;
}

function jsonResponse(body: unknown, status = 200): MockResponse {
  return {
    ok: status >= 200 && status < 300,
    status,
    json: async () => body,
  };
}

function makeScryfallCard(overrides: Record<string, unknown> = {}): Record<string, unknown> {
  return {
    name: 'Default',
    scryfall_uri: 'https://scryfall.com/card/x/0/default',
    oracle_id: 'oracle-default',
    layout: 'normal',
    image_uris: { large: 'https://img/default.jpg' },
    set: 'x',
    collector_number: '0',
    ...overrides,
  };
}

let workDir: { root: string; postsDir: string; cacheDir: string };
let fetchSpy: ReturnType<typeof vi.spyOn>;

beforeEach(() => {
  workDir = makeRoot();
  __setPathsForTests({
    postsDir: workDir.postsDir,
    cacheDir: workDir.cacheDir,
    rateLimitMs: 0,
  });
  fetchSpy = vi.spyOn(globalThis, 'fetch');
});

afterEach(() => {
  fetchSpy.mockRestore();
  rmSync(workDir.root, { recursive: true, force: true });
  __setPathsForTests();
});

// ---- tests ----

describe('build-card-cache main() — retry layers', () => {
  it('happy path: batched collection resolves a card', async () => {
    writePost(workDir.postsDir, 'a.md', '{% mtgcard "Black Lotus" %}\n');

    fetchSpy.mockImplementation(async (url: RequestInfo | URL, opts?: RequestInit) => {
      const u = String(url);
      if (opts?.method === 'POST' && u.includes('/cards/collection')) {
        return jsonResponse({
          data: [
            makeScryfallCard({
              name: 'Black Lotus',
              scryfall_uri: 'https://scryfall.com/card/lea/233/black-lotus',
              oracle_id: 'oracle-bl',
              image_uris: { large: 'https://img/black-lotus.jpg' },
              set: 'lea',
              collector_number: '233',
            }),
          ],
          not_found: [],
        }) as unknown as Response;
      }
      throw new Error(`unexpected fetch: ${u}`);
    });

    await main();

    const cache = readCache(workDir.cacheDir);
    expect(Object.keys(cache.found)).toEqual(['search|Black Lotus||en']);
    const blackLotus = cache.found['search|Black Lotus||en'] as { name: string };
    expect(blackLotus.name).toBe('Black Lotus');
    expect(cache.not_found).toEqual({});
  });

  it('DFC spacing retry: name with `//` (no spaces) resolves on layer 1 retry', async () => {
    writePost(workDir.postsDir, 'a.md', '{% mtgcard "Fire//Ice" %}\n');

    let postCount = 0;
    fetchSpy.mockImplementation(async (url: RequestInfo | URL, opts?: RequestInit) => {
      const u = String(url);
      if (opts?.method === 'POST' && u.includes('/cards/collection')) {
        postCount++;
        const body = JSON.parse(opts.body as string);
        const requestedName = body.identifiers[0].name;
        // First batch: Fire//Ice → not found
        // Second batch (Layer 1 spacing retry): Fire // Ice → found
        if (requestedName === 'Fire//Ice') {
          return jsonResponse({ data: [], not_found: body.identifiers }) as unknown as Response;
        }
        if (requestedName === 'Fire // Ice') {
          return jsonResponse({
            data: [
              makeScryfallCard({
                name: 'Fire // Ice',
                scryfall_uri: 'https://scryfall.com/x',
                layout: 'split',
                image_uris: { large: 'https://img/fire-ice.jpg' },
              }),
            ],
            not_found: [],
          }) as unknown as Response;
        }
        throw new Error(`unexpected POST body name: ${requestedName}`);
      }
      throw new Error(`unexpected fetch: ${u}`);
    });

    await main();

    const cache = readCache(workDir.cacheDir);
    // Stored under the ORIGINAL key (no spaces), not the normalized one.
    const fireIce = cache.found['search|Fire//Ice||en'] as { name: string; layout: string };
    expect(fireIce).toBeDefined();
    expect(fireIce.name).toBe('Fire // Ice');
    expect(fireIce.layout).toBe('split');
    expect(postCount).toBeGreaterThanOrEqual(2); // initial + spacing retry
  });

  it('DFC front-face retry: full DFC name resolves on layer 2 (front-face split)', async () => {
    writePost(
      workDir.postsDir,
      'a.md',
      '{% mtgcard "Delver of Secrets // Insectile Aberration" %}\n',
    );

    fetchSpy.mockImplementation(async (url: RequestInfo | URL, opts?: RequestInit) => {
      const u = String(url);
      if (opts?.method === 'POST' && u.includes('/cards/collection')) {
        const body = JSON.parse(opts.body as string);
        const requestedName = body.identifiers[0].name;
        // Layers 0 and 1 fail (full DFC name and normalized spacing both fail).
        // Layer 2 sends the front-face name only, which succeeds.
        if (requestedName === 'Delver of Secrets') {
          return jsonResponse({
            data: [
              makeScryfallCard({
                name: 'Delver of Secrets // Insectile Aberration',
                scryfall_uri: 'https://scryfall.com/x',
                layout: 'transform',
                image_uris: undefined,
                card_faces: [
                  { image_uris: { large: 'https://img/front.jpg' } },
                  { image_uris: { large: 'https://img/back.jpg' } },
                ],
              }),
            ],
            not_found: [],
          }) as unknown as Response;
        }
        return jsonResponse({ data: [], not_found: body.identifiers }) as unknown as Response;
      }
      throw new Error(`unexpected fetch: ${u}`);
    });

    await main();

    const cache = readCache(workDir.cacheDir);
    const key = 'search|Delver of Secrets // Insectile Aberration||en';
    const delver = cache.found[key] as { layout: string; card_faces: unknown[] };
    expect(delver).toBeDefined();
    expect(delver.layout).toBe('transform');
    expect(delver.card_faces).toHaveLength(2);
  });

  it('flavor-name fallback: Universes Beyond name resolves via search endpoint', async () => {
    writePost(workDir.postsDir, 'a.md', '{% mtgcard "Stay with Me" %}\n');

    fetchSpy.mockImplementation(async (url: RequestInfo | URL, opts?: RequestInit) => {
      const u = String(url);
      if (opts?.method === 'POST' && u.includes('/cards/collection')) {
        // All collection attempts miss — the name is a flavor name that the
        // collection endpoint cannot match.
        const body = JSON.parse(opts.body as string);
        return jsonResponse({ data: [], not_found: body.identifiers }) as unknown as Response;
      }
      if (u.includes('/cards/search') && u.includes('Stay%20with%20Me')) {
        // Flavor retry uses GET /cards/search?q=!"X". Return a card whose
        // flavor_name matches exactly.
        return jsonResponse({
          data: [
            makeScryfallCard({
              name: 'Rhystic Study',
              flavor_name: 'Stay with Me',
              scryfall_uri: 'https://scryfall.com/x',
              oracle_id: 'oracle-rs',
              image_uris: { large: 'https://img/rs.jpg' },
            }),
          ],
        }) as unknown as Response;
      }
      throw new Error(`unexpected fetch: ${u}`);
    });

    await main();

    const cache = readCache(workDir.cacheDir);
    const key = 'search|Stay with Me||en';
    const stayWithMe = cache.found[key] as { name: string };
    expect(stayWithMe).toBeDefined();
    expect(stayWithMe.name).toBe('Rhystic Study');
  });
});

describe('build-card-cache main() — Astro cache invalidation', () => {
  function seedAstroDataStore(): string {
    const astroDir = path.join(workDir.root, '.astro');
    const dataStore = path.join(astroDir, 'data-store.json');
    mkdirSync(astroDir, { recursive: true });
    writeFileSync(dataStore, '{"stale": true}');
    return dataStore;
  }

  it('unlinks .astro/data-store.json when cache content changes', async () => {
    const dataStore = seedAstroDataStore();
    writePost(workDir.postsDir, 'a.md', '{% mtgcard "Black Lotus" %}\n');

    fetchSpy.mockImplementation(async (url: RequestInfo | URL, opts?: RequestInit) => {
      if (opts?.method === 'POST' && String(url).includes('/cards/collection')) {
        return jsonResponse({
          data: [makeScryfallCard({ name: 'Black Lotus' })],
          not_found: [],
        }) as unknown as Response;
      }
      throw new Error(`unexpected fetch: ${url}`);
    });

    await main();

    expect(existsSync(dataStore)).toBe(false);
  });

  it('leaves .astro/data-store.json alone when cache content is unchanged', async () => {
    const dataStore = seedAstroDataStore();
    // Pre-populate cache with the card the post will reference, so main()
    // finds nothing missing and never mutates cache.
    const cachePath = path.join(workDir.cacheDir, 'cards.json');
    writeFileSync(
      cachePath,
      JSON.stringify({
        schema: CACHE_SCHEMA,
        found: {
          'search|Black Lotus||en': {
            name: 'Black Lotus',
            scryfall_uri: 'https://scryfall.com/x',
            oracle_id: 'oracle-bl',
            layout: 'normal',
            card_faces: [{ image: 'https://img/bl.jpg' }],
          },
        },
        not_found: {},
      }),
    );
    writePost(workDir.postsDir, 'a.md', '{% mtgcard "Black Lotus" %}\n');

    fetchSpy.mockImplementation(async (url: RequestInfo | URL) => {
      throw new Error(`fetch should not be called: ${url}`);
    });

    await main();

    expect(existsSync(dataStore)).toBe(true);
  });

  it('survives missing .astro/ directory silently (ENOENT)', async () => {
    // No .astro dir created. Cache will change because post adds new card.
    writePost(workDir.postsDir, 'a.md', '{% mtgcard "Black Lotus" %}\n');

    fetchSpy.mockImplementation(async (url: RequestInfo | URL, opts?: RequestInit) => {
      if (opts?.method === 'POST' && String(url).includes('/cards/collection')) {
        return jsonResponse({
          data: [makeScryfallCard({ name: 'Black Lotus' })],
          not_found: [],
        }) as unknown as Response;
      }
      throw new Error(`unexpected fetch: ${url}`);
    });

    // Should not throw.
    await expect(main()).resolves.toBeUndefined();
  });
});
