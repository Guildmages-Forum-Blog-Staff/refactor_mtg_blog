/**
 * Derive a post's URL slug from its collection-entry id by stripping the
 * trailing `.md` / `.mdx` extension. Dots inside the name and nested
 * subdirectory segments are preserved. Single source of truth for the slug —
 * it must match the param produced by `[slug].astro`'s getStaticPaths.
 */
export function postSlug(id: string): string {
  return id.replace(/\.mdx?$/, '');
}

/**
 * Return a new array of posts ordered newest-first by `data.date`, without
 * mutating the input. Array#sort is stable, so posts sharing a date keep their
 * original relative order.
 */
export function sortByDateDesc<T extends { data: { date: Date } }>(posts: T[]): T[] {
  return [...posts].sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
