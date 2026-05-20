import { getCollection } from 'astro:content';
import pangu from 'pangu';

export type AuthorData = {
  username: string;
  name: string;
  avatar: string;
  url?: string;
  intro: string[];
};

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

export async function getAllAuthors() {
  const collection = await getCollection('authors');
  return collection.map((entry) => ({
    id: entry.id.replace(/\.ya?ml$/, ''),
    ...entry.data,
    intro: spaceIntro(entry.data.intro),
    avatar: withBase(entry.data.avatar),
  }));
}

export async function getAuthorById(username: string) {
  const collection = await getCollection('authors');
  const entry = collection.find(
    (a) => a.id.replace(/\.ya?ml$/, '') === username || a.data.username === username,
  );
  return entry
    ? {
        id: entry.id.replace(/\.ya?ml$/, ''),
        ...entry.data,
        intro: spaceIntro(entry.data.intro),
      }
    : null;
}

export async function getPostAuthors(usernames: string[]) {
  const all = await getAllAuthors();
  return usernames
    .map((u) => {
      const normalizedU = u.replace(/\.ya?ml$/, '');
      return all.find((a) => a.id === normalizedU || a.username === normalizedU);
    })
    .filter((a): a is AuthorData & { id: string } => a !== undefined);
}
