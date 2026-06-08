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

/**
 * Resolve the feed's channel <link> — the blog home (site origin + base path).
 * `baseUrl` carries a trailing slash; being root-relative it replaces the
 * origin's own path rather than appending to it.
 */
export function resolveFeedSite(baseUrl: string, site: URL | string): URL {
  return new URL(baseUrl, site);
}

/** Absolute URL of the feed document itself, for the atom:self link. */
export function feedSelfHref(siteWithBase: URL): string {
  return new URL('rss.xml', siteWithBase).href;
}

const XML_ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;',
};

/**
 * Escape every XML metacharacter that has a predefined entity — `&`, `<`, `>`,
 * `"`, `'`. A single character-class pass maps each source character exactly
 * once, so there is no "`&` must come first" ordering hazard that a chain of
 * `.replace()` calls would carry. We escape all five even where a context
 * (e.g. `'` inside a double-quoted attribute) would not strictly require it:
 * for security-relevant markup, escape everything escapable rather than
 * reasoning about which character is safe in which position.
 */
function escapeXml(value: string): string {
  return value.replace(/[&<>"']/g, (c) => XML_ESCAPES[c]);
}

/**
 * Channel-level custom XML: the language tag and an atom:self link. The latter
 * needs `xmlns: { atom: 'http://www.w3.org/2005/Atom' }` on the rss() call.
 * Both interpolated values are XML-escaped so feed hrefs carrying a query
 * string (`&`) or any metacharacter cannot break out of the markup.
 */
export function buildChannelData(feedHref: string, language: string): string {
  return `<language>${escapeXml(language)}</language><atom:link href="${escapeXml(feedHref)}" rel="self" type="application/rss+xml" />`;
}
