import type { CollectionEntry } from 'astro:content';
import { postSlug, sortByDateDesc } from './posts';

/** Maximum number of (most recent) posts included in the feed. */
const RSS_ITEM_LIMIT = 50;

/**
 * The subset of a posts collection entry the RSS feed needs. Derived from the
 * content schema via CollectionEntry so it cannot drift from the source of
 * truth in src/content/config.ts.
 */
export type RssSourcePost = Pick<CollectionEntry<'posts'>, 'id'> & {
  data: Pick<CollectionEntry<'posts'>['data'], 'title' | 'date' | 'excerpt' | 'categories'>;
};

export interface RssItem {
  title: string;
  pubDate: Date;
  description: string;
  link: string;
  categories: string[];
}

/**
 * Map post collection entries to RSS item objects, newest first, capped at the
 * {@link RSS_ITEM_LIMIT} most recent posts. `baseUrl` is expected to carry a
 * trailing slash (e.g. `/refactor_mtg_blog/`); each link also ends with a
 * trailing slash so it matches the directory-format page route exactly
 * (`<base><slug>/`) regardless of dots in the slug.
 */
export function buildRssItems(posts: RssSourcePost[], baseUrl: string): RssItem[] {
  return sortByDateDesc(posts)
    .slice(0, RSS_ITEM_LIMIT)
    .map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.excerpt ?? '',
      link: `${baseUrl}${postSlug(post.id)}/`,
      categories: post.data.categories,
    }));
}
