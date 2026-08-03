import type { CollectionEntry } from 'astro:content';

type Post = CollectionEntry<'posts'>;

export function getRelatedPosts(current: Post, all: Post[], limit = 4): Post[] {
  const scored = all
    .filter((p) => p.id !== current.id && !p.data.preview)
    .map((p) => {
      const sharedCategories = p.data.categories.filter((c) =>
        current.data.categories.includes(c),
      ).length;
      const sharedTags = p.data.tags.filter((t) => current.data.tags.includes(t)).length;
      return { post: p, score: sharedCategories * 3 + sharedTags };
    })
    .filter((p) => p.score > 0)
    .sort((a, b) => b.score - a.score || b.post.data.date.getTime() - a.post.data.date.getTime());

  return scored.slice(0, limit).map((s) => s.post);
}
