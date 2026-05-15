#!/usr/bin/env node
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import {
  parseSearchTagArgs,
  parsePickArgs,
  cacheKey,
  normalizeForRetry,
  tokenize,
  type SearchArgs,
  type PickArgs,
} from '../src/plugins/mtg-tag-shared';
import type { Card } from '../src/plugins/mtg-card-cache';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ---------- interfaces ----------

type PostRef =
  | { kind: 'search'; args: SearchArgs; sources: string[] }
  | { kind: 'pick'; args: PickArgs; sources: string[] };

interface NotFoundEntry {
  first_seen: string;
  sources: string[];
}

interface CacheShape {
  schema: string;
  found: Record<string, Card>;
  not_found: Record<string, NotFoundEntry>;
}

interface Envelope {
  key: string;
  ref: PostRef;
}

// Scryfall API response types (intentionally loose — we only consume a subset)
interface ScryfallCard {
  name: string;
  scryfall_uri: string;
  oracle_id?: string;
  layout: string;
  flavor_name?: string;
  set?: string;
  collector_number?: string;
  image_uris?: { large?: string };
  card_faces?: Array<{ image_uris?: { large?: string } }>;
}

interface CollectionResponse {
  data: ScryfallCard[];
  not_found?: Array<Record<string, unknown>>;
}

// ---------- path constants ----------

const REPO_ROOT = path.resolve(__dirname, '..');
let POSTS_DIR = path.join(REPO_ROOT, 'src', 'content', 'posts');
let CACHE_DIR = path.join(REPO_ROOT, '.cache');
let CACHE_FILE = path.join(CACHE_DIR, 'cards.json');
let CACHE_TMP = CACHE_FILE + '.tmp';
let LOCK_FILE = path.join(CACHE_DIR, 'cards.lock');
export const CACHE_SCHEMA = '20260512-faces';
const TODAY = new Date().toISOString().slice(0, 10);

const SCRYFALL_BASE = 'https://api.scryfall.com';
const COLLECTION_BATCH_SIZE = 75;
let RATE_LIMIT_MS = 500;

/**
 * Test-only: redirect filesystem paths and rate-limit. Pass an empty object
 * (or omit fields) to revert to production defaults.
 */
export function __setPathsForTests(
  opts: { postsDir?: string; cacheDir?: string; rateLimitMs?: number } = {},
): void {
  POSTS_DIR = opts.postsDir ?? path.join(REPO_ROOT, 'src', 'content', 'posts');
  CACHE_DIR = opts.cacheDir ?? path.join(REPO_ROOT, '.cache');
  CACHE_FILE = path.join(CACHE_DIR, 'cards.json');
  CACHE_TMP = CACHE_FILE + '.tmp';
  LOCK_FILE = path.join(CACHE_DIR, 'cards.lock');
  RATE_LIMIT_MS = opts.rateLimitMs ?? 500;
}

const REFRESH = process.argv.includes('--refresh');

// Module-level regex with 'g' flag; reset lastIndex at the top of each file
// scan rather than constructing a new RegExp per iteration.
const TAG_RE = /\{%\s*(mtgcard|mtglink|mtgpick)\s+([\s\S]*?)\s*%\}/g;

// Curly-quote normalisation for mtgmerge JSON bodies. The character classes
// MUST be built via String.fromCharCode so the source bytes are unambiguously
// U+201C / U+201D / U+2018 / U+2019 — typing literal curly chars here would be
// silently corrupted by some editors back into the ASCII variants, making the
// replace a no-op.
const CURLY_DOUBLE_RE = new RegExp(
  '[' + String.fromCharCode(0x201c) + String.fromCharCode(0x201d) + ']',
  'g',
);
const CURLY_SINGLE_RE = new RegExp(
  '[' + String.fromCharCode(0x2018) + String.fromCharCode(0x2019) + ']',
  'g',
);

