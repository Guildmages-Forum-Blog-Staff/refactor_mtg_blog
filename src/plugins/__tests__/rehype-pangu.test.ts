import { describe, it, expect } from 'vitest';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import smartypants from 'remark-smartypants';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import type { Root, Element, Text } from 'hast';
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

  it('preserves MTG counter notation across mixed signs after CJK', () => {
    // The SIGNED_FRACTION_FIXUP regex requires both halves to carry a sign,
    // not just matching signs. Lock in the cross-sign cases so a future
    // narrowing of the regex (e.g. restricting to same-sign pairs) is caught.
    expect(run('加上+1/-1指示物')).toContain('加上 +1/-1 指示物');
    expect(run('加上-1/+1指示物')).toContain('加上 -1/+1 指示物');
  });

  // The next four tests pin behaviour against raw-HTML shapes emitted by
  // this project's own remark plugins (remark-mtg-tags, remark-mtg-merge,
  // remark-notel). They land in the rehype tree as `raw` hast nodes and
  // therefore go through applyPangu wholesale — so we want to confirm
  // pangu's whole-string pass neither corrupts URLs / class lists nor
  // misses CJK<>ASCII boundaries that genuinely live inside the raw text.

  it('preserves ASCII-only attribute values across a raw inline span', () => {
    // mtgcard-error shape: <span class="mtgcard-error">找不到卡片「name」</span>.
    // class is pure ASCII, content mixes CJK with a CJK-bracketed ASCII name,
    // so there is no CJK<>ASCII boundary anywhere — output must equal input
    // modulo paragraph wrapping.
    const html = run('<span class="mtgcard-error">找不到卡片「Lightning Bolt」</span>');
    expect(html).toContain('class="mtgcard-error"');
    expect(html).toContain('找不到卡片「Lightning Bolt」');
  });

  it('still spaces a CJK-bearing attribute value inside a raw node', () => {
    // applyPangu sees the whole raw string and cannot tell attribute
    // values from text content — the rehype-pangu.ts header documents this
    // raw-HTML caveat. Pin the resulting behaviour so an accidental change
    // surfaces here; if this ever needs to be tightened, the fix is an
    // HTML-aware raw walker rather than a regex tweak.
    const html = run(
      '<img class="mtg" alt="中文Card名稱" src="https://example.com/x.jpg" />',
    );
    expect(html).toContain('alt="中文 Card 名稱"');
    expect(html).toContain('src="https://example.com/x.jpg"');
    expect(html).toContain('class="mtg"');
  });

  it('handles nested raw HTML (mtgcard tooltip pattern) without touching URLs', () => {
    // The mtgcard tooltip emits <a class="tooltip" href="..."><display>
    // <span><oracle></span></a>. Pangu must space inner CJK<>ASCII
    // boundaries but leave the href URL intact end-to-end.
    const html = run(
      '前<a class="tooltip" href="https://example.com/path">中文Display<span>中文Inner</span></a>後',
    );
    expect(html).toContain('href="https://example.com/path"');
    expect(html).toContain('中文 Display');
    expect(html).toContain('中文 Inner');
    expect(html).not.toMatch(/https?:\/\/ /);
    expect(html).not.toMatch(/example\. com/);
  });

  it('handles notel-style multi-segment raw HTML', () => {
    // remark-notel emits an opening raw fragment that already carries the
    // title and body wrappers, and a separate closing fragment. The
    // structural class lists must survive intact while CJK<>ASCII content
    // inside the title and body is spaced.
    const html = run(
      '<div class="notel notel-info"><div class="notel-title">中文Title</div><div class="notel-body">內文foo結尾</div></div>',
    );
    expect(html).toContain('class="notel notel-info"');
    expect(html).toContain('class="notel-title"');
    expect(html).toContain('class="notel-body"');
    expect(html).toContain('中文 Title');
    expect(html).toContain('內文 foo 結尾');
  });

  // Direct hast-level skip tests cover every SKIP_TAGS member uniformly.
  // remark-rehype emits inline raw HTML (`<kbd>x</kbd>`) as `raw` nodes
  // rather than elements, so skip behaviour for kbd/samp/script/style can
  // only be observed at the implementation layer; synthesise the tree
  // directly to avoid coupling these assertions to markdown parsing quirks.
  it.each(['pre', 'code', 'script', 'style', 'kbd', 'samp'])(
    'skips %s element subtree at the hast level',
    (tagName) => {
      const text: Text = { type: 'text', value: '中文foo內容' };
      const tree: Root = {
        type: 'root',
        children: [{ type: 'element', tagName, properties: {}, children: [text] } as Element],
      };
      rehypePangu()(tree);
      const child = (tree.children[0] as Element).children[0] as Text;
      expect(child.value).toBe('中文foo內容');
    },
  );
});
