import { describe, it, expect } from 'vitest';
import { buildCategoryTree, buildCategoryBreadcrumbs } from '../categories';

describe('buildCategoryTree', () => {
  it('uses first-listed categories as top level, sorted by name', () => {
    const tree = buildCategoryTree([['Tournaments'], ['Limited', 'FRA'], ['Beginner']]);
    expect(tree.map((n) => n.name)).toEqual(['Beginner', 'Limited', 'Tournaments']);
  });

  it('sorts children by post count, then name', () => {
    const tree = buildCategoryTree([
      ['Construct', 'Modern'],
      ['Construct', 'Standard'],
      ['Construct', 'Standard'],
      ['Construct', 'Legacy'],
    ]);
    expect(tree).toEqual([{ name: 'Construct', children: ['Standard', 'Legacy', 'Modern'] }]);
  });

  it('assigns a cross-listed child to its most frequent parent', () => {
    const tree = buildCategoryTree([
      ['Limited', 'Cube'],
      ['Limited', 'Cube'],
      ['Tournaments', 'Cube'],
    ]);
    expect(tree).toEqual([{ name: 'Limited', children: ['Cube'] }, { name: 'Tournaments' }]);
  });

  it('keeps a category nested when it is mostly listed as a child', () => {
    const tree = buildCategoryTree([
      ['Construct', 'Standard'],
      ['Construct', 'Standard'],
      ['Standard'],
      ['Beginner'],
      ['Construct', 'Beginner'],
    ]);
    expect(tree).toEqual([{ name: 'Beginner' }, { name: 'Construct', children: ['Standard'] }]);
  });

  it('treats categories only ever listed alone as top level', () => {
    expect(buildCategoryTree([['GMF Staff']])).toEqual([{ name: 'GMF Staff' }]);
  });
});

describe('buildCategoryBreadcrumbs', () => {
  it('collapses parent + child into one crumb', () => {
    const tree = buildCategoryTree([['Limited', 'MSH']]);
    expect(buildCategoryBreadcrumbs(['Limited', 'MSH'], tree)).toEqual([
      { label: 'Limited > MSH', cat: 'MSH' },
    ]);
  });
});
