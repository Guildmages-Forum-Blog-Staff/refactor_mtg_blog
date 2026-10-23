# Guildmages' Forum 魔風集會所

繁體中文 Magic: The Gathering 競技部落格。Built with Astro 6 + Vue 3 + Tailwind CSS.

**Live site:** https://guildmagesforum.tw/

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

### `{% folding [args] %}...{% endfolding %}`

Collapsible block rendered as a native `<details>`. Supported in `.md` posts (not MDX).

```
{% folding blue :: Title shown while collapsed %}

Any Markdown, including the other tags on this page.

{% endfolding %}
```

**Legacy syntax** — `color :: title` (standard) or `color, title` (compatibility form). When `::` is present, commas stay in the title; in the comma form an unquoted title cannot contain an ASCII comma (quote it or use `::`). Segments after the second are dropped with a warning. `:: title` means no color. Legacy blocks always start collapsed.

**Named syntax** — `{% folding title="Title" class="blue" open=true %}`. Keys: `title`; `class` / `classes` / `style` (color words); `open` (`1` / `true` / `yes` / `on`, any case, starts the block expanded). Using any of these keys switches to named mode, unless the tag also has an unquoted `::`, or a `,` before the first key: then it stays legacy and `key=value` is title text. If `title` is empty, the remaining positional words become the title.

Valid colors: `yellow`, `blue`, `green`, `red`, `orange`, `pink`, `cyan`, `white`, `black`, `gray`, `purple`. Without a color the block uses the default look (same as `gray`). Unknown words are ignored with a warning; with several colors the later one in this list wins.

**Quotes and backslashes** — only ASCII `"` is a quote, and only at the start of a parameter (`他說"好"` keeps its quotes). Inside quotes, `::`, `,`, `=`, spaces and `%}` are literal; `\n` / `\t` / `\r` become newline / tab / CR and any other `\x` becomes `x`. Outside quotes, backslashes are literal. `'` and curly quotes are plain text. A full-width space (U+3000) is part of a word.

**Title** — output as raw HTML: no Markdown, no escaping. CJK↔ASCII spacing still applies.

**Where tags work** — anywhere in the post text, including mid-line, inside lists and blockquotes, and nested. A block inside a heading or a table is moved to just after it; a block where no block can go (a link URL, image alt text, an HTML attribute, an indented code block) stays as text with a warning. Tags inside fenced code, inline code and HTML comments are ignored. The content is rendered as its own Markdown document, so every other tag works inside it; indentation beyond the opening tag's line (e.g. an indented code block) is kept. Reference-style links and footnotes defined outside a block also work inside it; ones defined inside a block stay local to that block.

**Table of contents** — headings inside a block keep their heading look but are left out of the TOC.

**Errors** — unclosed or orphan tags, a quote that never closes, `{%-` tags, `{% endfolding %}` with arguments, and an opening tag without `%}` stay in the page as text and are reported via `console.warn` as `[folding] <file>:<line> <reason>`; the build still succeeds. Blocks in unsupported positions are reported the same way, and so is a fenced code block or HTML comment that never closes and hides folding tags.

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
- **Base path:** `/` (custom domain `guildmagesforum.tw`, served at root) — all internal links and image paths use `import.meta.env.BASE_URL`, never hardcode the old GitHub Pages project prefix.
- **Curly quotes:** Astro's `remark-smartypants` converts straight quotes to curly quotes before custom plugins run. MTG plugins and the prebuild script normalize via constants built with `String.fromCharCode(0x201c)` / `0x201d` / `0x2018` / `0x2019` — never replace with literal curly chars (some editors silently convert them back to ASCII).
- **CJK↔ASCII spacing:** Post bodies are spaced at build time by `rehype-pangu`; author `intro[]` lines are spaced at load time by `src/utils/authors.ts`. Don't hand-insert spaces between Chinese and ASCII — let the pipeline do it so spacing stays consistent.
- **Vue components:** Use `client:load` for interactive components. `client:only="vue"` for Waline comments.

---

## Deployment

GitHub Actions deploys to GitHub Pages on push to `main`. See `.github/workflows/deploy.yml`.
