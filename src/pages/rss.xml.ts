import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { buildRssItems, resolveFeedSite, feedSelfHref, buildChannelData } from '../utils/rss';
import { SITE_TITLE, SITE_DESCRIPTION, SITE_LANG } from '../config/site';

const ATOM_XMLNS = { atom: 'http://www.w3.org/2005/Atom' };

export async function GET(context: APIContext) {
  if (!context.site) {
    throw new Error('`site` must be set in astro.config.ts for the RSS feed.');
  }
  const posts = await getCollection('posts');
  // Channel <link> should point at the blog home (base path), not the bare
  // origin — on GitHub Pages the origin root is a different page. Item links
  // already carry the base, so they stay correct regardless of the site here.
  const siteWithBase = resolveFeedSite(import.meta.env.BASE_URL, context.site);
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: siteWithBase,
    xmlns: ATOM_XMLNS,
    customData: buildChannelData(feedSelfHref(siteWithBase), SITE_LANG),
    items: buildRssItems(posts, import.meta.env.BASE_URL),
  });
}
