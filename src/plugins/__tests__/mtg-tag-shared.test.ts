import { describe, it, expect } from 'vitest';
import {
  parseSearchTagArgs,
  parsePickArgs,
  cacheKey,
  htmlEscape,
  normalizeForRetry,
  tokenize, // NEW
  SET_CODE_PATTERN,
} from '../mtg-tag-shared';

describe('SET_CODE_PATTERN', () => {
  it('accepts 2-6 alphanumerics including 4-letter promo sets', () => {
    expect(SET_CODE_PATTERN.test('lea')).toBe(true);
    expect(SET_CODE_PATTERN.test('pmh1')).toBe(true);
    expect(SET_CODE_PATTERN.test('pmoc')).toBe(true);
    expect(SET_CODE_PATTERN.test('a')).toBe(false);
    expect(SET_CODE_PATTERN.test('toolong')).toBe(false);
  });
});

describe('parseSearchTagArgs', () => {
  it('treats single token as name only', () => {
    const r = parseSearchTagArgs(['Counterspell']);
    expect(r.name).toBe('Counterspell');
    expect(r.edition).toBe('');
  });
  it('uses second token as edition for single-word name', () => {
    const r = parseSearchTagArgs(['Counterspell', 'lea']);
    expect(r.edition).toBe('lea');
  });
  it('uses second token as edition for quoted multi-word name', () => {
    // Authors write `{% mtgcard "Lightning Bolt" lea %}`; upstream tokenizer
    // strips the quotes and emits ['Lightning Bolt', 'lea'].
    const r = parseSearchTagArgs(['Lightning Bolt', 'lea']);
    expect(r.name).toBe('Lightning Bolt');
    expect(r.edition).toBe('lea');
  });
  it('positional parser only inspects index 1 — unquoted multi-word names lose edition', () => {
    // Documents a real limitation: if an author writes `{% mtgcard Lightning Bolt lea %}`
    // (no quotes), the tokenizer emits three tokens and the parser sees `Bolt` at index 1.
    // `Bolt` matches SET_CODE_PATTERN, so it's taken as edition; `lea` falls through to
    // applyKv (no `=`) and is silently dropped. Real posts in this repo all use quotes,
    // so this case is documented rather than supported.
    const r = parseSearchTagArgs(['Lightning', 'Bolt', 'lea']);
    expect(r.name).toBe('Lightning');
    expect(r.edition).toBe('bolt');
  });
  it('accepts 4-letter promo set codes', () => {
    const r = parseSearchTagArgs(['Sol Ring', 'pmh1']);
    expect(r.edition).toBe('pmh1');
  });
  it('parses key=value pairs', () => {
    const r = parseSearchTagArgs(['Black Lotus', 'alt=蓮花', 'tooltip=true']);
    expect(r.alt).toBe('蓮花');
    expect(r.tooltip).toBe(true);
  });
  it('coerces boolean values case-insensitively', () => {
    expect(parseSearchTagArgs(['X', 'tooltip=True']).tooltip).toBe(true);
    expect(parseSearchTagArgs(['X', 'tooltip=TRUE']).tooltip).toBe(true);
    expect(parseSearchTagArgs(['X', 'tooltip=False']).tooltip).toBe(false);
    expect(parseSearchTagArgs(['X', 'tooltip=FALSE']).tooltip).toBe(false);
  });
  it('preserves original casing for non-boolean values', () => {
    // Case-insensitive boolean check must not strip case from string values.
    const r = parseSearchTagArgs(['X', 'alt=Foo']);
    expect(r.alt).toBe('Foo');
  });
  it('does NOT parse key:value (colon form removed)', () => {
    const r = parseSearchTagArgs(['Black Lotus', 'alt:蓮花']);
    expect(r.alt).toBeNull();
  });
  it('trims ideographic space (U+3000)', () => {
    const r = parseSearchTagArgs(['　Black Lotus　']);
    expect(r.name).toBe('Black Lotus');
  });
});

