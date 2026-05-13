import type { Page } from 'astro';
import type { CollectionEntry } from 'astro:content';

export type PaginatedPostsProps = {
  page: Page<CollectionEntry<'posts'>>;
};

export type AuthorPaginatedPostsProps = PaginatedPostsProps & {
  author: CollectionEntry<'authors'>;
};
