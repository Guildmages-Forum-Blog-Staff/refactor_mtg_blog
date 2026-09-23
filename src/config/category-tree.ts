export interface CategoryNode {
  name: string;
  children?: string[];
}

// Top-level categories in display order. Sub-categories are derived from post
// frontmatter (see buildCategoryTree); list children here only to pin their order.
export const CATEGORY_TREE: CategoryNode[] = [
  { name: 'Beginner' },
  { name: 'Construct', children: ['Standard', 'Modern', 'Pioneer', 'Legacy'] },
  { name: 'Deep Dive' },
  { name: 'Limited' },
  { name: 'MTG Rules' },
  { name: 'Others' },
  { name: 'Tournaments' },
];
