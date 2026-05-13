import { readFileSync } from 'fs';
import { join } from 'path';

export interface CardFace {
  image: string | null;
}

export interface Card {
  name: string;
  scryfall_uri: string;
  layout: string;
  card_faces: CardFace[];
  // Surfaced for future features that pair printings (e.g. Universes Beyond
  // flavor names, SPM/OM1 cross-printing lookup). Renderer doesn't consume it
  // today. ABSENT (not null) for layouts Scryfall omits it on — `art_series`,
  // certain tokens. Consumers must guard with `if (card.oracle_id)` rather
  // than `card.oracle_id!`.
  oracle_id?: string;
}

interface CacheShape {
  schema: string;
  found: Record<string, Card>;
  not_found: Record<string, { first_seen: string; sources: string[] }>;
}

let cacheData: CacheShape | null = null;
let warnedMissing = false;

/**
 * Test-only: inject cache data directly into the in-memory store, bypassing
 * disk I/O. Pass nothing (or empty fields) to reset to an empty cache.
 */
export function __setCardDataForTests(
  data: {
    found?: Record<string, Card>;
    not_found?: Record<string, { first_seen: string; sources: string[] }>;
  } = {},
): void {
  cacheData = {
    schema: '',
    found: data.found ?? {},
    not_found: data.not_found ?? {},
  };
  warnedMissing = false;
}

function load(): CacheShape {
  if (cacheData) return cacheData;
  const path = join(process.cwd(), '.cache', 'cards.json');
  try {
    const raw = readFileSync(path, 'utf-8');
    const parsed = JSON.parse(raw) as Partial<CacheShape>;
    cacheData = {
      schema: parsed.schema ?? '',
      found: parsed.found ?? {},
      not_found: parsed.not_found ?? {},
    };
  } catch {
    if (!warnedMissing) {
      console.warn(
        '[mtg-card-cache] .cache/cards.json missing — run `npm run cache:update`. Tags will render as errors.',
      );
      warnedMissing = true;
    }
    cacheData = { schema: '', found: {}, not_found: {} };
  }
  return cacheData;
}

export type LookupResult =
  | { ok: true; card: Card }
  | { ok: false; reason: 'missing' | 'not_found' };

export function lookupCard(key: string): LookupResult {
  const c = load();
  if (c.found[key]) return { ok: true, card: c.found[key] };
  if (c.not_found[key]) return { ok: false, reason: 'not_found' };
  return { ok: false, reason: 'missing' };
}
