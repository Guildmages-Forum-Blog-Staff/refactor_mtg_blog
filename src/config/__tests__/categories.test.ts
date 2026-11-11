import { readdirSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { categoryDescription, categoryLabel } from '../categories';

describe('categoryDescription', () => {
  it('uses the hand-written text, then the set template, then a generic fallback', () => {
    expect(categoryDescription('Standard')).toContain('標準賽制');
    expect(categoryDescription('DSK')).toBe(
      '暮悲邸（DSK）系列文章：限制賽分色卡牌介紹、機制解析與輪抽／現開心得。',
    );
    expect(categoryDescription('XYZ')).toContain('「XYZ」');
  });

  it('labels set codes with their name and leaves others alone', () => {
    expect(categoryLabel('DSK')).toBe('暮悲邸（DSK）');
    expect(categoryLabel('Standard')).toBe('Standard');
  });

  it('has a specific (non-fallback) description for every category used by posts', () => {
    const dir = 'src/content/posts';
    const cats = new Set(
      readdirSync(dir)
        .filter((f) => /\.mdx?$/.test(f))
        .flatMap((f) => {
          const block = readFileSync(`${dir}/${f}`, 'utf8').match(
            /^categories:[ \t]*\n((?:[ \t]+-.*\n)+)/m,
          );
          return block
            ? block[1].split('\n').map((l) => l.replace(/^\s*-\s*["']?|["']?\s*$/g, ''))
            : [];
        })
        .filter(Boolean),
    );
    const missing = [...cats].filter((c) => categoryDescription(c).includes(`「${c}」`));
    expect(missing).toEqual([]);
  });
});
