import { describe, it, expect, beforeEach } from 'vitest';
import { __setCardDataForTests, lookupCard } from '../mtg-card-cache';

beforeEach(() => {
  __setCardDataForTests();
});

describe('mtg-card-cache', () => {
  it('returns ok=false missing when key not in cache', () => {
    const r = lookupCard('search|Foo||en');
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe('missing');
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
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.card.name).toBe('Black Lotus');
  });

  it('returns ok=false not_found when negatively cached', () => {
    __setCardDataForTests({
      not_found: { 'search|Typo||en': { first_seen: '2026-05-13', sources: [] } },
    });
    const r = lookupCard('search|Typo||en');
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toBe('not_found');
  });
});
