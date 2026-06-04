import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { buildRssItems } from '../utils/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../config/site';

export async function GET(context: APIContext) {
  if (!context.site) {
    throw new Error('`site` must be set in astro.config.ts for the RSS feed.');
  }
  const posts = await getCollection('posts');
  // Channel <link> should point at the blog home (base path), not the bare
  // origin — on GitHub Pages the origin root is a different page. Item links
  // are absolute paths, so they stay correct regardless of the base here.
  const siteWithBase = new URL(import.meta.env.BASE_URL, context.site);
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: siteWithBase,
    items: buildRssItems(posts, import.meta.env.BASE_URL),
  });
}
