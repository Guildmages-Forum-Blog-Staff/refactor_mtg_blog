import { describe, it, expect } from 'vitest';
import { extractNoteId, cleanMarkdown, splitFrontMatter, toPostFrontmatter } from '../create-post';

describe('extractNoteId', () => {
  it('extracts the ID from a bare note URL', () => {
    expect(extractNoteId('https://hackmd.io/AbCdEfGh')).toBe('AbCdEfGh');
  });

  it('extracts the ID from a /@user/ note URL', () => {
    expect(extractNoteId('https://hackmd.io/@foo/AbCdEfGh')).toBe('AbCdEfGh');
  });

  it('rejects published-link ("/s/") URLs instead of silently extracting the wrong ID', () => {
    expect(() => extractNoteId('https://hackmd.io/s/PublishedSlug')).toThrow(/not supported/);
  });

  it('throws on a non-HackMD URL', () => {
    expect(() => extractNoteId('https://example.com/foo')).toThrow(/Cannot extract/);
  });
});

describe('cleanMarkdown', () => {
  it('strips content before the front-matter delimiter', () => {
    expect(cleanMarkdown('junk\n---\ntitle: x\n---\nbody')).toBe('---\ntitle: x\n---\nbody');
  });

  it('removes HTML comments anywhere in the document, including hexo <!--more-->', () => {
    const input = '---\ntitle: x\n---\n<!-- note -->\nbody\n<!--more-->\nmore';
    expect(cleanMarkdown(input)).not.toContain('<!--');
  });

  it('collapses trailing whitespace to a single newline', () => {
    expect(cleanMarkdown('---\ntitle: x\n---\nbody\n\n\n')).toBe('---\ntitle: x\n---\nbody\n');
  });
});

describe('splitFrontMatter', () => {
  it('splits front-matter body from post body', () => {
    const { fmBody, body } = splitFrontMatter('---\ntitle: x\n---\nhello');
    expect(fmBody).toBe('title: x');
    expect(body).toBe('hello');
  });

  it('throws when there is no front-matter block', () => {
    expect(() => splitFrontMatter('just some text')).toThrow(/No front-matter/);
  });
});

describe('toPostFrontmatter', () => {
  it('reshapes valid Hexo-style front-matter and drops tags/date', () => {
    const result = toPostFrontmatter({
      title: '測試',
      authors: ['cephille'],
      categories: ['Limited'],
      cover: 'https://example.com/a.jpg',
      tags: ['ignored'],
      date: '2020-01-01 00:00:00',
    });
    expect(result.title).toBe('測試');
    expect(result.authors).toEqual(['cephille']);
    expect(result.categories).toEqual(['Limited']);
    expect(result.cover).toBe('https://example.com/a.jpg');
    expect(result).not.toHaveProperty('tags');
    expect(result.date).not.toBe('2020-01-01 00:00:00');
  });

  it('passes through preview/comments/updated when present', () => {
    const result = toPostFrontmatter({
      title: '測試',
      authors: ['cephille'],
      preview: true,
      comments: false,
      updated: '2024-01-01 00:00:00',
    });
    expect(result.preview).toBe(true);
    expect(result.comments).toBe(false);
    expect(result.updated).toBe('2024-01-01 00:00:00');
  });

  it('throws when title is missing', () => {
    expect(() => toPostFrontmatter({ authors: ['cephille'] })).toThrow(/title/);
  });

  it('throws when authors is empty', () => {
    expect(() => toPostFrontmatter({ title: 'x', authors: [] })).toThrow(/authors/);
  });

  it('throws on an author slug with no matching file in src/content/authors/', () => {
    expect(() => toPostFrontmatter({ title: 'x', authors: ['NotARealAuthor'] })).toThrow(
      /Unknown author slug/,
    );
  });
});
