# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # start dev server (localhost:4321)
npm run build        # production build
npm run check        # Astro type-check
npm run lint         # ESLint
npm run lint:fix     # ESLint with auto-fix
npm run format       # Prettier
npm run test         # run all tests once
npm run test:watch   # vitest watch mode
npm run test:coverage
```

Run a single test file:
```bash
npx vitest run src/plugins/__tests__/remark-mtg-tags.test.ts
```

## Architecture

**Astro 5 + Vue 3 + Tailwind CSS** static blog. Astro handles routing and SSG; Vue is used only for interactive client-side components (`client:load`).

### Content Collections (`src/content/`)

- `posts/` — Markdown/MDX files. Frontmatter schema in `src/content/config.ts`: `title`, `date`, `tags`, `categories`, `authors[]`, `cover`, `thumbnail`, `excerpt`.
- `authors/` — YAML files. Schema: `username`, `name`, `avatar`, `url?`, `intro[]`.

Author slugs in post frontmatter (`authors: ["MiohitoKiri5474"]`) must match the YAML filename in `src/content/authors/`.

### Routing

- `src/pages/[slug].astro` — individual post pages, renders `Content` + `headings` from `post.render()`
- `src/pages/categories/index.astro` and `[cat].astro` — category browsing

### Remark Plugins (`src/plugins/`)

Three custom plugins run during Markdown processing in order declared in `astro.config.ts`:

| Plugin | Tag syntax | Output |
|---|---|---|
| `remark-scryfall` | Markdown image links to `cards.scryfall.io` | `<a class="scryfall-card" data-card-image="...">` |
| `remark-youtube` | `{% youtube VIDEO_ID %}` | responsive `<iframe>` embed |
| `remark-mtg-tags` | `{% mtglink "Card Name" %}`, `{% mtgcard "Card Name" edition %}`, `{% mtgpick EDITION NUMBER %}` | client-side-resolved card links/images |

**Critical `remark-mtg-tags` detail:** `remark-smartypants` (built into Astro) converts ASCII `"` to curly quotes (U+201C/U+201D) before these plugins run. The plugin normalizes them back via `CURLY_DOUBLE`/`CURLY_SINGLE` constants built with `String.fromCharCode` — do NOT replace these with literal curly quote characters; editor/terminal encoding silently corrupts them.

`getTagPattern()` is a factory (not a module-level `/g` regex) to avoid stale `lastIndex` across multiple `visit` callbacks.

### Client-side Card Fetching (`src/layouts/BaseLayout.astro`)

Inline `<script>` queries `.mtg-link`, `.mtg-card-img`, `.mtg-card-pick` on `DOMContentLoaded` and fetches card data from the Scryfall API, injecting image URLs. Requests are staggered 100ms apart to avoid rate limiting.

### Dark Mode

Tailwind `darkMode: 'class'`. Theme persisted in `localStorage` key `theme`. The `<script is:inline>` in `<head>` of `BaseLayout.astro` applies the `dark` class before first paint. Toggle button lives in `Navbar.astro`.

### Colors (`tailwind.config.ts`)

```
primary    — link/accent color
background — light mode page background
foreground — light mode text
dark-bg    — dark mode page background
dark-fg    — dark mode text
```

CSS variable `--color-primary` in `src/styles/global.css` must be kept in sync with `primary` in Tailwind config.

### Vue Components

Used only where client-side interactivity is needed (`client:load`):
- `TableOfContents.vue` — sticky TOC with `IntersectionObserver` for active heading; props: `headings`, `title?`
- `ArticleAuthorHeader.vue` / `ArticleAuthorFooter.vue` — author display
