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
import { rehypePangu } from './src/plugins/rehype-pangu';
import { externalLinksOptions } from './src/plugins/external-links';
import { getPreviewSlugs } from './src/utils/sitemap-filter';
import remarkBreaks from 'remark-breaks';
import rehypeExternalLinks from 'rehype-external-links';

const BASE = '/refactor_mtg_blog/';

// Preview posts are still built (reachable by direct URL) but must not
// appear in the sitemap — computed synchronously here since astro:content
// isn't available yet at config-eval time.
const previewPagePaths = new Set(
  getPreviewSlugs(fileURLToPath(new URL('./src/content/posts', import.meta.url))).map(
    (slug) => `${BASE}${slug}/`,
  ),
);

export default defineConfig({
  site: 'https://guildmages-forum-blog-staff.github.io',
  base: BASE,
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
    compress(),
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
    ],
    rehypePlugins: [rehypePangu, [rehypeExternalLinks, externalLinksOptions]],
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
