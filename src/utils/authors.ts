import { getCollection } from 'astro:content';
import pangu from 'pangu';
import { DEFAULT_LANG, type Lang } from '../i18n';

export type AuthorData = {
  username: string;
  name: string;
  avatar: string;
  url?: string;
  /** Intro lines in the requested language (see {@link introFor}). */
  intro: string[];
};

type AuthorEntryData = Omit<AuthorData, 'intro'> & { intro_zh: string[]; intro_en: string[] };

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

function withBase(path: string): string {
  return path.startsWith('/') ? `${base}${path}` : path;
}

// Intros render through v-html (ArticleAuthorFooter.vue) and set:html
// (about.astro, authors/[username]/[...page].astro), bypassing the
// markdown / MDX pipeline and therefore rehype-pangu. Run pangu at load
// time so YAML intros pick up the same CJK<>ASCII spacing as post bodies.
function spaceIntro(intro: string[]): string[] {
  return intro.map((line) => pangu.spacingText(line));
}

/**
 * Intro lines for `lang`. English falls back to the (spaced) Chinese intro
 * when `intro_en` is empty, so a newly added author never renders blank.
 */
function introFor(data: AuthorEntryData, lang: Lang): string[] {
  return lang === 'en' && data.intro_en.length > 0 ? data.intro_en : spaceIntro(data.intro_zh);
}

function toAuthor(id: string, data: AuthorEntryData, lang: Lang): AuthorData & { id: string } {
  const { username, name, avatar, url } = data;
  return { id, username, name, avatar, url, intro: introFor(data, lang) };
}

export async function getAllAuthors(lang: Lang = DEFAULT_LANG) {
  const collection = await getCollection('authors');
  return collection.map((entry) => ({
    ...toAuthor(entry.id.replace(/\.ya?ml$/, ''), entry.data, lang),
    avatar: withBase(entry.data.avatar),
  }));
}

export async function getAuthorById(username: string, lang: Lang = DEFAULT_LANG) {
  const collection = await getCollection('authors');
  const entry = collection.find(
    (a) => a.id.replace(/\.ya?ml$/, '') === username || a.data.username === username,
  );
  return entry ? toAuthor(entry.id.replace(/\.ya?ml$/, ''), entry.data, lang) : null;
}

export async function getPostAuthors(usernames: string[], lang: Lang = DEFAULT_LANG) {
  const all = await getAllAuthors(lang);
  return usernames
    .map((u) => {
      const normalizedU = u.replace(/\.ya?ml$/, '');
      return all.find((a) => a.id === normalizedU || a.username === normalizedU);
    })
    .filter((a): a is AuthorData & { id: string } => a !== undefined);
}
