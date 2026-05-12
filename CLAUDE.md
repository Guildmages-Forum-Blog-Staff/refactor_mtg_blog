# CLAUDE.md

## Workflow Rules

- **Commit after every change.** Each logical change (file edit, fix, feature) gets its own commit immediately. Never batch unrelated changes.

## Commands

<!-- AUTO-GENERATED from package.json scripts -->
| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server at localhost:4321 |
| `npm run build` | Production build + pagefind index |
| `npm run preview` | Preview production build locally |
| `npm run check` | Astro type-check |
| `npm run lint` / `lint:fix` | ESLint |
| `npm run format` / `format:check` | Prettier |
| `npm run test` | Run tests once |
| `npm run test:watch` | Watch mode |
| `npm run test:coverage` | Coverage report |
<!-- END AUTO-GENERATED -->

```bash
npx vitest run src/plugins/__tests__/remark-mtg-tags.test.ts  # single plugin test
```

## Stack

**Astro 5 + Vue 3 + Tailwind CSS** static blog. Vue only for interactive components (`client:load`).

## Content Collections (`src/content/`)

- `posts/` — MDX. Schema: `title`, `date`, `updated?`, `tags`, `categories`, `authors[]`, `cover?`, `thumbnail?`, `excerpt?`
- `authors/` — YAML. Schema: `username`, `name`, `avatar`, `url?`, `intro[]`

Author slugs in frontmatter must match YAML filename in `src/content/authors/`.

## Routing

- `[slug].astro` — post pages
- `[...page].astro` — paginated home
- `categories/[cat]/[...page].astro` — paginated category pages

## Remark Plugins (`src/plugins/`)

| Plugin | Syntax | Output |
|---|---|---|
| `remark-scryfall` | image links to `cards.scryfall.io` | `<a class="scryfall-card">` |
| `remark-youtube` | `{% youtube ID %}` | `<iframe>` |
| `remark-mtg-tags` | `{% mtglink/mtgcard/mtgpick ... %}` | card links/images |
| `remark-mtg-merge` | `{% mtgmerge ["Card1", "Card2"] %}` | stitched multi-card image |
| `remark-notel` | `{% notel [color] Title %}...{% endnotel %}` | colored note box |
| `remark-base-path` | (internal) prepends base URL to image paths | — |

**Critical:** Astro's `remark-smartypants` converts `"` → curly quotes before plugins run. `remark-mtg-tags` normalizes via `CURLY_DOUBLE`/`CURLY_SINGLE` constants using `String.fromCharCode` — never replace with literal curly chars.  
`getTagPattern()` is a factory (not module-level `/g` regex) to avoid stale `lastIndex`.

## Dark Mode

`darkMode: 'class'`. Persisted in `localStorage('theme')`. Inline script in `BaseLayout.astro` `<head>` applies class before paint; re-applied on `astro:after-swap`.

## Colors (`tailwind.config.ts`)

`primary`, `background`, `foreground`, `dark-bg`, `dark-fg`. Keep `--color-primary` in `global.css` in sync with Tailwind config.

## Vue Components

- `TableOfContents.vue` — sticky TOC, `IntersectionObserver`, fixed back-to-top button aligned to sidebar right edge
- `ArticleAuthorHeader.vue` / `ArticleAuthorFooter.vue` — author display
- `WalineComments.vue` — comments (`client:only="vue"`)
