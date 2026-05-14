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
