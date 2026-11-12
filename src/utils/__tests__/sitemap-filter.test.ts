import { describe, it, expect, afterEach } from 'vitest';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { getPreviewSlugs } from '../sitemap-filter';

const dirs: string[] = [];

function makePostsDir(): string {
  const dir = mkdtempSync(join(tmpdir(), 'sitemap-filter-'));
  dirs.push(dir);
  return dir;
}

afterEach(() => {
  while (dirs.length) rmSync(dirs.pop() as string, { recursive: true, force: true });
});

describe('getPreviewSlugs', () => {
  it('returns the slug of a post with preview: true', () => {
    const dir = makePostsDir();
    writeFileSync(join(dir, 'draft.md'), '---\ntitle: "Draft"\npreview: true\n---\nbody');
    expect(getPreviewSlugs(dir)).toEqual(['draft']);
  });

  it('omits posts without preview: true', () => {
    const dir = makePostsDir();
    writeFileSync(join(dir, 'published.md'), '---\ntitle: "Live"\n---\nbody');
    writeFileSync(join(dir, 'explicit-false.md'), '---\ntitle: "Live"\npreview: false\n---\nbody');
    expect(getPreviewSlugs(dir)).toEqual([]);
  });

  it('recurses into subdirectories and keeps a posix relative slug', () => {
    const dir = makePostsDir();
    mkdirSync(join(dir, 'series'));
    writeFileSync(join(dir, 'series', 'part-1.mdx'), '---\ntitle: "Part 1"\npreview: true\n---\n');
    expect(getPreviewSlugs(dir)).toEqual(['series/part-1']);
  });

  it('ignores non-markdown files', () => {
    const dir = makePostsDir();
    writeFileSync(join(dir, 'notes.txt'), 'preview: true');
    expect(getPreviewSlugs(dir)).toEqual([]);
  });

  it('drops zh_tw/ and prefixes en/ preview posts with the en path', () => {
    const dir = makePostsDir();
    mkdirSync(join(dir, 'zh_tw'));
    mkdirSync(join(dir, 'en'));
    const fm = '---\ntitle: "Draft"\npreview: true\n---\n';
    writeFileSync(join(dir, 'zh_tw', 'draft.md'), fm);
    writeFileSync(join(dir, 'en', 'draft.md'), fm);
    expect(getPreviewSlugs(dir).sort()).toEqual(['draft', 'en/draft']);
  });
});
