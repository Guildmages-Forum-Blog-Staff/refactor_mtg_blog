import { describe, it, expect } from 'vitest';
import yaml from 'js-yaml';
import {
  extractNoteId,
  cleanMarkdown,
  splitFrontMatter,
  toPostFrontmatter,
  isValidPostFilename,
} from '../create-post';

/** Parses raw YAML front-matter the same way create-post's main() does, so tests exercise real js-yaml output shapes (Date objects, YAML-1.1 booleans-as-strings) instead of hand-built JS literals. */
function parseFrontmatter(yamlBody: string): Parameters<typeof toPostFrontmatter>[0] {
  return yaml.load(yamlBody) as Parameters<typeof toPostFrontmatter>[0];
}

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

  // These go through real yaml.load() first: js-yaml v4 parses YAML-1.1
  // boolean spellings (yes/no/on/off) as plain strings under the 1.2 core
  // schema, and parses unquoted dates as Date objects — shapes a
  // hand-built `{ preview: true }` literal never exercises.
  describe('from real YAML (not hand-built JS literals)', () => {
    it('accepts YAML-1.1 boolean spellings for preview/comments', () => {
      const raw = parseFrontmatter(
        'title: x\nauthors:\n  - cephille\npreview: yes\ncomments: no\n',
      );
      const result = toPostFrontmatter(raw);
      expect(result.preview).toBe(true);
      expect(result.comments).toBe(false);
    });

    it('reformats an unquoted `updated:` date to the site Taipei format instead of dropping it', () => {
      const raw = parseFrontmatter(
        'title: x\nauthors:\n  - cephille\nupdated: 2024-06-01 12:00:00\n',
      );
      const result = toPostFrontmatter(raw);
      expect(result.updated).toMatch(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/);
    });

    it('throws a helpful error when title is an unquoted date instead of silently rejecting it', () => {
      const raw = parseFrontmatter('title: 2025-08-10\nauthors:\n  - cephille\n');
      expect(() => toPostFrontmatter(raw)).toThrow(/parsed as a date/);
    });
  });
});

describe('isValidPostFilename', () => {
  it('accepts a bare slug', () => {
    expect(isValidPostFilename('My-Post_2026.v2')).toBe(true);
  });

  it.each(['../evil', '../../etc/pwn', 'sub/dir', 'a/b', 'a\\b', ''])('rejects %s', (bad) => {
    expect(isValidPostFilename(bad)).toBe(false);
  });
});
