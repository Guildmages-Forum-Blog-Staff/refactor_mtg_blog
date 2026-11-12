import { describe, it, expect } from 'vitest';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { rehypeLazyImages } from '../rehype-lazy-images';

// Without rehype-raw, inline HTML stays as `raw` nodes (the Astro case).
const run = (md: string) =>
  unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeLazyImages)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .processSync(md)
    .toString();

describe('rehypeLazyImages', () => {
  it('adds loading and decoding to markdown images', () => {
    const out = run('![a](/a.png)');
    expect(out).toContain('loading="lazy"');
    expect(out).toContain('decoding="async"');
  });

  it('handles raw HTML img nodes', () => {
    const out = run('<img src="/a.png">');
    expect(out).toContain('<img loading="lazy" decoding="async" src="/a.png">');
  });

  it('keeps an explicit loading attribute', () => {
    const out = run('<img src="/a.png" loading="eager">');
    expect(out).not.toContain('lazy');
    expect(out).toContain('loading="eager"');
  });

  it('is idempotent', () => {
    const once = run('![a](/a.png)');
    const tree = unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeLazyImages)
      .use(rehypeLazyImages)
      .use(rehypeStringify)
      .processSync('![a](/a.png)')
      .toString();
    expect(tree).toBe(once);
  });
});
