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
// swallows the rest of the line — any emphasis (`*`- or `_`-flavoured: bold,
// italic, bold-italic) after it stops being parsed and leaks literal markers. This
// project's remarkMtgTags runs AFTER the markdown parse (it rewrites `text`
// nodes in the mdast tree), so emphasis is already its own em/strong node
// before the tag is touched. These tests assert the final HTML keeps the
// emphasis element, especially when mtglink comes first.

const blackLotus = {
  name: 'Black Lotus',
  scryfall_uri: 'https://scryfall.com/card/lea/233/black-lotus',
  layout: 'normal',
  card_faces: [{ image: 'https://img/black-lotus.jpg' }],
};

// Mirror Astro's chain so emphasis is rendered to em/strong (markdown->markdown
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

describe('remarkMtgTags — emphasis interop (Hexo placeholder regression)', () => {
  // `leak` is the substring that would appear if the emphasis marker leaked
  // unparsed. Underscore cases use a name-qualified guard because the anchor
  // legitimately contains `target="_blank"`, so a bare `_` would false-positive.
  it.each([
    ['bold', '**致命一擊**', '<strong>致命一擊</strong>', '*'],
    ['italic', '*致命一擊*', '<em>致命一擊</em>', '*'],
    ['bold-italic', '***致命一擊***', '<em><strong>致命一擊</strong></em>', '*'],
    ['underscore italic', '_致命一擊_', '<em>致命一擊</em>', '_致命一擊'],
    ['underscore bold', '__致命一擊__', '<strong>致命一擊</strong>', '_致命一擊'],
    ['underscore bold-italic', '___致命一擊___', '<em><strong>致命一擊</strong></em>', '_致命一擊'],
  ])(
    '%s still renders when mtglink is used FIRST in the paragraph',
    (_kind, emph, expected, leak) => {
      const html = toHtml(`{% mtglink "Black Lotus" %} 然後使用 ${emph}`);
      expect(html).toContain('class="tooltip"'); // mtglink rendered
      expect(html).toContain(expected); // emphasis survived
      expect(html).not.toContain(leak); // no literal emphasis markers leaked
    },
  );

  it('emphasis renders when mtglink comes after the bold', () => {
    const html = toHtml('**致命一擊** 然後使用 {% mtglink "Black Lotus" %}');
    expect(html).toContain('<strong>致命一擊</strong>');
    expect(html).toContain('class="tooltip"');
    expect(html).not.toContain('*');
  });

  it('bold on both sides of an mtglink in the same paragraph', () => {
    const html = toHtml('**前面粗體** {% mtglink "Black Lotus" %} **後面粗體**');
    expect(html).toContain('<strong>前面粗體</strong>');
    expect(html).toContain('<strong>後面粗體</strong>');
    expect(html).toContain('class="tooltip"');
    expect(html).not.toContain('*');
  });
});
