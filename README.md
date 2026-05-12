# Guildmages' Forum 魔風集會所

繁體中文 Magic: The Gathering 競技部落格。Built with Astro 5 + Vue 3 + Tailwind CSS.

**Live site:** https://guildmages-forum-blog-staff.github.io/refactor_mtg_blog/

---

## Stack

| Layer | Tech |
|---|---|
| Framework | Astro 5 (static) |
| UI components | Vue 3 (`client:load`) |
| Styling | Tailwind CSS + Typography plugin |
| Content | MDX (posts) + YAML (authors) |
| Search | Pagefind |
| Comments | Waline |

---

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Production build + Pagefind index |
| `npm run preview` | Serve `dist/` locally |
| `npm run check` | Astro type-check |
| `npm run lint` | ESLint |
| `npm run lint:fix` | ESLint auto-fix |
| `npm run format` | Prettier rewrite |
| `npm run format:check` | Prettier check (CI) |
| `npm run test` | Vitest (once) |
| `npm run test:watch` | Vitest watch mode |
| `npm run test:coverage` | Vitest + V8 coverage |
| `npm run cache:update` | Pre-fetch Scryfall card images into `.scryfall-cache.json` |

---

## Content

### Posts (`src/content/posts/`)

MDX files. Required frontmatter:

```yaml
---
title: "Post Title"
date: 2025-01-01
tags: [tag1, tag2]
categories: [Modern]
authors: [username]
# optional
updated: 2025-02-01
cover: /path/to/cover.jpg
thumbnail: /path/to/thumb.jpg
excerpt: "Short summary"
---
```

### Authors (`src/content/authors/`)

YAML files. Filename = username slug (must match `authors[]` in post frontmatter).

```yaml
username: miohitokiri5474
name: Display Name
avatar: /path/to/avatar.jpg
url: https://example.com        # optional
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

Card image block (centered, 220px wide, with link to Scryfall).

```
{% mtgcard Ragavan neo %}
```

### `{% mtgpick edition number %}`

Card image by collector number.

```
{% mtgpick neo 141 %}
{% mtgpick neo 141 language=ja %}
```

### Scryfall Image Cache

Card images are pre-fetched at build time from Scryfall API and stored in `.scryfall-cache.json`.

Run after adding new cards to posts:

```bash
npm run cache:update
```

Double-faced cards (DFCs) store both face images as pipe-separated URLs. Hover tooltips display all faces side by side.

### `{% mtgmerge ["Card1", "Card2"] %}`

Stitch 2–4 card images side by side into a single `.webp` image at build time. Cards must be in `.scryfall-cache.json`.

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

| Route | Page |
|---|---|
| `/` | Paginated post list |
| `/[slug]` | Post detail |
| `/categories/[cat]/` | Category post list |
| `/authors/[username]/` | Author post list |
| `/about` | About page |
| `/contact` | Contact page |

---

## Dark Mode

Toggled via `.dark` class on `<html>`. Persisted in `localStorage('theme')`. Applied before paint via inline script in `BaseLayout.astro` and re-applied on `astro:after-swap`.

---

## Development Notes

- **Astro content cache:** `.astro/data-store.json` caches rendered markdown HTML. Delete it when remark plugins change to force re-processing.
- **Base path:** `/refactor_mtg_blog/` — all internal links and image paths must include this prefix.
- **Curly quotes:** Astro's `remark-smartypants` converts straight quotes to curly quotes before custom plugins run. MTG tag plugins normalize via `CURLY_DOUBLE`/`CURLY_SINGLE` constants using `String.fromCharCode` — never replace with literal curly chars.
- **Vue components:** Use `client:load` for interactive components. `client:only="vue"` for Waline comments.

---

## Deployment

GitHub Actions deploys to GitHub Pages on push to `main`. See `.github/workflows/deploy.yml`.
