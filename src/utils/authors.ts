import { getCollection } from 'astro:content';

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

export async function getAllAuthors() {
  const collection = await getCollection('authors');
  return collection.map((entry) => ({
    id: entry.id.replace(/\.ya?ml$/, ''),
    ...entry.data,
    avatar: withBase(entry.data.avatar),
  }));
}

export async function getAuthorById(username: string) {
  const collection = await getCollection('authors');
  const entry = collection.find(
    (a) => a.id.replace(/\.ya?ml$/, '') === username || a.data.username === username,
  );
  return entry ? { id: entry.id.replace(/\.ya?ml$/, ''), ...entry.data } : null;
}

export async function getPostAuthors(usernames: string[]) {
  const all = await getAllAuthors();
  return usernames
    .map((u) => all.find((a) => a.id.replace(/\.ya?ml$/, '') === u || a.username === u))
    .filter((a): a is AuthorData & { id: string } => a !== undefined);
}
