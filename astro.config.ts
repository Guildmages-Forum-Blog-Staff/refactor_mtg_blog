import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import compress from '@playform/compress';
import { remarkScryfall } from './src/plugins/remark-scryfall';
import { remarkYoutube } from './src/plugins/remark-youtube';
import { remarkMtgTags } from './src/plugins/remark-mtg-tags';

export default defineConfig({
  site: 'https://guildmages-forum-blog-staff.github.io',
  base: '/refactor_mtg_blog/',
  compressHTML: true,
  server: {
    host: true,
    allowedHosts: ['gf-preview.miohitokiri5474.tw', 'guildmagesforum.tw'],
  },
  integrations: [vue(), tailwind(), mdx(), sitemap(), compress()],
  vite: {
    plugins: [
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
    remarkPlugins: [remarkScryfall, remarkYoutube, remarkMtgTags],
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
