import type { CollectionEntry } from 'astro:content';

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
 * Map post collection entries to RSS item objects, newest first.
 * `baseUrl` is expected to carry a trailing slash (e.g. `/refactor_mtg_blog/`);
 * the slug is derived from the entry id with the `.md`/`.mdx` extension removed.
 */
export function buildRssItems(posts: RssSourcePost[], baseUrl: string): RssItem[] {
  return [...posts]
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
    .map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.excerpt ?? '',
      link: `${baseUrl}${post.id.replace(/\.mdx?$/, '')}`,
      categories: post.data.categories,
    }));
}