// ---------- post scanning ----------
async function listPostFiles(): Promise<string[]> {
  const out: string[] = [];
  async function walk(dir: string): Promise<void> {
    const entries = await fsp.readdir(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) await walk(full);
      else if (e.isFile() && (e.name.endsWith('.md') || e.name.endsWith('.mdx'))) out.push(full);
    }
  }
  await walk(POSTS_DIR);
  return out;
}

export function scanTextForRefs(text: string, rel: string, refs: Map<string, PostRef>): void {
  // Sanity check: count raw tag opens vs parsed matches.
  const rawOpens = (text.match(/\{%\s*(mtgcard|mtglink|mtgpick)\b/g) || []).length;
  let parsedCount = 0;

  // Scan the whole file text so multi-line tags are detected.
  TAG_RE.lastIndex = 0;
  let m;
  while ((m = TAG_RE.exec(text)) !== null) {
    // Derive 1-indexed line number from the match offset.
    const lineNo = text.slice(0, m.index).split('\n').length;

    const tagName = m[1];
    const tokens = tokenize(m[2]);
    const isPick = tagName === 'mtgpick';
    let ref: PostRef;
    if (isPick) {
      const args = parsePickArgs(tokens);
      if (!args.edition || !args.collectionNumber) continue;
      ref = { kind: 'pick', args, sources: [] };
    } else {
      const args = parseSearchTagArgs(tokens);
      if (!args.name) continue;
      ref = { kind: 'search', args, sources: [] };
    }

    parsedCount++;
    const key = cacheKey(ref.kind, ref.args);
    const source = `${rel}:${lineNo}`;
    const existing = refs.get(key);
    if (existing) {
      if (!existing.sources.includes(source)) existing.sources.push(source);
    } else {
      ref.sources.push(source);
      refs.set(key, ref);
    }
  }

  if (rawOpens > parsedCount) {
    console.warn(
      `[build-card-cache] WARN: file ${rel} contains ${rawOpens} tag opens but only ${parsedCount} parsed — likely an unterminated tag.`,
    );
  }

  // mtgmerge pass
  const MERGE_RE = /\{%\s*mtgmerge\s+([\s\S]*?)\s*%\}/g;
  MERGE_RE.lastIndex = 0;
  let mm;
  while ((mm = MERGE_RE.exec(text)) !== null) {
    const lineNo = text.slice(0, mm.index).split('\n').length;
    let names: unknown;
    try {
      const normalized = mm[1].replace(CURLY_DOUBLE_RE, '"').replace(CURLY_SINGLE_RE, "'");
      names = JSON.parse(normalized);
    } catch {
      continue;
    }
    if (!Array.isArray(names)) continue;
    for (const name of names) {
      if (typeof name !== 'string') continue;
      const args: SearchArgs = {
        name: name.trim(),
        edition: '',
        language: 'en',
        alt: null,
        tooltip: false,
      };
      if (!args.name) continue;
      const key = cacheKey('search', args);
      const source = `${rel}:${lineNo}`;
      const existing = refs.get(key);
      if (existing) {
        if (!existing.sources.includes(source)) existing.sources.push(source);
      } else {
        refs.set(key, { kind: 'search', args, sources: [source] });
      }
    }
  }
}

async function scanPosts(): Promise<Map<string, PostRef>> {
  // Returns: Map<cacheKey, { kind, args, sources: string[] }>
  const refs = new Map<string, PostRef>();
  const files = await listPostFiles();
  for (const file of files) {
    const text = await fsp.readFile(file, 'utf8');
    const rel = path.relative(REPO_ROOT, file);
    scanTextForRefs(text, rel, refs);
  }
  return refs;
}

// ---------- cache load ----------
function emptyCache(): CacheShape {
  return { schema: CACHE_SCHEMA, found: {}, not_found: {} };
}

function loadCache(): CacheShape {
  try {
    const raw = fs.readFileSync(CACHE_FILE, 'utf8');
    const parsed = JSON.parse(raw) as CacheShape;
    if (parsed.schema !== CACHE_SCHEMA) {
      console.log(
        `[build-card-cache] schema ${parsed.schema || '(none)'} → ${CACHE_SCHEMA}; clearing cache.`,
      );
      return emptyCache();
    }
    if (!parsed.found) parsed.found = {};
    if (!parsed.not_found) parsed.not_found = {};
    return parsed;
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code !== 'ENOENT') {
      console.warn(
        `[build-card-cache] cache unreadable (${(err as Error).message}); starting from empty.`,
      );
    }
    return emptyCache();
  }
}

