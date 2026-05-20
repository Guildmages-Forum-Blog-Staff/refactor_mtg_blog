import { describe, it, expect } from 'vitest';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { rehypePangu } from '../rehype-pangu';

const run = (md: string) =>
  unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypePangu)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .processSync(md)
    .toString();

describe('rehypePangu', () => {
  it('inserts a space between CJK and ASCII letters in the same text node', () => {
    const html = run('這是中文English內容');
    expect(html).toContain('中文 English');
    expect(html).toContain('English 內容');
  });

  it('does not insert spaces inside fenced code blocks', () => {
    const html = run('```\n中文English\n```');
    expect(html).toContain('中文English');
    expect(html).not.toContain('中文 English');
  });

  it('inserts space at the boundary between CJK text and an adjacent inline code element', () => {
    const html = run('中文`code`表示');
    expect(html).toContain('中文 <code>');
    expect(html).toContain('</code> 表示');
  });

  it('inserts space at the boundary between CJK text and an adjacent raw HTML node', () => {
    const html = run('中文<span>foo</span>結尾');
    expect(html).toContain('中文 <span>');
    expect(html).toContain('</span> 結尾');
  });
});
