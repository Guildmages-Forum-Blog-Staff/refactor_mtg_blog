import { getCollection } from 'astro:content';
import type { Lang } from '../i18n';
import type { LangIndex } from '../i18n/counterpart';
import { excludePreviewPosts, postSlug, postsInLang } from './posts';

/** Every post written in `lang`, preview posts included. */
export async function getPosts(lang: Lang) {
  return postsInLang(await getCollection('posts'), lang);
}

/** Posts in `lang` that may appear in listings (preview posts dropped). */
export async function getListedPosts(lang: Lang) {
  return excludePreviewPosts(await getPosts(lang));
}

/** Which posts and category pages exist in `lang` (see counterpartPath). */
export async function getLangIndex(lang: Lang): Promise<LangIndex> {
  const posts = await getPosts(lang);
  return {
    slugs: new Set(posts.map((p) => postSlug(p.id))),
    categories: new Set(excludePreviewPosts(posts).flatMap((p) => p.data.categories)),
  };
}