// ---------- atomic write + lock ----------
export function acquireLock(): boolean {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
  try {
    fs.writeFileSync(LOCK_FILE, String(process.pid), { flag: 'wx' });
    return true;
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code !== 'EEXIST') throw err;

    // Lockfile exists — probe whether the recorded PID is still alive.
    let stalePid: number;
    try {
      const body = fs.readFileSync(LOCK_FILE, 'utf8').trim();
      stalePid = body ? parseInt(body, 10) : NaN;
    } catch {
      stalePid = NaN;
    }

    if (!Number.isFinite(stalePid)) {
      // Non-numeric or empty lockfile body — treat as stale.
      try {
        fs.unlinkSync(LOCK_FILE);
      } catch {}
      console.warn('[build-card-cache] removing stale lock (unreadable PID)');
      try {
        fs.writeFileSync(LOCK_FILE, String(process.pid), { flag: 'wx' });
        return true;
      } catch {
        console.warn(
          `[build-card-cache] lock acquire failed; if no other build is running, remove ${LOCK_FILE} manually.`,
        );
        return false;
      }
    }

    try {
      process.kill(stalePid, 0);
      // Signal succeeded → process is alive (or EPERM, caught below).
      console.warn(
        `[build-card-cache] another instance (PID ${stalePid}) holds the lock; skipping write.`,
      );
      return false;
    } catch (killErr) {
      if ((killErr as NodeJS.ErrnoException).code === 'EPERM') {
        // Process exists but owned by another user — treat as alive.
        console.warn(
          `[build-card-cache] another instance (PID ${stalePid}) holds the lock; skipping write.`,
        );
        return false;
      }
      // ESRCH: process dead — stale lock.
      try {
        fs.unlinkSync(LOCK_FILE);
      } catch {}
      console.warn(`[build-card-cache] removing stale lock from PID ${stalePid}`);
      try {
        fs.writeFileSync(LOCK_FILE, String(process.pid), { flag: 'wx' });
        return true;
      } catch {
        console.warn(
          `[build-card-cache] lock acquire failed; if no other build is running, remove ${LOCK_FILE} manually.`,
        );
        return false;
      }
    }
  }
}

export function releaseLock(): void {
  try {
    fs.unlinkSync(LOCK_FILE);
  } catch {}
}

export function writeCache(cache: CacheShape): void {
  cache.schema = CACHE_SCHEMA;
  fs.mkdirSync(CACHE_DIR, { recursive: true });
  fs.writeFileSync(CACHE_TMP, JSON.stringify(cache, null, 2));
  fs.renameSync(CACHE_TMP, CACHE_FILE);
}

// ---------- Scryfall fetching ----------
function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

// Scryfall's image data lives in one of three shapes depending on layout:
//   - top-level image_uris only (normal / saga / class / case / prototype /
//     meld / token: one printed face)
//   - top-level image_uris + card_faces[] with null per-face image_uris
//     (split / flip / aftermath / adventure / prepare: two halves share one
//     printed image)
//   - no top-level image_uris, card_faces[] carries per-face image_uris
//     (transform / modal_dfc / double_faced_token / reversible_card /
//     art_series: physically two-sided)
// normalizeFaces collapses these into a single card_faces: [{image}, ...]
// array so consumers never have to branch on layout. For split-family inputs
// we copy the top-level image into each face slot.
const SPLIT_FAMILY_LAYOUTS = new Set(['split', 'flip', 'aftermath', 'adventure', 'prepare']);
const DFC_FAMILY_LAYOUTS = new Set([
  'transform',
  'modal_dfc',
  'double_faced_token',
  'reversible_card',
  'art_series',
]);

