import type { Root } from 'mdast';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import { describe, expect, it } from 'vitest';
import { findTagLines, hasFoldingTag, pairTags, type TagLine } from '../folding-lines';

const parse = (doc: string) => unified().use(remarkParse).use(remarkGfm).parse(doc) as Root;
const scan = (doc: string) => findTagLines(doc, parse(doc));

const RAW_HTML = 'folding tag inside raw HTML; kept as text';
const OWN_LINE = 'folding tag must be on its own line; kept as text';
const DASH = 'unparseable folding tag: "{%-" is not supported';
const END_ARGS = 'unparseable folding tag: {% endfolding %} takes no arguments';
const UNTERMINATED_QUOTE = 'unterminated quote in {% folding %}';
const MISSING_CLOSE = 'unparseable folding tag: missing "%}"';
const UNCLOSED = 'unclosed {% folding %}';
const ORPHAN = 'orphan {% endfolding %}';
const UNCLOSED_COMMENT = 'unclosed HTML comment hides folding tags';

describe('hasFoldingTag', () => {
  it('detects folding and endfolding tags only', () => {
    expect(hasFoldingTag('a\n{% folding :: T %}')).toBe(true);
    expect(hasFoldingTag('{%endfolding%}')).toBe(true);
    expect(hasFoldingTag('folding {% Folding :: T %} {% notel x %}')).toBe(false);
  });

  it('detects a tag name followed by a line ending or the end of the document', () => {
    expect(hasFoldingTag('{% folding\n:: T %}')).toBe(true);
    expect(hasFoldingTag('{% endfolding\r\n%}')).toBe(true);
    expect(hasFoldingTag('x {% folding')).toBe(true);
  });
});

describe('findTagLines', () => {
  it('finds standalone open and close tag lines', () => {
    const { tags, diagnostics } = scan('{% folding blue :: T %}\nx\n{% endfolding %}');
    expect(tags.map(({ kind, line, start, end }) => ({ kind, line, start, end }))).toEqual([
      { kind: 'open', line: 1, start: 0, end: 23 },
      { kind: 'close', line: 3, start: 26, end: 42 },
    ]);
    expect(tags[0].params.length).toBeGreaterThan(0);
    expect(diagnostics).toEqual([]);
  });

  it('accepts spaces, tabs and > markers before a tag, and -%} or trailing blanks after it', () => {
    const doc = '> {% folding :: T -%}  \n> x\n>\t{% endfolding -%}\t';
    expect(scan(doc).tags.map((t) => t.line)).toEqual([1, 3]);
  });

  it('accepts no-break spaces inside a tag', () => {
    const doc = '{%\u00a0folding\u00a0:: T %}\nx\n{%\u00a0endfolding\u00a0%}';
    expect(scan(doc)).toMatchObject({ tags: [{ line: 1 }, { line: 3 }], diagnostics: [] });
  });

  it('accepts CRLF line endings', () => {
    expect(scan('{% folding :: T %}\r\nx\r\n{% endfolding %}\r\n').tags.map((t) => t.line)).toEqual(
      [1, 3],
    );
  });

  it('skips tags in code and HTML comments without warnings', () => {
    const doc = [
      '```',
      '{% folding :: a %}',
      '```',
      '',
      'text',
      '',
      '    {% folding :: b %}',
      '',
      '`{% folding :: c %}`',
      '',
      '<!-- {% folding :: d %} -->',
      '',
      '<div>',
      '<!-- {% endfolding %} -->',
      '</div>',
    ].join('\n');
    expect(scan(doc)).toEqual({ tags: [], diagnostics: [] });
  });

  it('does not warn about tags hidden by an unclosed fence', () => {
    expect(scan('```\n{% folding :: T %}\n{% endfolding %}')).toEqual({
      tags: [],
      diagnostics: [],
    });
  });

  it('warns about tags in other raw HTML', () => {
    const doc = '<pre>\n{% folding :: T %}\n</pre>\n\nHi <span title="{% endfolding %}">y</span>';
    expect(scan(doc)).toEqual({
      tags: [],
      diagnostics: [
        { line: 2, reason: RAW_HTML },
        { line: 5, reason: RAW_HTML },
      ],
    });
  });

  it('warns once about an unclosed HTML comment that hides tags', () => {
    expect(scan('x\n\n<!--\n{% folding :: T %}\n{% endfolding %}')).toEqual({
      tags: [],
      diagnostics: [{ line: 3, reason: UNCLOSED_COMMENT }],
    });
  });

  it('warns about tags that share their line with other text', () => {
    const doc = [
      '前文 {% folding :: T %}',
      '',
      '- {% folding :: L %}',
      '',
      '{% folding :: X %}after',
      '',
      '{% endfolding %} 後',
      '',
      '\u3000{% folding :: W %}',
    ].join('\n');
    expect(scan(doc)).toEqual({
      tags: [],
      diagnostics: [1, 3, 5, 7, 9].map((line) => ({ line, reason: OWN_LINE })),
    });
  });

  it('does not read tag text inside a quoted title as a tag', () => {
    const doc = '{% folding :: "{% endfolding %}" %}\nx\n{% endfolding %}';
    expect(scan(doc)).toMatchObject({ tags: [{ line: 1 }, { line: 3 }], diagnostics: [] });
  });

  it('reports unparseable tags, bounding quotes and %} by the line', () => {
    const doc =
      '{%- folding :: a %}\n\n{% endfolding now %}\n\n{% folding "q :: t %}\n"\n\n{% folding :: t';
    expect(scan(doc)).toEqual({
      tags: [],
      diagnostics: [
        { line: 1, reason: DASH },
        { line: 3, reason: END_ARGS },
        { line: 5, reason: UNTERMINATED_QUOTE },
        { line: 8, reason: MISSING_CLOSE },
      ],
    });
  });

  it('reports tags whose arguments wrap onto the next line', () => {
    expect(scan('{% folding\n:: T %}\n\n{% endfolding\n%}')).toEqual({
      tags: [],
      diagnostics: [
        { line: 1, reason: MISSING_CLOSE },
        { line: 4, reason: END_ARGS },
      ],
    });
  });
});

describe('pairTags', () => {
  const tag = (kind: 'open' | 'close', line: number): TagLine => ({
    kind,
    line,
    start: line * 10,
    end: line * 10 + 5,
    params: [],
  });

  it('pairs by depth, inner pairs first', () => {
    const [o1, o2, c3, c4, o5, c6] = [
      tag('open', 1),
      tag('open', 2),
      tag('close', 3),
      tag('close', 4),
      tag('open', 5),
      tag('close', 6),
    ];
    expect(pairTags([o1, o2, c3, c4, o5, c6])).toEqual({
      pairs: [
        { open: o2, close: c3 },
        { open: o1, close: c4 },
        { open: o5, close: c6 },
      ],
      diagnostics: [],
    });
  });

  it('reports orphan and unclosed tags in line order', () => {
    expect(pairTags([tag('close', 1), tag('open', 2)]).diagnostics).toEqual([
      { line: 1, reason: ORPHAN },
      { line: 2, reason: UNCLOSED },
    ]);
  });
});
