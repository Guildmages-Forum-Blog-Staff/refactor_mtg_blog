export interface CategoryNode {
  name: string;
  children?: string[];
}

export interface CategoryCrumb {
  label: string;
  cat: string;
}

const bump = <K>(map: Map<K, number>, key: K) => map.set(key, (map.get(key) ?? 0) + 1);

/**
 * Builds the category tree from post frontmatter (Hexo convention: the first
 * category is the parent, the rest are its children). A category is top-level
 * when it is listed first at least as often as it is listed after another one,
 * so strays like `categories: [Standard]` don't promote `Standard`. Each child
 * goes under the top-level category it is listed with most often, so cross-listed
 * posts like `Tournaments, Standard` don't move it. Top-level nodes are sorted by
 * name, children by post count then name.
 */
export function buildCategoryTree(categoryLists: string[][]): CategoryNode[] {
  const firstCounts = new Map<string, number>();
  const restCounts = new Map<string, number>();
  for (const [first, ...rest] of categoryLists) {
    if (first) bump(firstCounts, first);
    for (const cat of rest) bump(restCounts, cat);
  }

  const topLevel = [...firstCounts.keys()]
    .filter((cat) => firstCounts.get(cat)! >= (restCounts.get(cat) ?? 0))
    .sort();
  const isTop = new Set(topLevel);

  const postCounts = new Map<string, number>();
  const parentCounts = new Map<string, Map<string, number>>();
  for (const cats of categoryLists) {
    const parents = cats.filter((c) => isTop.has(c));
    for (const cat of cats) {
      if (isTop.has(cat)) continue;
      bump(postCounts, cat);
      const counts = parentCounts.get(cat) ?? new Map<string, number>();
      parents.forEach((p) => bump(counts, p));
      parentCounts.set(cat, counts);
    }
  }

  const byCount = (a: string, b: string) =>
    postCounts.get(b)! - postCounts.get(a)! || a.localeCompare(b);
  const children = new Map<string, string[]>();
  const orphans: string[] = [];
  for (const cat of [...postCounts.keys()].sort(byCount)) {
    let parent: string | undefined;
    let best = 0;
    for (const [p, n] of parentCounts.get(cat)!) {
      if (n > best || (n === best && parent !== undefined && p < parent)) [parent, best] = [p, n];
    }
    if (parent) children.set(parent, [...(children.get(parent) ?? []), cat]);
    else orphans.push(cat);
  }

  return [...topLevel, ...orphans].map((name) =>
    children.has(name) ? { name, children: children.get(name) } : { name },
  );
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