function isFrontUrl(u: unknown): boolean {
  return typeof u === 'string' && u.includes('/large/front/');
}
function isBackUrl(u: unknown): boolean {
  return typeof u === 'string' && u.includes('/large/back/');
}

export function normalizeFaces(c: ScryfallCard): Array<{ image: string | null }> {
  const top = c.image_uris?.large ?? null;
  const raw = Array.isArray(c.card_faces) && c.card_faces.length > 0 ? c.card_faces : [null];
  const faces = raw.map((f) => ({ image: f?.image_uris?.large ?? top }));

  // Front face must sit at [0]. Scryfall already orders DFC faces this way,
  // but verify by URL so we stay correct if the order ever changes.
  if (faces.length === 2 && isBackUrl(faces[0].image) && isFrontUrl(faces[1].image)) {
    [faces[0], faces[1]] = [faces[1], faces[0]];
  }

  // Bad data shouldn't fail the build, but should be loud.
  const urls = faces.map((f) => f.image);
  const allSame = urls.length > 1 && urls.every((u) => u === urls[0]);
  if (allSame && !SPLIT_FAMILY_LAYOUTS.has(c.layout)) {
    console.warn(
      `[build-card-cache] WARN: duplicate face URLs on non-split layout: ${c.name} (${c.layout})`,
    );
  }
  if (urls.some(isBackUrl) && !DFC_FAMILY_LAYOUTS.has(c.layout)) {
    console.warn(
      `[build-card-cache] WARN: back-face URL on non-DFC layout: ${c.name} (${c.layout})`,
    );
  }
  return faces;
}

// Scryfall appends `?utm_source=api` to scryfall_uri on every API response.
// We render this URL into post HTML, so dropping the param keeps the rendered
// links clean and doesn't pollute Scryfall's analytics with our blog traffic.
function stripScryfallUri(uri: string): string {
  return typeof uri === 'string' ? uri.replace(/\?utm_source=api$/, '') : uri;
}

export function trimCardData(c: ScryfallCard): Card {
  // Keep only fields the runtime renderer needs. Drops legalities, prices,
  // rulings, oracle_text, etc. — drastically smaller cache.
  // `oracle_id` is conditionally included: Scryfall omits it for some layouts
  // (art_series, certain tokens). Setting it to `undefined` would JSON.stringify
  // away anyway, but explicit omission keeps the in-memory object honest too.
  const trimmed: Card = {
    name: c.name,
    scryfall_uri: stripScryfallUri(c.scryfall_uri),
    layout: c.layout,
    card_faces: normalizeFaces(c),
  };
  if (c.oracle_id) trimmed.oracle_id = c.oracle_id;
  return trimmed;
}

export function buildCollectionIdentifier(ref: PostRef): Record<string, string> {
  const { kind, args } = ref;
  if (kind === 'pick') {
    return { set: args.edition, collector_number: args.collectionNumber };
  }
  // search kind
  if (args.edition) return { name: args.name, set: args.edition };
  return { name: args.name };
}

async function postCollection(identifiers: Record<string, string>[]): Promise<CollectionResponse> {
  // identifiers: array of {name?, set?, collector_number?}, max 75
  const res = await fetch(`${SCRYFALL_BASE}/cards/collection`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ identifiers }),
  });
  if (!res.ok) {
    throw new Error(`Scryfall collection HTTP ${res.status}`);
  }
  return res.json() as Promise<CollectionResponse>;
}

async function getSingleCardMultilingual(args: SearchArgs): Promise<ScryfallCard | null> {
  // Multilingual single-card fallback. Used only for kind=search with
  // language !== "en". Two paths depending on whether `set` is given.
  const q = args.edition
    ? `!"${args.name}" set:${args.edition} lang:${args.language}`
    : `!"${args.name}" lang:${args.language}`;
  const url = `${SCRYFALL_BASE}/cards/search?q=${encodeURIComponent(q)}&include_multilingual=1`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const json = (await res.json()) as { data?: ScryfallCard[] };
  if (!json.data || json.data.length === 0) return null;
  return json.data[0];
}

