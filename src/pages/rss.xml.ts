import type { APIContext } from 'astro';
import { languageFeed } from '../utils/rss-feed';

export function GET(context: APIContext) {
  return languageFeed(context, 'zh-tw');
}
