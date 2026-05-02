import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const CACHE_PATH = join(process.cwd(), '.scryfall-cache.json');

// In-memory cache for current build + persistent cache loaded from disk
let cache: Record<string, string> = {};
let cacheLoaded = false;

// Build-time stats
const stats = { cacheHit: 0, fetched: 0, failed: 0 };

function ensureCache() {
  if (cacheLoaded) return;
  try {
    cache = JSON.parse(readFileSync(CACHE_PATH, 'utf-8'));
    console.log(`[scryfall] cache loaded — ${Object.keys(cache).length} entries`);
  } catch {
    cache = {};
    console.log('[scryfall] no cache found, starting fresh');
  }
  cacheLoaded = true;

  // Print summary when build process exits
  process.once('exit', () => {
    console.log(
      `[scryfall] build summary — cache hits: ${stats.cacheHit}, fetched: ${stats.fetched}, failed: ${stats.failed}`,
    );
  });
}

function persistCache() {
  try {
    writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
  } catch (e) {
    console.warn('[scryfall-cache] failed to write cache:', e);
  }
}

// Sequential fetch queue — guarantees 100ms between Scryfall requests
let fetchQueue: Promise<void> = Promise.resolve();

function enqueue<T>(fn: () => Promise<T>): Promise<T> {
  const result = fetchQueue.then(fn);
  fetchQueue = result.then(
    () => new Promise((r) => setTimeout(r, 100)),
    () => new Promise((r) => setTimeout(r, 100)),
  ) as Promise<void>;
  return result;
}

function getImageUrl(card: Record<string, unknown>): string | null {
  const imageUris = card.image_uris as Record<string, string> | undefined;
  if (imageUris) return imageUris.large;
  const cardFaces = card.card_faces as Array<Record<string, unknown>> | undefined;
  if (cardFaces?.[0]?.image_uris) {
    return (cardFaces[0].image_uris as Record<string, string>).large;
  }
  return null;
}

export async function fetchImageByName(
  name: string,
  edition: string,
  language: string,
): Promise<string | null> {
  ensureCache();
  const key = `name:${name}:${edition}:${language}`;
  if (cache[key]) {
    stats.cacheHit++;
    console.log(`[scryfall] cache hit  — ${name}${edition ? ` [${edition}]` : ''}`);
    return cache[key];
  }

  return enqueue(async () => {
    try {
      let url = `https://api.scryfall.com/cards/named?exact=${encodeURIComponent(name)}`;
      if (edition) url += `&set=${encodeURIComponent(edition)}`;
      console.log(`[scryfall] fetching  — ${name}${edition ? ` [${edition}]` : ''}`);
      const res = await fetch(url);
      if (!res.ok) {
        stats.failed++;
        console.warn(
          `[scryfall] not found — ${name}${edition ? ` [${edition}]` : ''} (HTTP ${res.status})`,
        );
        return null;
      }
      const data = (await res.json()) as Record<string, unknown>;
      const imgUrl = getImageUrl(data);
      if (imgUrl) {
        stats.fetched++;
        cache[key] = imgUrl;
        persistCache();
        console.log(`[scryfall] fetched   — ${name}${edition ? ` [${edition}]` : ''}`);
      }
      return imgUrl;
    } catch (e) {
      stats.failed++;
      console.warn(`[scryfall] error     — ${name}:`, e);
      return null;
    }
  });
}

export async function fetchImageByNumber(
  edition: string,
  number: string,
  language: string,
): Promise<string | null> {
  ensureCache();
  const key = `pick:${edition}:${number}:${language}`;
  if (cache[key]) {
    stats.cacheHit++;
    console.log(`[scryfall] cache hit  — ${edition}/${number}`);
    return cache[key];
  }

  return enqueue(async () => {
    try {
      let url = `https://api.scryfall.com/cards/${encodeURIComponent(edition)}/${encodeURIComponent(number)}`;
      if (language && language !== 'en') url += `/${encodeURIComponent(language)}`;
      console.log(`[scryfall] fetching  — ${edition}/${number}`);
      const res = await fetch(url);
      if (!res.ok) {
        stats.failed++;
        console.warn(`[scryfall] not found — ${edition}/${number} (HTTP ${res.status})`);
        return null;
      }
      const data = (await res.json()) as Record<string, unknown>;
      const imgUrl = getImageUrl(data);
      if (imgUrl) {
        stats.fetched++;
        cache[key] = imgUrl;
        persistCache();
        console.log(`[scryfall] fetched   — ${edition}/${number}`);
      }
      return imgUrl;
    } catch (e) {
      stats.failed++;
      console.warn(`[scryfall] error     — ${edition}/${number}:`, e);
      return null;
    }
  });
}
