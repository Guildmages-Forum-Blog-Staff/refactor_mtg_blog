import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { remark } from 'remark';
import remarkStringify from 'remark-stringify';
import {
  remarkMtgMerge,
  parseNames,
  hashNames,
  resolveCardUrls,
  warnOnPartialMiss,
} from '../remark-mtg-merge';
import { __setCardDataForTests, type Card } from '../mtg-card-cache';

beforeEach(() => {
  __setCardDataForTests();
});

const card = (image: string | null, overrides: Partial<Card> = {}): Card => ({
  name: 'X',
  scryfall_uri: 'https://x',
  layout: 'normal',
  card_faces: [{ image }],
  ...overrides,
});

describe('parseNames', () => {
  it('parses a straight-quoted JSON array', () => {
    expect(parseNames('["A", "B"]')).toEqual(['A', 'B']);
  });

  it('normalises curly double-quotes before JSON.parse', () => {
    // U+201C / U+201D wrapping; smartypants-aware editors emit these.
    const ldq = String.fromCharCode(0x201c);
    const rdq = String.fromCharCode(0x201d);
    expect(parseNames(`[${ldq}A${rdq}, ${ldq}B${rdq}]`)).toEqual(['A', 'B']);
  });

  it('filters out whitespace-only entries but preserves padded names verbatim', () => {
    // Author may type a trailing comma producing a `""` slot, or a stray ws-only.
    // Spaces inside a legitimate name (`"  A  "`) are NOT trimmed — that's the
    // author's responsibility.
    expect(parseNames('["A", "   ", "B"]')).toEqual(['A', 'B']);
    expect(parseNames('["  A  ", "B"]')).toEqual(['  A  ', 'B']);
  });

  it('returns null for invalid JSON', () => {
    expect(parseNames('[A, B]')).toBeNull();
    expect(parseNames('not json')).toBeNull();
  });

  it('returns null for non-array JSON', () => {
    expect(parseNames('"single string"')).toBeNull();
    expect(parseNames('{"a":1}')).toBeNull();
  });

  it('returns null when array contains non-string elements', () => {
    expect(parseNames('["A", 42]')).toBeNull();
  });

  it('returns an empty array for an empty JSON array', () => {
    expect(parseNames('[]')).toEqual([]);
  });
});

describe('hashNames', () => {
  it('produces a 12-character hex string', () => {
    const h = hashNames(['A']);
    expect(h).toMatch(/^[0-9a-f]{12}$/);
  });

  it('is order-insensitive (sorts before hashing)', () => {
    expect(hashNames(['A', 'B'])).toBe(hashNames(['B', 'A']));
  });

  it('is case-insensitive (lowercases before hashing)', () => {
    expect(hashNames(['Foo'])).toBe(hashNames(['foo']));
    expect(hashNames(['Foo'])).toBe(hashNames(['FOO']));
  });

  it('produces distinct hashes for distinct name sets', () => {
    expect(hashNames(['A'])).not.toBe(hashNames(['B']));
    expect(hashNames(['A', 'B'])).not.toBe(hashNames(['A', 'C']));
  });
});

describe('resolveCardUrls', () => {
  it('returns the front-face image URL for cache hits', () => {
    __setCardDataForTests({
      found: {
        'search|A||en': card('https://img/a.jpg'),
        'search|B||en': card('https://img/b.jpg', { name: 'B' }),
      },
    });
    expect(resolveCardUrls(['A', 'B'])).toEqual(['https://img/a.jpg', 'https://img/b.jpg']);
  });

  it('returns null entries for cache misses (preserves positional order)', () => {
    __setCardDataForTests({
      found: { 'search|A||en': card('https://img/a.jpg') },
    });
    expect(resolveCardUrls(['A', 'B'])).toEqual(['https://img/a.jpg', null]);
  });

  it('uses search-kind cache key with empty edition and en language', () => {
    // Verified indirectly: card is only found under the exact key shape.
    __setCardDataForTests({
      found: {
        'search|A|lea|en': card('https://wrong-edition.jpg'),
        'search|A||en': card('https://img/a.jpg'),
      },
    });
    expect(resolveCardUrls(['A'])).toEqual(['https://img/a.jpg']);
  });

  it('returns null when card has no face image', () => {
    __setCardDataForTests({
      found: { 'search|A||en': card(null) },
    });
    expect(resolveCardUrls(['A'])).toEqual([null]);
  });
});

describe('warnOnPartialMiss', () => {
  // Without this surface, a 4-card mtgmerge silently produces a 3-card composite
  // when one name fails to resolve. We surface the missing names so author /
  // CI logs can catch the drift.
  const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
  afterEach(() => warnSpy.mockClear());

  it('warns and lists the missing names when only some entries are null', () => {
    warnOnPartialMiss(['A', 'B', 'C'], ['https://a', null, 'https://c']);
    expect(warnSpy).toHaveBeenCalledTimes(1);
    expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('B'));
    expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('1/3'));
  });

  it('is silent when all entries resolved', () => {
    warnOnPartialMiss(['A', 'B'], ['https://a', 'https://b']);
    expect(warnSpy).not.toHaveBeenCalled();
  });

  it('is silent when zero entries resolved (caller emits the no-images warning)', () => {
    warnOnPartialMiss(['A', 'B'], [null, null]);
    expect(warnSpy).not.toHaveBeenCalled();
  });
});

describe('remarkMtgMerge — plugin', () => {
  it('skips when no cards resolved (returns null)', async () => {
    const out = await remark()
      .use(remarkMtgMerge, { base: '/x/' })
      .use(remarkStringify)
      .process('{% mtgmerge ["Foo", "Bar"] %}');
    // Tag remains because no cards stitched; assert the warning path didn't crash.
    expect(String(out)).toContain('mtgmerge');
  });

  it('rejects arrays outside 2-4 cards (warn-only, leaves tag in place)', async () => {
    const out = await remark()
      .use(remarkMtgMerge, { base: '/x/' })
      .use(remarkStringify)
      .process('{% mtgmerge ["Only One"] %}');
    expect(String(out)).toContain('mtgmerge');
  });
});
