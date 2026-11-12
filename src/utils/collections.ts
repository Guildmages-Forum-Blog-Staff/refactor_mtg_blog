import { getCollection } from 'astro:content';
import { langFromPath, localePath, stripLang, type Lang } from '../i18n';
import { counterpartPath, type LangIndex } from '../i18n/counterpart';
import { excludePreviewPosts, postSlug, postsInLang } from './posts';

/** Every post written in `lang`, preview posts included. */
export async function getPosts(lang: Lang) {
  return postsInLang(await getCollection('posts'), lang);
}

/** Posts in `lang` that may appear in listings (preview posts dropped). */
export async function getListedPosts(lang: Lang) {
  return excludePreviewPosts(await getPosts(lang));
}

async function buildLangIndex(lang: Lang): Promise<LangIndex> {
  // Listed posts only: the toggle and hreflang must never point at a
  // `preview: true` draft in the other language.
  const posts = await getListedPosts(lang);
  return {
    slugs: new Set(posts.map((p) => postSlug(p.id))),
    categories: new Set(posts.flatMap((p) => p.data.categories)),
  };
}

// Built once per language per production build (every page asks, twice:
// BaseLayout and Navbar). Not cached in dev, so added posts show up live.
const langIndexCache = new Map<Lang, Promise<LangIndex>>();

/** Which listed posts and category pages exist in `lang` (see counterpartPath). */
export function getLangIndex(lang: Lang): Promise<LangIndex> {
  if (!import.meta.env.PROD) return buildLangIndex(lang);
  let index = langIndexCache.get(lang);
  if (!index) {
    index = buildLangIndex(lang);
    langIndexCache.set(lang, index);
  }
  return index;
}

/**
 * The other language's version of `pathname`: where the Navbar toggle points
 * and, when `exact`, the hreflang alternate. See counterpartPath for fallbacks.
 */
export async function getLangSwitch(pathname: string) {
  const lang = langFromPath(pathname);
  const otherLang: Lang = lang === 'en' ? 'zh-tw' : 'en';
  const twin = counterpartPath(stripLang(pathname), await getLangIndex(otherLang));
  return { otherLang, href: localePath(otherLang, twin.path), exact: twin.exact };
}
