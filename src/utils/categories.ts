import { CATEGORY_TREE } from '../config/category-tree';

export interface CategoryCrumb {
  label: string;
  cat: string;
}

export function buildCategoryBreadcrumbs(categories: string[]): CategoryCrumb[] {
  const catSet = new Set(categories);

  // Suppress parent nodes whose child is also in the list
  const suppressedParents = new Set<string>();
  for (const cat of categories) {
    const parent = CATEGORY_TREE.find((n) => n.children?.includes(cat));
    if (parent && catSet.has(parent.name)) {
      suppressedParents.add(parent.name);
    }
  }

  return categories
    .filter((cat) => !suppressedParents.has(cat))
    .map((cat) => {
      const parent = CATEGORY_TREE.find((n) => n.children?.includes(cat));
      return { label: parent ? `${parent.name} > ${cat}` : cat, cat };
    });
}