// Normalize for tolerant name comparison. Strips diacritics, smart quotes,
// dashes, ellipsis, and any non-alphanumeric characters, collapses whitespace,
// lowercases. Designed to forgive Unicode quirks the OS or author keyboard
// emits automatically (smart quotes from macOS, missing diacritics on TW
// keyboards, U+2026 ellipsis), without forgiving real word-level typos like
// missing/extra spaces between word stems.
function normalizeForFuzzyMatch(s: string): string {
  return s
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// A name carrying Hexo tag delimiters indicates a malformed source tag
// (author wrote `{% mtglink "Dandân"}` and missed the closing space + `%`,
// so `}` got captured into the first arg). Such inputs are typos, not card
// names; we want them surfaced in the build summary, not silently rescued.
const HEXO_DELIM_RE = /[{}%<>]/;

async function getSingleCardByFlavor(args: SearchArgs): Promise<ScryfallCard | null> {
  // Last-resort fallback for entries that POST /cards/collection cannot
  // match. Two acceptable hit modes:
  //
  //   1. Universes Beyond flavor names — author writes "Stay with Me" but
  //      Scryfall's oracle name is "Rhystic Study". collection cannot match;
  //      search's `!"X"` operator does (it matches flavor_name too).
  //      We require strict equality on flavor_name, since Scryfall accepts
  //      this name as canonical.
  //
  //   2. Cosmetic Unicode mismatches — smart quotes, missing accents,
  //      ellipsis. These are OS- or keyboard-driven and unreasonable to
  //      demand authors fix per-occurrence. We accept when normalize() of
  //      both sides match. Real typos (missing spaces, wrong words) survive
  //      this filter and stay in not_found.
  if (HEXO_DELIM_RE.test(args.name)) return null;
  const q = args.edition ? `!"${args.name}" set:${args.edition}` : `!"${args.name}"`;
  const url = `${SCRYFALL_BASE}/cards/search?q=${encodeURIComponent(q)}`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const json = (await res.json()) as { data?: ScryfallCard[] };
  if (!json.data || json.data.length === 0) return null;
  const card = json.data[0];
  if (card.flavor_name && card.flavor_name === args.name) return card;
  if (normalizeForFuzzyMatch(card.name) === normalizeForFuzzyMatch(args.name)) return card;
  return null;
}

// ---------- diff & batch ----------
function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

// Accepts envelopes shaped { key, ref: { kind, args, … } }.
// Returns a Map<key, trimmedCard> for successful matches.
export function matchResultBack(
  envelopes: Envelope[],
  foundCards: ScryfallCard[],
): Map<string, Card> {
  // Match Scryfall result to envelope entry. Scryfall echoes identifiers in
  // the not_found array verbatim; for `data` we match by name+set or
  // set+number.
  const matched = new Map<string, Card>(); // env.key -> trimmed card
  for (const card of foundCards) {
    for (const env of envelopes) {
      if (matched.has(env.key)) continue;
      if (env.ref.kind === 'pick') {
        if (
          card.set?.toLowerCase() === env.ref.args.edition.toLowerCase() &&
          String(card.collector_number) === String(env.ref.args.collectionNumber)
        ) {
          matched.set(env.key, trimCardData(card));
          break;
        }
      } else {
        // search: match by name (case-insensitive); honor set if given.
        // Scryfall card name for DFC is "Front // Back"; author often supplies
        // only "Front" — accept startsWith match.
        const cardName = card.name.toLowerCase();
        const wantName = env.ref.args.name.toLowerCase();
        const nameOk = cardName === wantName || cardName.startsWith(wantName + ' // ');
        const setOk =
          !env.ref.args.edition || card.set?.toLowerCase() === env.ref.args.edition.toLowerCase();
        if (nameOk && setOk) {
          matched.set(env.key, trimCardData(card));
          break;
        }
      }
    }
  }
  return matched;
}

// ---------- main ----------
export async function main(): Promise<void> {
  console.log('[build-card-cache] scanning posts...');
  const refs = await scanPosts();
  console.log(`[build-card-cache] found ${refs.size} unique tag references.`);

  const cache = loadCache();
  if (REFRESH) {
    console.log('[build-card-cache] --refresh: clearing cache.found and cache.not_found.');
    cache.found = {};
    cache.not_found = {};
  }

  // Snapshot for end-of-run diff detection. If the cache content changes,
  // Astro's content-layer cache (`.astro/data-store.json`) is stale and must
  // be invalidated so MDX gets re-rendered through the latest cache.
  const cacheBeforeJson = JSON.stringify(cache);

  // Determine missing: not in found AND not in not_found.
  // Also split out multilingual (kind=search && language!=="en") for single-card path.
  // Args carrying Hexo tag delimiters are routed straight to malformed —
  // they came from a broken source tag and shouldn't waste API calls.
  const englishMissing: Envelope[] = []; // [{ key, ref }]
  const multilingualMissing: Envelope[] = []; // same shape
  const malformed: Envelope[] = []; // same shape — recorded as not_found without fetch
  for (const [key, ref] of refs) {
    if (cache.found[key]) continue;
    if (cache.not_found[key]) continue;
    if (ref.kind === 'search' && HEXO_DELIM_RE.test(ref.args.name)) {
      malformed.push({ key, ref });
      continue;
    }
    if (ref.kind === 'search' && ref.args.language !== 'en') {
      multilingualMissing.push({ key, ref });
    } else {
      englishMissing.push({ key, ref });
    }
  }

  console.log(
    `[build-card-cache] missing: ${englishMissing.length} batchable, ${multilingualMissing.length} multilingual single-fetch${malformed.length ? `, ${malformed.length} malformed (skipped)` : ''}.`,
  );

  if (!acquireLock()) {
    console.warn(
      '[build-card-cache] another instance holds the lock; will read-only and skip writes.',
    );
    summarize(cache, refs);
    return;
  }

  try {
    // --- Batched English fetches ---
    const stillNotFound: Envelope[] = []; // [{ key, ref }]
    let batchCount = 0;
    for (const batch of chunk(englishMissing, COLLECTION_BATCH_SIZE)) {
      if (batchCount > 0) await sleep(RATE_LIMIT_MS);
      batchCount++;
      const identifiers = batch.map((m) => buildCollectionIdentifier(m.ref));
      console.log(
        `[build-card-cache] batch ${batchCount}/${Math.ceil(englishMissing.length / COLLECTION_BATCH_SIZE)} (${identifiers.length} identifiers)`,
      );
      let resp: CollectionResponse;
      try {
        resp = await postCollection(identifiers);
      } catch (err) {
        console.warn(
          `[build-card-cache] batch failed: ${(err as Error).message}; preserving existing cache, skipping ${batch.length} entries.`,
        );
        continue;
      }
      // Pass batch directly — envelopes are already { key, ref }.
      const matched = matchResultBack(batch, resp.data || []);
      for (const m of batch) {
        const card = matched.get(m.key);
        if (card) {
          cache.found[m.key] = card;
        } else {
          stillNotFound.push(m);
        }
      }
    }

    // --- DFC retry layer 1: normalize spacing around `//` ---
    const dfcRetryCandidates = stillNotFound.filter(
      (m) => m.ref.kind === 'search' && m.ref.args.name.includes('//'),
    );
    // Entries that don't qualify for either DFC retry collect here.
    const trulyNotFound = stillNotFound.filter(
      (m) => !(m.ref.kind === 'search' && m.ref.args.name.includes('//')),
    );

    if (dfcRetryCandidates.length > 0) {
      await sleep(RATE_LIMIT_MS);
      // Build envelopes with normalized names; preserve original key.
      // dfcRetryCandidates are all kind='search' (filtered above).
      const spacingRetryEnvelopes: Envelope[] = dfcRetryCandidates.map((m) => {
        const sref = m.ref as Extract<PostRef, { kind: 'search' }>;
        return {
          key: m.key,
          ref: {
            kind: 'search' as const,
            args: { ...sref.args, name: normalizeForRetry(sref.args.name) },
            sources: sref.sources,
          },
        };
      });
      const identifiers = spacingRetryEnvelopes.map((env) => buildCollectionIdentifier(env.ref));
      console.log(`[build-card-cache] DFC retry batch (${identifiers.length} identifiers)`);
      // Candidates that survive spacing retry go into this list for the
      // front-face retry (layer 2).
      const stillAfterSpacing: Envelope[] = [];
      try {
        const resp = await postCollection(identifiers);
        const matched = matchResultBack(spacingRetryEnvelopes, resp.data || []);
        for (let i = 0; i < dfcRetryCandidates.length; i++) {
          const orig = dfcRetryCandidates[i];
          const card = matched.get(orig.key);
          if (card) {
            // Store under the ORIGINAL key so future builds don't need retry.
            cache.found[orig.key] = card;
          } else {
            stillAfterSpacing.push(orig);
          }
        }
      } catch (err) {
        console.warn(`[build-card-cache] DFC retry batch failed: ${(err as Error).message}`);
        for (const m of dfcRetryCandidates) stillAfterSpacing.push(m);
      }

      // --- DFC retry layer 2: submit front-face name (split on " // ") ---
      // Authors who write the canonical full DFC name fail layer 1 because
      // Scryfall's collection endpoint only accepts the front face by name.
      const frontFaceCandidates = stillAfterSpacing.filter(
        (m) => m.ref.kind === 'search' && m.ref.args.name.includes('//'),
      );
      if (frontFaceCandidates.length > 0) {
        await sleep(RATE_LIMIT_MS);
        const frontFaceEnvelopes: Envelope[] = frontFaceCandidates.map((m) => {
          const sref = m.ref as Extract<PostRef, { kind: 'search' }>;
          return {
            key: m.key,
            ref: {
              kind: 'search' as const,
              args: { ...sref.args, name: sref.args.name.split('//')[0].trim() },
              sources: sref.sources,
            },
          };
        });
        const ffIdentifiers = frontFaceEnvelopes.map((env) => buildCollectionIdentifier(env.ref));
        console.log(
          `[build-card-cache] DFC front-face retry batch (${ffIdentifiers.length} identifiers)`,
        );
        try {
          const resp = await postCollection(ffIdentifiers);
          const matched = matchResultBack(frontFaceEnvelopes, resp.data || []);
          for (const orig of frontFaceCandidates) {
            const card = matched.get(orig.key);
            if (card) {
              // Store under the ORIGINAL key so future builds don't need retry.
              cache.found[orig.key] = card;
            } else {
              trulyNotFound.push(orig);
            }
          }
        } catch (err) {
          console.warn(
            `[build-card-cache] DFC front-face retry batch failed: ${(err as Error).message}`,
          );
          for (const m of frontFaceCandidates) trulyNotFound.push(m);
        }
      }

      // Entries from stillAfterSpacing that don't have "//" (shouldn't happen
      // given the filter above, but be safe) go straight to trulyNotFound.
      for (const m of stillAfterSpacing) {
        if (!(m.ref.kind === 'search' && m.ref.args.name.includes('//'))) {
          trulyNotFound.push(m);
        }
      }
    }

    // --- Multilingual single fetches ---
    for (const m of multilingualMissing) {
      await sleep(RATE_LIMIT_MS);
      let card: ScryfallCard | null;
      try {
        card = await getSingleCardMultilingual(
          (m.ref as Extract<PostRef, { kind: 'search' }>).args,
        );
      } catch (err) {
        console.warn(
          `[build-card-cache] multilingual fetch failed for ${m.key}: ${(err as Error).message}`,
        );
        continue;
      }
      if (card) cache.found[m.key] = trimCardData(card);
      else trulyNotFound.push(m);
    }

    // --- Flavor name fallback ---
    // Universes Beyond printings (e.g. fca's "Stay with Me" for Rhystic Study)
    // have a flavor_name distinct from the oracle name. The collection
    // endpoint cannot match these; the search endpoint's `!"X"` operator can.
    // Pull qualifying entries out of trulyNotFound, retry, and only re-add
    // those that still miss.
    const flavorRetryCandidates = trulyNotFound.filter((m) => m.ref.kind === 'search');
    if (flavorRetryCandidates.length > 0) {
      const remainsAfterFlavor = trulyNotFound.filter((m) => m.ref.kind !== 'search');
      for (const m of flavorRetryCandidates) {
        await sleep(RATE_LIMIT_MS);
        let card: ScryfallCard | null = null;
        try {
          const sref = (m.ref as Extract<PostRef, { kind: 'search' }>).args;
          card = await getSingleCardByFlavor(sref);
        } catch (err) {
          console.warn(
            `[build-card-cache] flavor retry failed for ${m.key}: ${(err as Error).message}`,
          );
        }
        if (card) {
          const sref = (m.ref as Extract<PostRef, { kind: 'search' }>).args;
          console.log(
            `[build-card-cache] flavor retry hit: "${sref.name}" → ${card.name} (${card.set} ${card.collector_number})`,
          );
          cache.found[m.key] = trimCardData(card);
        } else {
          remainsAfterFlavor.push(m);
        }
      }
      trulyNotFound.length = 0;
      trulyNotFound.push(...remainsAfterFlavor);
    }

    // Malformed entries join the not_found list without an API call.
    for (const m of malformed) trulyNotFound.push(m);

    // --- Record not_found entries (keep first_seen if already present) ---
    for (const m of trulyNotFound) {
      const existing = cache.not_found[m.key];
      cache.not_found[m.key] = {
        first_seen: existing?.first_seen || TODAY,
        sources: m.ref.sources,
      };
    }

    writeCache(cache);

    // Astro's content-layer cache holds rendered MDX output; it does NOT
    // invalidate when `.cache/cards.json` changes (only when the .md source
    // mtime changes). If our cache changed, drop the rendered cache so the
    // next build/dev re-renders through the fresh card data.
    if (JSON.stringify(cache) !== cacheBeforeJson) {
      invalidateAstroDataStore();
    }
  } finally {
    releaseLock();
  }

  summarize(cache, refs);
}

function invalidateAstroDataStore(): void {
  // `.astro` sits next to `.cache` in production. Deriving from CACHE_DIR's
  // parent makes the path follow __setPathsForTests redirection (so tests
  // never touch the real repo's `.astro`).
  const dataStore = path.join(path.dirname(CACHE_DIR), '.astro', 'data-store.json');
  try {
    fs.unlinkSync(dataStore);
    console.log('[build-card-cache] invalidated .astro/data-store.json');
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code !== 'ENOENT') {
      console.warn(
        `[build-card-cache] failed to invalidate .astro/data-store.json: ${(err as Error).message}`,
      );
    }
  }
}

function summarize(cache: CacheShape, refs: Map<string, PostRef>): void {
  const total = refs.size;
  const found = [...refs.keys()].filter((k) => cache.found[k]).length;
  const notFound = [...refs.keys()].filter((k) => cache.not_found[k]).length;
  console.log('');
  console.log(
    `[build-card-cache] summary: ${found} found, ${notFound} not_found, total tag refs ${total}`,
  );
  if (notFound > 0) {
    console.log('[build-card-cache] unresolved entries:');
    for (const [key, ref] of refs) {
      if (cache.not_found[key]) {
        const meta = cache.not_found[key];
        let label: string;
        if (ref.kind === 'pick') {
          label = `${ref.args.edition} #${ref.args.collectionNumber}`;
        } else {
          label = `"${ref.args.name}"${ref.args.edition ? ` [${ref.args.edition}]` : ''}`;
        }
        console.log(`  ${label}`);
        for (const src of meta.sources) console.log(`    at ${src}`);
      }
    }
  }
}

const isMain = import.meta.url === pathToFileURL(process.argv[1]).href;
if (isMain) {
  main().catch((err: unknown) => {
    console.error('[build-card-cache] fatal:', err);
    process.exitCode = 1;
  });
}
