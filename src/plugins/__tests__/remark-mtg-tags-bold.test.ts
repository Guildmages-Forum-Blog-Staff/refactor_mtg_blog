import { describe, it, expect, beforeEach } from 'vitest';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import { remarkMtgTags } from '../remark-mtg-tags';
import { __setCardDataForTests } from '../mtg-card-cache';

// Regression guard for the Hexo tag-plugin failure mode: Hexo replaces
// `{% mtglink %}` with an HTML-comment placeholder BEFORE markdown runs, so a
// placeholder at the start of a line becomes a CommonMark HTML block that
// swallows the rest of the line — any `**bold**` after it stops being parsed as
// emphasis and leaks literal `**`. This project's remarkMtgTags runs AFTER the
// markdown parse (it rewrites `text` nodes in the mdast tree), so `**bold**` is
// already its own `strong` node before the tag is touched. These tests assert
// the final HTML still contains <strong>, especially when mtglink comes first.

const blackLotus = {
  name: 'Black Lotus',
  scryfall_uri: 'https://scryfall.com/card/lea/233/black-lotus',
  layout: 'normal',
  card_faces: [{ image: 'https://img/black-lotus.jpg' }],
};

// Mirror Astro's chain so emphasis is rendered to <strong> (markdown->markdown
// would stringify it back to `**bold**` and prove nothing).
const toHtml = (md: string) =>
  String(
    unified()
      .use(remarkParse)
      .use(remarkMtgTags)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeRaw)
      .use(rehypeStringify)
      .processSync(md),
  );

beforeEach(() => {
  __setCardDataForTests({ found: { 'search|Black Lotus||en': blackLotus }, not_found: {} });
});

describe('remarkMtgTags — bold interop (Hexo placeholder regression)', () => {
  it('bold still renders when mtglink is used FIRST in the paragraph', () => {
    const html = toHtml('{% mtglink "Black Lotus" %} 然後使用 **致命一擊**');
    expect(html).toContain('class="tooltip"'); // mtglink rendered
    expect(html).toContain('<strong>致命一擊</strong>'); // bold survived
    expect(html).not.toContain('**'); // no literal asterisks leaked
  });

  it('bold renders when mtglink comes after the bold', () => {
    const html = toHtml('**致命一擊** 然後使用 {% mtglink "Black Lotus" %}');
    expect(html).toContain('<strong>致命一擊</strong>');
    expect(html).toContain('class="tooltip"');
    expect(html).not.toContain('**');
  });

  it('bold on both sides of an mtglink in the same paragraph', () => {
    const html = toHtml('**前面粗體** {% mtglink "Black Lotus" %} **後面粗體**');
    expect(html).toContain('<strong>前面粗體</strong>');
    expect(html).toContain('<strong>後面粗體</strong>');
    expect(html).toContain('class="tooltip"');
    expect(html).not.toContain('**');
  });
});
