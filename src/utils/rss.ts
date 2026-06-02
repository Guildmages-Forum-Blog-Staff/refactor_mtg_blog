export interface RssSourcePost {
  id: string;
  data: {
    title: string;
    date: Date;
    excerpt?: string;
    categories: string[];
  };
}

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
