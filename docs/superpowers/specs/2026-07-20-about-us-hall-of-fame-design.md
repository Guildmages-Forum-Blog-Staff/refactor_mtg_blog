# About Us: Split into Current Members / Hall of Fame

## Problem

`src/pages/about.astro` renders one flat, hardcoded `authorOrder` array of 36 author IDs. There's no way to distinguish still-active members from retired/inactive ones, and updating the roster requires editing page code.

## Goal

Split the author roster into two sections — Current Members and Hall of Fame — driven by an external JSON file instead of a hardcoded array in the page.

## Data

New file: `src/data/team.json`. Plain JSON, no Astro content-collection schema (YAGNI — this isn't post/author content, just two ID lists).

```json
{
  "currentMembers": ["MiohitoKiri5474", "cephille", "JruMTG", "JerobaMTG", "Enki", "T1BloodMoon", "Kappa", "ClarkShih", "jeffchen", "bruce1235566", "GY_Player", "Egavas", "layukipedia", "faintmama", "ZHAN", "mm", "dalance", "XSBeeble", "Chennel", "Terryrr"],
  "hallOfFame": ["david-yeh", "yu-chen", "zhi-mao", "JerryYang", "classiccool", "MarkWen", "Patrick", "Weihow", "CIXS", "Chiyou", "sertyple", "Requiem_Black", "Ace", "ZengZengZeng", "Suken", "manamagic"]
}
```

- Array order = display order within that section.
- IDs correspond to `src/content/authors/<id>.yml` filenames (minus extension), same convention as the current `authorOrder` array.
- `gmf-staff`, `charlieyen1114`, `SamuelChang` stay excluded from both lists (unchanged from current behavior — they were already absent from `authorOrder`).
- Unknown/missing IDs are silently filtered out, same as current behavior (`.filter((a) => a.data !== undefined)`).

## Page changes (`src/pages/about.astro`)

- Remove the hardcoded `authorOrder` array.
- Import `team.json` directly: `import team from '../data/team.json'`.
- Build two ordered author lists (`currentMembers`, `hallOfFame`) using the same id-to-author-data mapping logic currently used once.
- Extract the per-author card markup (avatar, name/link, intro lines) into a small local helper/partial so it isn't duplicated between the two sections.
- Add two `<h2>` section headings above each list:
  - 現任成員 (Current Members)
  - 榮譽殿堂 (Hall of Fame)
- Everything else on the page (title, intro prose, layout wrapper) is unchanged.

## Out of scope

- No schema validation for `team.json` (plain JSON import is sufficient for two string arrays).
- No new tests — no other `.astro` page in the repo has test coverage; this is a static roster split, not testable logic. Verification is a manual `npm run dev` check.
- No changes to `src/content/authors/*.yml` or the `authors` content collection schema.
