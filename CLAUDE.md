# CLAUDE.md

## Workflow Rules

- **Commit after every change.** Each logical change (file edit, fix, feature) gets its own commit immediately. Never batch unrelated changes.

## Commands

<!-- AUTO-GENERATED from package.json scripts -->

| Command                           | Description                       |
| --------------------------------- | --------------------------------- |
| `npm run dev`                     | Dev server at localhost:4321      |
| `npm run build`                   | Production build + pagefind index |
| `npm run preview`                 | Preview production build locally  |
| `npm run check`                   | Astro type-check                  |
| `npm run lint` / `lint:fix`       | ESLint                            |
| `npm run lint:tags`               | Lint MTG card tags                |
| `npm run format` / `format:check` | Prettier                          |
| `npm run test`                    | Run tests once                    |
| `npm run test:watch`              | Watch mode                        |
| `npm run test:coverage`           | Coverage report                   |

<!-- END AUTO-GENERATED -->

```bash
npx vitest run src/plugins/__tests__/remark-mtg-tags.test.ts  # single plugin test
```

## Stack

**Astro 6 + Vue 3 + Tailwind CSS** static blog. Vue only for interactive components (`client:load`).

`astro.config.ts` sets `legacy.collectionsBackwardsCompat: true` — `src/content/config.ts` still uses the v5-era `defineCollection({ type: 'content' | 'data' })` shape rather than the v6 loader API. Keep both in mind when touching collection schemas.

## Content Collections (`src/content/`)

- `posts/` — MDX. Schema: `title`, `date`, `updated?`, `categories`, `authors[]`, `cover?`, `thumbnail?`, `excerpt?`, `comments?`, `preview?` (`tags` still exists in the zod schema for backcompat but is abandoned — no post frontmatter sets it anymore)
- `preview: true` hides a post from the home/category/author listings, RSS feed, related-posts, sitemap, and pagefind search index (via `excludePreviewPosts` in `src/utils/posts.ts` and `getPreviewSlugs` in `src/utils/sitemap-filter.ts`) — the post's own page still builds and is reachable by direct URL
- `authors/` — YAML. Schema: `username`, `name`, `avatar`, `url?`, `intro[]`

Author slugs in frontmatter must match YAML filename in `src/content/authors/`. Author loaders in `src/utils/authors.ts` run each `intro[]` line through `pangu.spacingText` at load time so YAML intros get the same CJK↔ASCII spacing as post bodies (which go through `rehype-pangu`).

## Routing

- `[slug].astro` — post pages
- `[...page].astro` — paginated home
- `categories/[cat]/[...page].astro` — paginated category pages

## Markdown Plugins (`src/plugins/`)

Wired up in `astro.config.ts` under `markdown.remarkPlugins` / `markdown.rehypePlugins`.

| Plugin             | Stage  | Syntax                                       | Output                                 |
| ------------------ | ------ | -------------------------------------------- | -------------------------------------- |
| `remark-scryfall`  | remark | image links to `cards.scryfall.io`           | `<a class="scryfall-card">`            |
| `remark-youtube`   | remark | `{% youtube ID %}`                           | `<iframe>`                             |
| `remark-mtg-tags`  | remark | `{% mtglink/mtgcard/mtgpick ... %}`          | card links/images                      |
| `remark-mtg-merge` | remark | `{% mtgmerge ["Card1", "Card2"] %}`          | stitched multi-card image              |
| `remark-notel`     | remark | `{% notel [color] Title %}...{% endnotel %}` | colored note box                       |
| `remark-base-path` | remark | (internal) prepends base URL to image paths  | —                                      |
| `rehype-pangu`     | rehype | (internal) CJK↔ASCII text spacing            | text nodes spaced via `pangu` + fixups |

**Critical:** Astro's `remark-smartypants` converts `"` → curly quotes before plugins run. Plugins must normalize via constants declared with `String.fromCharCode` (e.g. `OPEN_DOUBLE`, `CLOSE_DOUBLE` in `mtg-tag-shared.ts`) — never replace with literal curly chars.  
Per-file `TAG_RE` is a factory (not a module-level `/g` regex) to avoid stale `lastIndex`.

**`rehype-pangu` scope:** Skips `pre/code/script/style/kbd/samp` subtrees (and their split-raw-tag equivalents from `remark-rehype`), tracks skip-depth across sibling raw nodes, and re-glues MTG counter notation like `-1/-1` after pangu splits the sign. See `src/plugins/rehype-pangu.ts` JSDoc before extending — scope boundaries are deliberate and locked in by fixtures in `__tests__/rehype-pangu.test.ts`.

## MTG Card Cache

The `mtgcard`/`mtglink`/`mtgpick`/`mtgmerge` tags render **synchronously** from a prebuilt JSON cache, not via runtime Scryfall calls.

- `scripts/build-card-cache.ts` — prebuild script. Scans `src/content/posts/**/*.{md,mdx}` for tag references, batches Scryfall queries (75/req), retries with `// ` spacing then DFC front-face then `flavor_name` on misses, and writes `.cache/cards.json` atomically (tmp + rename) under a PID lockfile. Schema-versioned; bumping `CACHE_SCHEMA` triggers a full refetch.
- `npm run predev` / `npm run prebuild` — auto-run the script before `dev`/`build`. `npm run cache:update` and `cache:refresh` run it manually (`--refresh` clears `not_found` entries).
- `src/plugins/mtg-card-cache.ts` — synchronous runtime reader. Loads `.cache/cards.json` lazily on first lookup, returns typed `LookupResult` (`{ type: 'Ok', value: Card }` or `{ type: 'Err', error: 'missing' | 'not_found' }`, Rust-style).
- `src/plugins/mtg-tag-shared.ts` — **single source of truth** for parser/tokenizer/cache-key logic. Imported by both `remark-mtg-tags.ts` and the prebuild script so key derivation cannot drift.
- **Render-time misses** produce `<span class="mtgcard-error">找不到卡片「...」</span>`; the hint differs by error (`not_found` vs `missing`).
- `.cache/cards.json` is **gitignored**; CI persists it via `actions/cache`.

## Dark Mode

`darkMode: 'class'`. Persisted in `localStorage('theme')`. Inline script in `BaseLayout.astro` `<head>` applies class before paint; re-applied on `astro:after-swap`.

## Colors (`src/styles/global.css`)

Tailwind v4 CSS-first config — no `tailwind.config.{js,ts}`. Theme tokens live in the `@theme { ... }` block at the top of `global.css`: `primary`, `background`, `foreground`, `dark-bg`, `dark-fg`. The `:root` block below re-exports `--color-bg` / `--color-fg` aliases for non-Tailwind consumers (Waline etc.) — keep both in sync when changing a colour.

## Vue Components

- `TableOfContents.vue` — sticky TOC, `IntersectionObserver`, fixed back-to-top button aligned to sidebar right edge
- `ArticleAuthorHeader.vue` / `ArticleAuthorFooter.vue` — author display
- `WalineComments.vue` — comments (`client:only="vue"`)
