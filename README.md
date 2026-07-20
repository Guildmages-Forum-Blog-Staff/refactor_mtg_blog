# Guildmages' Forum 魔風集會所

繁體中文 Magic: The Gathering 競技部落格。Built with Astro 6 + Vue 3 + Tailwind CSS.

**Live site:** https://guildmages-forum-blog-staff.github.io/refactor_mtg_blog/

---

## Stack

| Layer         | Tech                             |
| ------------- | -------------------------------- |
| Framework     | Astro 6 (static)                 |
| UI components | Vue 3 (`client:load`)            |
| Styling       | Tailwind CSS + Typography plugin |
| Content       | MDX (posts) + YAML (authors)     |
| Search        | Pagefind                         |
| Comments      | Waline                           |

---

## Commands

| Command                 | Description                                                                     |
| ----------------------- | ------------------------------------------------------------------------------- |
| `npm run dev`           | Dev server at `localhost:4321`                                                  |
| `npm run build`         | Production build + Pagefind index                                               |
| `npm run preview`       | Serve `dist/` locally                                                           |
| `npm run check`         | Astro type-check                                                                |
| `npm run lint`          | ESLint                                                                          |
| `npm run lint:fix`      | ESLint auto-fix                                                                 |
| `npm run lint:tags`     | Lint MTG card tags for unterminated/malformed syntax                           |
| `npm run format`        | Prettier rewrite                                                                |
| `npm run format:check`  | Prettier check (CI)                                                             |
| `npm run test`          | Vitest (once)                                                                   |
| `npm run test:watch`    | Vitest watch mode                                                               |
| `npm run test:coverage` | Vitest + V8 coverage                                                            |
| `npm run cache:update`  | Refresh `.cache/cards.json` from Scryfall (auto-runs via `predev` / `prebuild`) |
| `npm run cache:refresh` | Same as `cache:update` but also clears `not_found` entries before re-fetching   |

---

## Content

### Posts (`src/content/posts/`)

MDX files. Required frontmatter:

```yaml
---
title: 'Post Title'
date: 2025-01-01
categories: [Modern]
authors: [username]
# optional
updated: 2025-02-01
cover: /path/to/cover.jpg
thumbnail: /path/to/thumb.jpg
excerpt: 'Short summary'
---
```

### Authors (`src/content/authors/`)

YAML files. Filename = username slug (must match `authors[]` in post frontmatter).

```yaml
username: miohitokiri5474
name: Display Name
avatar: /path/to/avatar.jpg
url: https://example.com # optional
intro:
  - Line one of bio
  - Line two of bio
```

---

## MTG Card Tags

Remark plugins process custom tags in post content.

### `{% mtglink Name [edition] %}`

Inline card link with hover tooltip image.

```
{% mtglink Lightning Bolt %}
{% mtglink Lightning Bolt lea %}
{% mtglink "Fable of the Mirror-Breaker // Reflection of Kiki-Jiki" neo %}
```

Options: `edition=xxx`, `language=ja`, `tooltip=true`, `alt="Display text"`

### `{% mtgcard Name [edition] %}`

Card image block (centered, 300px max-width, with link to Scryfall).

```
{% mtgcard "Ragavan, Nimble Pilferer" neo %}
```

Use `mtglink` if you want a hover tooltip — `tooltip=true` on `mtgcard` is deprecated.

### `{% mtgpick edition number %}`

Card image by collector number.

```
{% mtgpick neo 141 %}
{% mtgpick neo 141 language=ja %}
```

### Scryfall card cache

Card metadata is prebuilt from the Scryfall API into `.cache/cards.json` by `scripts/build-card-cache.ts`, which runs automatically via `predev` / `prebuild`. The cache file is gitignored; CI persists it across builds via `actions/cache`.

Each entry stores `name`, `scryfall_uri`, `layout`, `card_faces[]` (each face has its own `image` URL), and an optional `oracle_id`. Split / planar / DFC layouts populate multiple `card_faces` entries; the renderer picks the front face and adds rotation styling where appropriate.

When a tag references a card that is not in the cache, the renderer emits `<span class="mtgcard-error">找不到卡片「Name」</span>` instead of failing the build, so authors can spot typos at preview time.

### `{% mtgmerge ["Card1", "Card2"] %}`

Stitch 2–4 card images side by side into a single `.webp` image at build time. Cards must be in `.cache/cards.json`.

```
{% mtgmerge ["Lightning Bolt", "Ragavan, Nimble Pilferer"] %}
{% mtgmerge ["Island", "Mountain", "Forest"] %}
```

---

## Note Blocks

### `{% notel [color] Title %}...{% endnotel %}`

Colored callout box. Color is optional (defaults to `default`).

Valid colors: `default`, `red`, `blue`, `green`, `yellow`, `purple`, `orange`, `cyan`

```
{% notel Title without color %}
Content here.
{% endnotel %}

{% notel blue Important Note %}
This is a blue callout.
{% endnotel %}
```

---

## Routing

| Route                  | Page                |
| ---------------------- | ------------------- |
| `/`                    | Paginated post list |
| `/[slug]`              | Post detail         |
| `/categories/[cat]/`   | Category post list  |
| `/authors/[username]/` | Author post list    |
| `/about`               | About page          |
| `/contact`             | Contact page        |

---

## Dark Mode

Toggled via `.dark` class on `<html>`. Persisted in `localStorage('theme')`. Applied before paint via inline script in `BaseLayout.astro` and re-applied on `astro:after-swap`.

---

## Development Notes

- **Astro content cache:** `.astro/data-store.json` caches rendered markdown HTML. The prebuild script invalidates it automatically whenever `.cache/cards.json` is regenerated, so manual deletion is rarely needed.
- **Base path:** `/refactor_mtg_blog/` — all internal links and image paths must include this prefix.
- **Curly quotes:** Astro's `remark-smartypants` converts straight quotes to curly quotes before custom plugins run. MTG plugins and the prebuild script normalize via constants built with `String.fromCharCode(0x201c)` / `0x201d` / `0x2018` / `0x2019` — never replace with literal curly chars (some editors silently convert them back to ASCII).
- **CJK↔ASCII spacing:** Post bodies are spaced at build time by `rehype-pangu`; author `intro[]` lines are spaced at load time by `src/utils/authors.ts`. Don't hand-insert spaces between Chinese and ASCII — let the pipeline do it so spacing stays consistent.
- **Vue components:** Use `client:load` for interactive components. `client:only="vue"` for Waline comments.

---

## Deployment

GitHub Actions deploys to GitHub Pages on push to `main`. See `.github/workflows/deploy.yml`.
