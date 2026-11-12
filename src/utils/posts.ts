import { DEFAULT_LANG, POST_DIR, localePath, type Lang } from '../i18n';

const LOCALE_DIR_RE = new RegExp(`^(${Object.values(POST_DIR).join('|')})/`);

/**
 * Language of a post, from the locale directory its collection-entry id
 * starts with (`en/...` -> `en`, `zh_tw/...` -> `zh-tw`). Ids outside any
 * locale directory count as the default language.
 */
export function postLang(id: string): Lang {
  return id.startsWith(`${POST_DIR.en}/`) ? 'en' : DEFAULT_LANG;
}

/**
 * Derive a post's URL slug from its collection-entry id by stripping the
 * leading locale directory (`zh_tw/`, `en/`) and the trailing `.md` / `.mdx`
 * extension. Dots inside the name and nested subdirectory segments below the
 * locale directory are preserved. Single source of truth for the slug — it
 * must match the param produced by `[slug].astro`'s getStaticPaths. The slug
 * is language-free; the `/en/` URL prefix is added by the route.
 */
export function postSlug(id: string): string {
  return id.replace(LOCALE_DIR_RE, '').replace(/\.mdx?$/, '');
}

/** Site URL path of a post page, e.g. `/my-post/` or `/en/my-post/`. */
export function postUrl(id: string): string {
  return localePath(postLang(id), `${postSlug(id)}/`);
}

/** Posts written in `lang`, without mutating the input. */
export function postsInLang<T extends { id: string }>(posts: T[], lang: Lang): T[] {
  return posts.filter((post) => postLang(post.id) === lang);
}

/**
 * Return a new array of posts ordered newest-first by `data.date`, without
 * mutating the input. Array#sort is stable, so posts sharing a date keep their
 * original relative order.
 */
export function sortByDateDesc<T extends { data: { date: Date } }>(posts: T[]): T[] {
  return [...posts].sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/**
 * Drop posts flagged `preview: true` from a set of posts. Preview posts stay
 * reachable at their own URL ([slug].astro keeps them unfiltered) but must
 * not surface in listings, feeds, or the sitemap.
 */
export function excludePreviewPosts<T extends { data: { preview: boolean } }>(posts: T[]): T[] {
  return posts.filter((post) => !post.data.preview);
}
