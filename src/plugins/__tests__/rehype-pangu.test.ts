import { describe, it, expect } from 'vitest';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import smartypants from 'remark-smartypants';
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

const runTwice = (md: string) =>
  unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypePangu)
    .use(rehypePangu)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .processSync(md)
    .toString();

const runWithSmartypants = (md: string) =>
  unified()
    .use(remarkParse)
    .use(smartypants)
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

  it('applies pangu inside the value of a single multi-content raw HTML node', () => {
    // A block-level HTML node in markdown produces a single raw HAST node
    // whose `value` is the entire HTML fragment, including its inner text.
    // This is the shape that the project's existing remark plugins (mtg-tags,
    // scryfall, notel, ...) emit when they synthesise HTML.
    const html = run('<div>中文English內容</div>');
    expect(html).toContain('中文 English');
    expect(html).toContain('English 內容');
  });

  it('is idempotent — applying the plugin twice produces the same HTML', () => {
    const fixtures = [
      '這是中文English內容',
      '中文`code`表示',
      '中文<span>foo</span>結尾',
      '<div>中文English內容</div>',
    ];
    for (const md of fixtures) {
      expect(runTwice(md)).toEqual(run(md));
    }
  });

  it('preserves smartypants curly quotes in English-only contexts', () => {
    // Astro enables remark-smartypants automatically; this mirrors that.
    // With ASCII word boundaries on both sides, smartypants picks open + close
    // (U+201C, U+201D) — pangu must leave that untouched.
    const html = runWithSmartypants('Pre "quoted text" post');
    expect(html).toContain('“quoted text”');
    expect(html).not.toMatch(/ {2}/);
  });

  it('coexists with smartypants when CJK is adjacent to the quoted span', () => {
    // Smartypants's quirk: with CJK on either side it cannot read a word
    // boundary and falls back to U+201D on both ends. Pangu must still leave
    // the result well-formed: no double spaces, no missing CJK content.
    const html = runWithSmartypants('他說"hello world"完');
    expect(html).toContain('hello world');
    expect(html).toContain('他說');
    expect(html).toContain('完');
    expect(html).not.toMatch(/ {2}/);
  });

  it('preserves MTG counter notation -N/-M after CJK', () => {
    // pangu by itself would read the leading minus sign as a binary operator
    // after CJK and produce "加上 - 1/-1 指示物" — splitting the counter.
    // Our plugin must keep the slash-fraction glued together.
    expect(run('加上-1/-1指示物')).toContain('加上 -1/-1 指示物');
    expect(run('在生物上加-1/-1指示物')).toContain('在生物上加 -1/-1 指示物');
  });

  it('preserves MTG counter notation +N/+M after CJK', () => {
    expect(run('加+1/+1指示物')).toContain('加 +1/+1 指示物');
  });
});
