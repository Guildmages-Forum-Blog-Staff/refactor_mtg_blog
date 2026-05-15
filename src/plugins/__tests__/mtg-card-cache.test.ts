import { describe, it, expect, beforeEach } from 'vitest';
import { __setCardDataForTests, lookupCard } from '../mtg-card-cache';

beforeEach(() => {
  __setCardDataForTests();
});

describe('mtg-card-cache', () => {
  it('returns Err missing when key not in cache', () => {
    const r = lookupCard('search|Foo||en');
    expect(r.type).toBe('Err');
    if (r.type === 'Err') expect(r.error).toBe('missing');
  });

  it('returns card on hit', () => {
    __setCardDataForTests({
      found: {
        'search|Black Lotus||en': {
          name: 'Black Lotus',
          scryfall_uri: 'https://scryfall.com/x',
          layout: 'normal',
          card_faces: [{ image: 'https://img/x.png' }],
        },
      },
    });
    const r = lookupCard('search|Black Lotus||en');
    expect(r.type).toBe('Ok');
    if (r.type === 'Ok') expect(r.value.name).toBe('Black Lotus');
  });

  it('returns Err not_found when negatively cached', () => {
    __setCardDataForTests({
      not_found: { 'search|Typo||en': { first_seen: '2026-05-13', sources: [] } },
    });
    const r = lookupCard('search|Typo||en');
    expect(r.type).toBe('Err');
    if (r.type === 'Err') expect(r.error).toBe('not_found');
  });
});
