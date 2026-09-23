import { CATEGORY_TREE, type CategoryNode } from '../config/category-tree';

export interface CategoryCrumb {
  label: string;
  cat: string;
}

/**
 * Merges CATEGORY_TREE with categories found in posts. A non-top-level category
 * becomes a child of the top-level category it is listed with most often
 * (cross-listed posts like `Tournaments, Standard` don't move `Standard`).
 * Categories never listed with a top-level one are appended as top-level nodes.
 */
export function buildCategoryTree(
  categoryLists: string[][],
  config: CategoryNode[] = CATEGORY_TREE,
): CategoryNode[] {
  const topLevel = new Set(config.map((n) => n.name));
  const parentCounts = new Map<string, Map<string, number>>();
  const seen = new Set<string>();

  for (const cats of categoryLists) {
    const parents = cats.filter((c) => topLevel.has(c));
    for (const cat of cats) {
      if (topLevel.has(cat)) continue;
      seen.add(cat);
      const counts = parentCounts.get(cat) ?? new Map<string, number>();
      for (const p of parents) counts.set(p, (counts.get(p) ?? 0) + 1);
      parentCounts.set(cat, counts);
    }
  }

  const pinned = new Set(config.flatMap((n) => n.children ?? []));
  const derived = new Map<string, string[]>();
  const orphans: string[] = [];
  for (const cat of [...seen].sort()) {
    if (pinned.has(cat)) continue;
    let parent: string | undefined;
    let best = 0;
    for (const node of config) {
      const n = parentCounts.get(cat)?.get(node.name) ?? 0;
      if (n > best) [parent, best] = [node.name, n];
    }
    if (parent) derived.set(parent, [...(derived.get(parent) ?? []), cat]);
    else orphans.push(cat);
  }

  return [
    ...config.map((node) => {
      const children = [...(node.children ?? []), ...(derived.get(node.name) ?? [])];
      return children.length > 0 ? { name: node.name, children } : { name: node.name };
    }),
    ...orphans.map((name) => ({ name })),
  ];
}

export function buildCategoryBreadcrumbs(
  categories: string[],
  tree: CategoryNode[],
): CategoryCrumb[] {
  const catSet = new Set(categories);
  const parentOf = (cat: string) => tree.find((n) => n.children?.includes(cat));

  // Suppress parent nodes whose child is also in the list
  const suppressedParents = new Set<string>();
  for (const cat of categories) {
    const parent = parentOf(cat);
    if (parent && catSet.has(parent.name)) {
      suppressedParents.add(parent.name);
    }
  }

  return categories
    .filter((cat) => !suppressedParents.has(cat))
    .map((cat) => {
      const parent = parentOf(cat);
      return { label: parent ? `${parent.name} > ${cat}` : cat, cat };
    });
}
