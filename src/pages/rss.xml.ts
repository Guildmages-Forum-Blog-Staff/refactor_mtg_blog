import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { buildRssItems } from '../utils/rss';

const SITE_TITLE = "Guildmages' Forum 魔風集會所";
const SITE_DESCRIPTION =
  "Guildmages' Forum 魔風集會所是一個繁體中文的部落格，致力於推廣魔法風雲會競技型賽制。";

export async function GET(context: APIContext) {
  if (!context.site) {
    throw new Error('`site` must be set in astro.config.ts for the RSS feed.');
  }
  const posts = await getCollection('posts');
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: buildRssItems(posts, import.meta.env.BASE_URL),
  });
}
