import { describe, it, expect } from 'vitest';
import { buildCategoryTree, buildCategoryBreadcrumbs } from '../categories';

const config = [
  { name: 'Construct', children: ['Standard'] },
  { name: 'Limited' },
  { name: 'Tournaments' },
];

describe('buildCategoryTree', () => {
  it('derives children from posts, sorted, after pinned ones', () => {
    const tree = buildCategoryTree(
      [
        ['Limited', 'MSH'],
        ['Limited', 'FRA'],
        ['Construct', 'Modern'],
      ],
      config,
    );
    expect(tree).toEqual([
      { name: 'Construct', children: ['Standard', 'Modern'] },
      { name: 'Limited', children: ['FRA', 'MSH'] },
      { name: 'Tournaments' },
    ]);
  });

  it('assigns a cross-listed child to its most frequent parent', () => {
    const tree = buildCategoryTree(
      [
        ['Limited', 'Cube'],
        ['Limited', 'Cube'],
        ['Tournaments', 'Cube'],
      ],
      config,
    );
    expect(tree.find((n) => n.name === 'Limited')?.children).toEqual(['Cube']);
    expect(tree.find((n) => n.name === 'Tournaments')?.children).toBeUndefined();
  });

  it('appends categories with no top-level parent as top-level nodes', () => {
    const tree = buildCategoryTree([['GMF Staff']], config);
    expect(tree.at(-1)).toEqual({ name: 'GMF Staff' });
  });
});

describe('buildCategoryBreadcrumbs', () => {
  it('collapses parent + child into one crumb', () => {
    const tree = buildCategoryTree([['Limited', 'MSH']], config);
    expect(buildCategoryBreadcrumbs(['Limited', 'MSH'], tree)).toEqual([
      { label: 'Limited > MSH', cat: 'MSH' },
    ]);
  });
});
