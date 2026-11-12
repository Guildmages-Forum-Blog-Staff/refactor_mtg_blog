import { describe, it, expect } from 'vitest';
import { postSlug, postLang, postsInLang, sortByDateDesc, excludePreviewPosts } from '../posts';

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

  it('strips the zh_tw/ and en/ locale directories', () => {
    expect(postSlug('zh_tw/hello-world.md')).toBe('hello-world');
    expect(postSlug('en/hello-world.md')).toBe('hello-world');
  });

  it('keeps nested paths below the locale directory', () => {
    expect(postSlug('en/series/part-1.mdx')).toBe('series/part-1');
  });

  it('only strips a leading locale directory', () => {
    expect(postSlug('series/en/part-1.md')).toBe('series/en/part-1');
  });
});

describe('postLang', () => {
  it('maps en/ to en and zh_tw/ to zh-tw', () => {
    expect(postLang('en/a.md')).toBe('en');
    expect(postLang('zh_tw/a.md')).toBe('zh-tw');
  });

  it('defaults ids outside a locale directory to zh-tw', () => {
    expect(postLang('a.md')).toBe('zh-tw');
    expect(postLang('english-guide.md')).toBe('zh-tw');
  });
});

describe('postsInLang', () => {
  it('keeps same-slug posts apart by language', () => {
    const posts = [{ id: 'zh_tw/same.md' }, { id: 'en/same.md' }, { id: 'zh_tw/other.md' }];
    expect(postsInLang(posts, 'en').map((p) => p.id)).toEqual(['en/same.md']);
    expect(postsInLang(posts, 'zh-tw').map((p) => postSlug(p.id))).toEqual(['same', 'other']);
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

describe('excludePreviewPosts', () => {
  const post = (id: string, preview: boolean) => ({ id, data: { preview } });

  it('drops posts flagged preview: true', () => {
    const visible = excludePreviewPosts([post('a', false), post('b', true), post('c', false)]);
    expect(visible.map((p) => p.id)).toEqual(['a', 'c']);
  });

  it('keeps all posts when none are marked preview', () => {
    const posts = [post('a', false), post('b', false)];
    expect(excludePreviewPosts(posts)).toHaveLength(2);
  });

  it('does not mutate the input array', () => {
    const input = [post('a', false), post('b', true)];
    const snapshot = [...input];
    excludePreviewPosts(input);
    expect(input).toEqual(snapshot);
  });
});
