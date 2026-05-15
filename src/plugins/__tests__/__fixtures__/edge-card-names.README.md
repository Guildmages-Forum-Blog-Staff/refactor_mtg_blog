# Edge-case card name fixtures

Captured-at: 2026-05-14

Used by `edge-card-names.test.ts`. Shape matches `.cache/cards.json` so the file
can be `__setCardDataForTests({ found, not_found })`-seeded directly with zero
conversion.

These 10 cards stress `remark-mtg-*` parsing (`//`, `+`, `"`, `_____`, `?`, `:`,
`&`, `'`, `. . .`, and combinations). They are tracked in the
`refactor-mtg-blog-special-card-names` memory entry. Black Lotus is a helper
for pairing in mtgmerge tests; it is not an edge case.

## Source queries

| # | Cache key | Scryfall query |
| --- | --- | --- |
| 1 | `search\|SP//dr, Piloted by Peni\|\|en` | `GET /cards/spm/147` |
| 2 | `search\|+2 Mace\|\|en` | `GET /cards/afr/1` |
| 3 | `search\|"Ach! Hans, Run!"\|\|en` | `GET /cards/unh/116` |
| 4 | `search\|_____\|\|en` | `GET /cards/unh/23` |
| 5 | `search\|Who // What // When // Where // Why\|\|en` | `GET /cards/unh/120` |
| 6 | `search\|Question Elemental?\|\|en` | `GET /cards/unh/43` |
| 7 | `search\|Circle of Protection: Red\|\|en` | `GET /cards/9ed/11` |
| 8 | `search\|R&D's Secret Lair\|\|en` | `GET /cards/unh/135` |
| 9 | `search\|With Great Power . . .\|\|en` | `GET /cards/spm/24` |
| 10 | `search\|Welcome to . . . // Jurassic Park\|\|en` | `GET /cards/rex/7` |
| H | `search\|Black Lotus\|\|en` | `GET /cards/lea/232` (helper) |

## When to refresh

- Card layout changes on Scryfall (rare; e.g. errata) — refetch and update fixture
- `Card` shape extended in `mtg-card-cache.ts` — regenerate fixture
- New edge-case card added to memory — add a new entry, append a row above

## How to refresh

There is no automated drift check — the trigger is a test failure here, or a
manual review when shipping a `Card` shape change. To refresh by hand:

1. Look up the Source query above for the affected row.
2. Fetch the card: `curl 'https://api.scryfall.com/cards/<set>/<collector>' > /tmp/card.json`.
3. Transpose into the cache shape used by `mtg-card-cache.ts`: `{ name, scryfall_uri, layout, card_faces: [{ image }], oracle_id? }` — `image` comes from `image_uris.large` for single-face cards or each entry's `image_uris.large` for DFC/split.
4. Replace the matching entry in `edge-card-names.cache.json` and bump the `Captured-at:` date above.
5. Re-run `npx vitest run src/plugins/__tests__/edge-card-names.test.ts`.

If many rows drift at once (e.g. Scryfall renames the layout taxonomy), it is
usually cheaper to regenerate the whole fixture from a fresh `.cache/cards.json`
produced by `npm run cache:refresh` for a minimal seed post that references all
edge cases, then copy the relevant `found` entries here.
