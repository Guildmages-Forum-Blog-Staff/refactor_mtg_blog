import { getCollection } from 'astro:content';

export type AuthorData = {
  username: string;
  name: string;
  avatar: string;
  url?: string;
  intro: string[];
};

export async function getAllAuthors() {
  const collection = await getCollection('authors');
  return collection.map((entry) => ({
    id: entry.id,
    ...entry.data,
  }));
}

export async function getAuthorById(username: string) {
  const collection = await getCollection('authors');
  const entry = collection.find((a) => a.id === username || a.data.username === username);
  return entry ? { id: entry.id, ...entry.data } : null;
}

export async function getPostAuthors(usernames: string[]) {
  const all = await getAllAuthors();
  return usernames
    .map((u) => all.find((a) => a.id === u || a.username === u))
    .filter((a): a is AuthorData & { id: string } => a !== undefined);
}
