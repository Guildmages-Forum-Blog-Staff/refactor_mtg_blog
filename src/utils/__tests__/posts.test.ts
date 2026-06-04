import { describe, it, expect } from 'vitest';
import { postSlug, sortByDateDesc } from '../posts';

describe('postSlug', () => {
  it('strips a .md extension', () => {
    expect(postSlug('hello-world.md')).toBe('hello-world');
  });

  it('strips a .mdx extension', () => {
    expect(postSlug('hello-world.mdx')).toBe('hello-world');
  });

  it('keeps a nested subdirectory path', () => {
    expect(postSlug('series/part-1.md')).toBe('series/part-1');
  });

  it('only strips the trailing extension, keeping dots inside the name', () => {
    expect(postSlug('patch-1.2-notes.md')).toBe('patch-1.2-notes');
  });

  it('leaves an id without a .md/.mdx extension unchanged', () => {
    expect(postSlug('already-a-slug')).toBe('already-a-slug');
  });

  it('does not strip a non-md extension such as .markdown', () => {
    expect(postSlug('notes.markdown')).toBe('notes.markdown');
  });
});

describe('sortByDateDesc', () => {
  const post = (id: string, date: string) => ({ id, data: { date: new Date(date) } });

  it('orders posts newest first', () => {
    const sorted = sortByDateDesc([
      post('old', '2023-01-01'),
      post('new', '2024-06-01'),
      post('mid', '2023-12-31'),
    ]);
    expect(sorted.map((p) => p.id)).toEqual(['new', 'mid', 'old']);
  });

  it('does not mutate the input array', () => {
    const input = [post('a', '2023-01-01'), post('b', '2024-01-01')];
    const snapshot = [...input];
    sortByDateDesc(input);
    expect(input).toEqual(snapshot);
  });

  it('keeps input order for equal dates (stable sort)', () => {
    const sorted = sortByDateDesc([
      post('first', '2024-01-01'),
      post('second', '2024-01-01'),
      post('third', '2024-01-01'),
    ]);
    expect(sorted.map((p) => p.id)).toEqual(['first', 'second', 'third']);
  });
});
