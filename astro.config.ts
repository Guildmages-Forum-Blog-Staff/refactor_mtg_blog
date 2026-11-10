import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import compress from '@playform/compress';
import { remarkScryfall } from './src/plugins/remark-scryfall';
import { remarkYoutube } from './src/plugins/remark-youtube';
import { remarkMtgTags } from './src/plugins/remark-mtg-tags';
import { remarkMtgMerge } from './src/plugins/remark-mtg-merge';
import { remarkBasePath } from './src/plugins/remark-base-path';
import { remarkNotel } from './src/plugins/remark-notel';
import { remarkFolding } from './src/plugins/remark-folding';
import { rehypePangu } from './src/plugins/rehype-pangu';
import { externalLinksOptions } from './src/plugins/external-links';
import { getPreviewSlugs } from './src/utils/sitemap-filter';
import { getAuthorTagRedirects } from './src/utils/legacy-redirects';
import remarkBreaks from 'remark-breaks';
import rehypeExternalLinks from 'rehype-external-links';

const BASE = '/';

// Preview posts are still built (reachable by direct URL) but must not
// appear in the sitemap — computed synchronously here since astro:content
// isn't available yet at config-eval time.
const previewPagePaths = new Set(
  getPreviewSlugs(fileURLToPath(new URL('./src/content/posts', import.meta.url))).map(
    (slug) => `${BASE}${slug}/`,
  ),
);

// Legacy Hexo URLs still indexed / linked externally. No redirects for
// lowercase `/categories/...` variants: on case-insensitive filesystems
// (macOS) a redirect page at e.g. /categories/limited/ would overwrite the
// real /categories/Limited/ page in local builds.
const legacyRedirects = {
  ...getAuthorTagRedirects(fileURLToPath(new URL('./src/content/authors', import.meta.url))),
  '/tags': '/categories/',
  '/tags/limited': '/categories/Limited/',
  '/tags/otj': '/categories/OTJ/',
  '/Izzet-Murktide': '/Modern-Izzet-Murktide/',
  '/Rakdos-Midrange': '/Pioneer-Rakdos-Midrange/',
  '/Rule-LCI-Mechanic-Guide': '/LCI-mechanic/',
};

export default defineConfig({
  site: 'https://guildmagesforum.tw',
  base: BASE,
  redirects: legacyRedirects,
  compressHTML: true,
  server: {
    host: true,
    allowedHosts: ['gf-preview.miohitokiri5474.tw', 'guildmagesforum.tw'],
  },
  legacy: {
    collectionsBackwardsCompat: true,
  },
  integrations: [
    vue(),
    mdx(),
    sitemap({
      filter: (page) => !previewPagePaths.has(new URL(page).pathname),
    }),
    compress({
      HTML: {
        'html-minifier-terser': {
          // Leave astro-island markup byte-for-byte: Vue's client bundle
          // hydrates against this exact SSR output, and collapsing
          // whitespace inside it desyncs client vnodes from server text
          // nodes, causing hydration mismatches (see TableOfContents.vue).
          ignoreCustomFragments: [/<astro-island[\s\S]*?<\/astro-island>/],
        },
      },
    }),
  ],
  vite: {
    plugins: [
      tailwindcss(),
      {
        name: 'pagefind-dev-stub',
        apply: 'serve',
        resolveId(id: string) {
          if (id === '/pagefind/pagefind.js') return id;
        },
        load(id: string) {
          if (id === '/pagefind/pagefind.js') {
            return `export const init = async () => {};
export const search = async () => ({ results: [] });`;
          }
        },
      },
    ],
    build: {
      rollupOptions: {
        external: ['/pagefind/pagefind.js'],
      },
    },
  },
  markdown: {
    remarkPlugins: [
      [remarkBasePath, { base: BASE }],
      remarkBreaks,
      remarkScryfall,
      remarkYoutube,
      remarkMtgTags,
      [remarkMtgMerge, { base: BASE }],
      remarkNotel,
      remarkFolding,
    ],
    rehypePlugins: [rehypePangu, [rehypeExternalLinks, externalLinksOptions]],
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
