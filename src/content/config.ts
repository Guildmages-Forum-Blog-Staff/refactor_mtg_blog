import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    thumbnail: z.string().optional(),
    excerpt: z.string().optional(),
    categories: z.array(z.string()).default([]),
    authors: z.array(z.string()).default([]),
  }),
});

const authors = defineCollection({
  type: 'data',
  schema: z.object({
    username: z.string(),
    name: z.string(),
    avatar: z.string(),
    url: z.string().optional(),
    intro: z.array(z.string()).default([]),
  }),
});

export const collections = { posts, authors };