describe('parsePickArgs', () => {
  it('takes edition (lowercased) and collection number positionally', () => {
    const r = parsePickArgs(['BLB', '82']);
    expect(r.edition).toBe('blb');
    expect(r.collectionNumber).toBe('82');
  });
  it('parses key=value extras', () => {
    const r = parsePickArgs(['blb', '82', 'language=ja']);
    expect(r.language).toBe('ja');
  });
});

describe('cacheKey', () => {
  it('builds search key', () => {
    expect(cacheKey('search', { name: 'X', edition: '', language: 'en' })).toBe('search|X||en');
  });
  it('builds pick key', () => {
    expect(cacheKey('pick', { edition: 'blb', collectionNumber: '82', language: 'en' })).toBe(
      'pick|blb|82|en',
    );
  });
  it('throws on unknown kind', () => {
    expect(() => cacheKey('xx' as never, {} as never)).toThrow();
  });
});

describe('htmlEscape', () => {
  it("escapes &<>\"'", () => {
    expect(htmlEscape(`a&b<c>d"e'f`)).toBe('a&amp;b&lt;c&gt;d&quot;e&#39;f');
  });
});

describe('normalizeForRetry', () => {
  it('collapses spacing around //', () => {
    expect(normalizeForRetry('Fire//Ice')).toBe('Fire // Ice');
    expect(normalizeForRetry('Fire//   Ice')).toBe('Fire // Ice');
  });
});

describe('tokenize', () => {
  it('splits on whitespace respecting "quotes"', () => {
    expect(tokenize('Black Lotus alt="Foo bar"')).toEqual(['Black', 'Lotus', 'alt=Foo bar']);
  });

  it('treats backslash-escaped space as part of the surrounding token', () => {
    expect(tokenize('Black\\ Lotus')).toEqual(['Black Lotus']);
  });

  it('handles backslash-escaped name followed by trailing edition', () => {
    expect(tokenize('Memory\\ Lapse ema')).toEqual(['Memory Lapse', 'ema']);
  });

  it('treats backslash-escaped double-quote as literal, not delimiter', () => {
    // Inside a bare token, \" is consumed as a literal " — the token is not
    // split and the quote does not toggle inQuote state.
    expect(tokenize('Hello\\"World')).toEqual(['Hello"World']);
  });

  it('treats a lone trailing backslash as a literal character', () => {
    expect(tokenize('Foo\\')).toEqual(['Foo\\']);
  });

  // Single quotes are NOT delimiters — only `"`, U+201C, U+201D toggle inQuote.
  // The two tests below document the asymmetry so authors don't reach for
  // single-quote wrapping by mistake.
  it("does not treat single quote ' as a delimiter — splits on the inner whitespace", () => {
    expect(tokenize("'Black Lotus'")).toEqual(["'Black", "Lotus'"]);
  });

  it("single-quote wrapping with backslash space yields one token with literal apostrophes", () => {
    expect(tokenize("'Black\\ Lotus'")).toEqual(["'Black Lotus'"]);
  });

  // Adjacent `""` pairs arise after smartypants strips the `\` from `\"`
  // escapes inside `"..."`-wrapped tag args. Without special handling, the
  // tokenizer would treat each `""` as an open-then-close, dropping the user's
  // intent to embed a literal `"`. We restore the intent: `""` adjacent is one
  // quote-toggle plus one literal `"`, with direction depending on inQuote.
  it("treats adjacent `\"\"` at start of input as open-quote plus literal `\"`", () => {
    // Cluster A reproducer: smartypants output of `"\"Ach! Hans, Run!\""`.
    expect(tokenize('""Ach! Hans, Run!""')).toEqual(['"Ach! Hans, Run!"']);
  });

  it("treats adjacent `\"\"` mid-token as literal `\"` then quote-toggle", () => {
    // Inside a quoted token, `""` should emit the literal then close.
    expect(tokenize('"foo""')).toEqual(['foo"']);
  });

  it("preserves literal `\"` from adjacent `\"\"` inside a quoted span with whitespace", () => {
    // The whole `He said ""Hi""` sits inside an outer quoted span, so the
    // inner spaces must NOT split tokens.
    expect(tokenize('"He said ""Hi"" today"')).toEqual(['He said "Hi" today']);
  });
});
