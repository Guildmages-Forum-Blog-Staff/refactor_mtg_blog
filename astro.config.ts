import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import { remarkScryfall } from './src/plugins/remark-scryfall';
import { remarkYoutube } from './src/plugins/remark-youtube';
import { remarkMtgTags } from './src/plugins/remark-mtg-tags';

export default defineConfig({
  integrations: [vue(), tailwind(), mdx()],
  markdown: {
    remarkPlugins: [remarkScryfall, remarkYoutube, remarkMtgTags],
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
