import { getCollection } from 'astro:content';
import type { GetStaticPathsOptions } from 'astro';
import type { Lang } from '../i18n';
import { getListedPosts, getPosts } from './collections';
import { postSlug, sortByDateDesc } from './posts';

// getStaticPaths builders shared by the zh-tw routes (src/pages/...) and their
// en twins (src/pages/en/...). Each route file only picks the language.

type Paginate = GetStaticPathsOptions['paginate'];

export async function homePaths(paginate: Paginate, lang: Lang) {
  return paginate(sortByDateDesc(await getListedPosts(lang)), { pageSize: 10 });
}

export async function postPaths(lang: Lang) {
  return (await getPosts(lang)).map((post) => ({
    params: { slug: postSlug(post.id) },
    props: { post },
  }));
}

export async function categoryPaths(paginate: Paginate, lang: Lang) {
  const posts = await getListedPosts(lang);
  const cats = new Set(posts.flatMap((p) => p.data.categories));
  return [...cats].flatMap((cat) => {
    const sorted = sortByDateDesc(posts.filter((p) => p.data.categories.includes(cat)));
    return paginate(sorted, { params: { cat }, pageSize: 10 });
  });
}

/** Every author gets a page in every language, even with no posts in it. */
export async function authorPaths(paginate: Paginate, lang: Lang) {
  const [authors, posts] = await Promise.all([getCollection('authors'), getListedPosts(lang)]);
  const authorId = (id: string) => id.replace(/\.ya?ml$/, '');

  return authors.flatMap((author) => {
    const authorPosts = sortByDateDesc(
      posts.filter(
        (p) =>
          p.data.authors.includes(authorId(author.id)) ||
          p.data.authors.includes(author.data.username),
      ),
    );
    return paginate(authorPosts, {
      params: { username: authorId(author.id) },
      props: { author },
      pageSize: 20,
    });
  });
}
