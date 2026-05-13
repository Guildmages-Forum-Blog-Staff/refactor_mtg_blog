import { describe, it, expect } from 'vitest';
import {
  scanTextForRefs,
  normalizeFaces,
  matchResultBack,
  buildCollectionIdentifier,
  trimCardData,
} from '../build-card-cache';

describe('scanTextForRefs', () => {
  it('parses all three tag families', () => {
    const refs = new Map();
    scanTextForRefs(
      '{% mtgcard Black Lotus %} {% mtglink Counterspell %} {% mtgpick blb 82 %}',
      'fake.md',
      refs,
    );
    expect(refs.size).toBe(3);
  });
  it('parses mtgmerge JSON arrays into individual name refs', () => {
    const refs = new Map();
    scanTextForRefs('{% mtgmerge ["Foo", "Bar"] %}', 'fake.md', refs);
    expect(refs.size).toBe(2);
  });

  it('normalises curly quotes inside mtgmerge JSON bodies before parsing', () => {
    // Author types straight `"..."` but smartypants-aware editors emit curly
    // U+201C/U+201D, which break JSON.parse. The prebuild must normalise to
    // ASCII before parsing; otherwise the entire mtgmerge ref is silently lost.
    const ldq = String.fromCharCode(0x201c);
    const rdq = String.fromCharCode(0x201d);
    const text = `{% mtgmerge [${ldq}Foo${rdq}, ${ldq}Bar${rdq}] %}`;
    const refs = new Map();
    scanTextForRefs(text, 'fake.md', refs);
    expect(refs.size).toBe(2);
    expect([...refs.keys()].sort()).toEqual([
      'search|Bar||en',
      'search|Foo||en',
    ]);
  });
  it('handles multi-line tag bodies', () => {
    const refs = new Map();
    scanTextForRefs('{% mtgcard\n  Black Lotus\n%}', 'fake.md', refs);
    expect(refs.size).toBe(1);
  });
});

describe('normalizeFaces', () => {
  it('hoists image_uris into one face for normal cards', () => {
    expect(
      normalizeFaces({ name: 'X', scryfall_uri: 'https://x', layout: 'normal', image_uris: { large: 'https://img/x.png' } }),
    ).toEqual([{ image: 'https://img/x.png' }]);
  });
  it('uses card_faces when per-face images are present', () => {
    expect(
      normalizeFaces({
        name: 'X',
        scryfall_uri: 'https://x',
        layout: 'transform',
        card_faces: [
          { image_uris: { large: 'https://img/front.png' } },
          { image_uris: { large: 'https://img/back.png' } },
        ],
      }),
    ).toEqual([{ image: 'https://img/front.png' }, { image: 'https://img/back.png' }]);
  });
  it('reorders DFC when back URL is at index 0', () => {
    const c = {
      name: 'X',
      scryfall_uri: 'https://x',
      layout: 'transform',
      card_faces: [
        { image_uris: { large: 'https://x/large/back/a.png' } },
        { image_uris: { large: 'https://x/large/front/a.png' } },
      ],
    };
    expect(normalizeFaces(c)[0].image).toContain('/front/');
  });
});

describe('matchResultBack', () => {
  it('matches search by name case-insensitively', () => {
    const envs = [
      {
        key: 'k1',
        ref: {
          kind: 'search' as const,
          args: { name: 'Black Lotus', edition: '', language: 'en', alt: null, tooltip: false },
          sources: [],
        },
      },
    ];
    const cards = [
      { name: 'BLACK LOTUS', set: 'lea', layout: 'normal', image_uris: { large: 'https://img/x' }, scryfall_uri: 'https://x' },
    ];
    expect(matchResultBack(envs, cards).has('k1')).toBe(true);
  });
  it('matches DFC front face when search.name is just the front', () => {
    const envs = [
      {
        key: 'k1',
        ref: {
          kind: 'search' as const,
          args: { name: 'Delver of Secrets', edition: '', language: 'en', alt: null, tooltip: false },
          sources: [],
        },
      },
    ];
    const cards = [
      {
        name: 'Delver of Secrets // Insectile Aberration',
        set: 'isd',
        layout: 'transform',
        card_faces: [
          { image_uris: { large: 'https://img/front' } },
          { image_uris: { large: 'https://img/back' } },
        ],
        scryfall_uri: 'https://x',
      },
    ];
    expect(matchResultBack(envs, cards).has('k1')).toBe(true);
  });
});

describe('buildCollectionIdentifier', () => {
  it('returns set+collector_number for pick kind', () => {
    expect(
      buildCollectionIdentifier({
        kind: 'pick',
        args: { edition: 'blb', collectionNumber: '82', language: 'en', alt: null, tooltip: false },
        sources: [],
      }),
    ).toEqual({ set: 'blb', collector_number: '82' });
  });
  it('returns name(+set) for search kind', () => {
    expect(
      buildCollectionIdentifier({
        kind: 'search',
        args: { name: 'Black Lotus', edition: 'lea', language: 'en', alt: null, tooltip: false },
        sources: [],
      }),
    ).toEqual({ name: 'Black Lotus', set: 'lea' });
  });
});

describe('trimCardData', () => {
  it('drops utm_source from scryfall_uri', () => {
    const trimmed = trimCardData({
      name: 'X',
      scryfall_uri: 'https://scryfall.com/x?utm_source=api',
      layout: 'normal',
      image_uris: { large: 'https://img/x' },
    });
    expect(trimmed.scryfall_uri).toBe('https://scryfall.com/x');
  });

  it('includes oracle_id when present', () => {
    const trimmed = trimCardData({
      name: 'X',
      scryfall_uri: 'https://x',
      oracle_id: 'oracle-abc',
      layout: 'normal',
      image_uris: { large: 'https://img/x' },
    });
    expect(trimmed.oracle_id).toBe('oracle-abc');
  });

  it('omits the oracle_id key entirely when source lacks it', () => {
    // Scryfall omits oracle_id for art_series and some tokens.
    const trimmed = trimCardData({
      name: 'X',
      scryfall_uri: 'https://x',
      layout: 'art_series',
      image_uris: { large: 'https://img/x' },
    });
    // Distinguishes "key absent" from "key present with value undefined".
    expect('oracle_id' in trimmed).toBe(false);
  });
});
