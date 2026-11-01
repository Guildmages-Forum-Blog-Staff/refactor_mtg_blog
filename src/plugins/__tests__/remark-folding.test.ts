import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import remarkParse from 'remark-parse';
import { unified, type Processor } from 'unified';
import { afterEach, beforeEach, describe, expect, it, vi, type MockInstance } from 'vitest';
import { __setCardDataForTests } from '../mtg-card-cache';
import { remarkFolding } from '../remark-folding';
import { renderLikeAstro } from './astro-pipeline';

const html = async (md: string) => (await renderLikeAstro(md)).html;
const OPEN =
  '<details class="folding folding-blue"><summary class="folding-title">T</summary><div class="folding-body">';
const CLOSE = '</div></details>';

const RAW_HTML = 'folding tag inside raw HTML; kept as text';
const OWN_LINE = 'folding tag must be on its own line; kept as text';
const UNCLOSED_COMMENT = 'unclosed HTML comment hides folding tags';
const CROSSES = 'folding block must open and close in the same container; kept as text';
const NOT_A_BLOCK = 'folding tag not read as its own block; kept as text';

let warn: MockInstance<typeof console.warn>;
beforeEach(() => {
  __setCardDataForTests({});
  warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
});
afterEach(() => warn.mockRestore());

const warnings = () => warn.mock.calls.map((call) => String(call[0]));
// remark-rehype puts a newline between root-level blocks but not between the
// children of a custom node; the two are equivalent HTML.
const squash = (s: string) => s.replace(/>\n</g, '><');
const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

describe('remarkFolding — output structure', () => {
  it('renders the corpus shape as <details>', async () => {
    const out = await html('{% folding blue :: T %}\n\n內容\n\n{% endfolding %}');
    expect(out).toBe(`${OPEN}<p>內容</p>${CLOSE}`);
    expect(warnings()).toEqual([]);
  });

  it('uses folding-default without a color and adds open in named mode', async () => {
    expect(await html('{% folding :: T %}\nx\n{% endfolding %}')).toContain(
      '<details class="folding folding-default">',
    );
    expect(await html('{% folding title=T open=yes %}\nx\n{% endfolding %}')).toContain(
      '<details class="folding folding-default" open>',
    );
  });

  it('outputs the title as raw HTML without Markdown or smartypants', async () => {
    const out = await html("{% folding :: <b>粗</b> *a* it's %}\nx\n{% endfolding %}");
    expect(out).toContain('<summary class="folding-title"><b>粗</b> *a* it\'s</summary>');
  });

  it('removes the quotes around a quoted parameter', async () => {
    expect(await html('{% folding :: "a b" %}\nx\n{% endfolding %}')).toContain(
      '<summary class="folding-title">a b</summary>',
    );
  });

  it('applies pangu spacing to the title', async () => {
    expect(await html('{% folding :: 第3題 %}\nx\n{% endfolding %}')).toContain(
      '<summary class="folding-title">第 3 題</summary>',
    );
  });

  it('renders an empty title as an empty summary and warns', async () => {
    expect(await html('{% folding blue :: %}\nx\n{% endfolding %}')).toContain(
      '<summary class="folding-title"></summary>',
    );
    expect(warnings()).toEqual(['[folding] <input>:1 empty title']);
  });

  it('keeps a multi-word quoted named title intact', async () => {
    expect(await html('{% folding title="兩個 字詞" %}\nx\n{% endfolding %}')).toContain(
      '<summary class="folding-title">兩個 字詞</summary>',
    );
  });
});

describe('remarkFolding — tag lines and containers', () => {
  it('handles CRLF line endings, including warning lines', async () => {
    expect(
      await html(
        '前文\r\n\r\n{% folding blue :: T %}\r\n\r\nx\r\n\r\n{% endfolding %}\r\n\r\n後文',
      ),
    ).toBe(`<p>前文</p>\n${OPEN}<p>x</p>${CLOSE}\n<p>後文</p>`);
    await html('x\r\n\r\n{% endfolding %}');
    expect(warnings()).toEqual(['[folding] <input>:3 orphan {% endfolding %}']);
  });

  it('places a block inside a list item', async () => {
    const out = await html('- item\n  {% folding blue :: T %}\n  - inner\n  {% endfolding %}');
    expect(out).toBe(`<ul>\n<li>item\n${OPEN}<ul>\n<li>inner</li>\n</ul>${CLOSE}\n</li>\n</ul>`);
  });

  it('places a block inside a blockquote without adding another blockquote', async () => {
    const out = await html('> {% folding blue :: T %}\n> 文字\n> {% endfolding %}');
    expect(squash(out)).toBe(`<blockquote>${OPEN}<p>文字</p>${CLOSE}</blockquote>`);
  });

  it('resolves footnotes and reference links defined outside the block', async () => {
    const out = await html(
      '{% folding :: T %}\nsee[^1] and [x][r]\n{% endfolding %}\n\n[^1]: note\n\n[r]: https://e.x\n',
    );
    expect(out).toMatch(/<a href="https:\/\/e\.x"[^>]*>x<\/a>/);
    expect(out).toMatch(/<sup><a href="#user-content-fn-1"/);
    expect(out).toContain('note');
    expect(out).not.toContain('[^1]');
  });

  it('keeps an indented code block inside a block', async () => {
    expect(await html('{% folding blue :: T %}\n    code\n{% endfolding %}')).toBe(
      `${OPEN}<pre><code>code\n</code></pre>${CLOSE}`,
    );
  });

  it('warns about a mid-line example that ends up in indented code', async () => {
    const out = await html(
      '{% folding blue :: T %}\n    {% folding :: U %}x{% endfolding %}\n{% endfolding %}',
    );
    expect(out.match(/<details/g)).toHaveLength(1);
    expect(out).toContain('<pre><code>{% folding :: U %}x{% endfolding %}\n</code></pre>');
    expect(warnings()).toEqual([
      `[folding] <input>:2 ${OWN_LINE}`,
      `[folding] <input>:2 ${OWN_LINE}`,
    ]);
  });

  it('keeps a --- right under a block as a thematic break', async () => {
    const out = await html('A\n\n{% folding :: T %}\nx\n{% endfolding %}\n---\n\nB');
    expect(out).toMatch(/<\/details>\n?<hr>/);
  });

  it('ends a table at a tag line', async () => {
    const out = await html('| a |\n| - |\n| b |\n{% folding blue :: T %}\nx\n{% endfolding %}');
    expect(out).toContain('<tbody><tr><td>b</td></tr></tbody></table>');
    expect(out).toMatch(/<\/table>\n?<details class="folding folding-blue">/);
  });

  it.each([
    ['block', '<img alt="{% folding blue :: T %}x{% endfolding %}" src="x.png">'],
    ['inline', 'Hi <span title="{% folding blue :: T %}x{% endfolding %}">y</span>'],
    ['heading', '## A <img alt="{% folding blue :: T %}x{% endfolding %}" src="x.png">'],
  ])('keeps tags inside raw HTML (%s) as text and warns', async (_, md) => {
    const out = await html(md);
    expect(out).toContain('"{% folding blue :: T %}x{% endfolding %}"');
    expect(out).not.toContain('<details');
    expect(warnings()).toEqual([
      `[folding] <input>:1 ${RAW_HTML}`,
      `[folding] <input>:1 ${RAW_HTML}`,
    ]);
  });

  it('keeps a tag in the middle of a line as text and warns', async () => {
    const out = await html('前文 {% folding blue :: T %}x{% endfolding %} 後文');
    expect(out).toContain('{% folding blue :: T %} x {% endfolding %}');
    expect(out).not.toContain('<details');
    expect(warnings()).toEqual([
      `[folding] <input>:1 ${OWN_LINE}`,
      `[folding] <input>:1 ${OWN_LINE}`,
    ]);
  });

  it('silently skips a tag in an HTML comment inside a raw HTML block', async () => {
    expect(await html('<div>\n<!-- {% folding :: T %} -->\n</div>')).not.toContain('<details');
    expect(warnings()).toEqual([]);
  });

  it('makes definitions inside a block visible to the whole post', async () => {
    const out = await html(
      '{% folding :: A %}\n[x][ref]\n\n[ref]: https://a.x\n{% endfolding %}\n\n[y][ref]',
    );
    expect(out).toMatch(/<a href="https:\/\/a\.x"[^>]*>x<\/a>/);
    expect(out).toMatch(/<a href="https:\/\/a\.x"[^>]*>y<\/a>/);
  });

  it('keeps a list or table that starts right after the open tag inside the block', async () => {
    const list = await html('{% folding blue :: T %}\n- a\n- b\n{% endfolding %}\n\nafter');
    expect(squash(list)).toContain(`${OPEN}<ul><li>a</li><li>b</li></ul>${CLOSE}`);
    expect(list).not.toContain('{% endfolding %}');
    const table = await html('{% folding blue :: T %}\n| a |\n| - |\n| b |\n{% endfolding %}');
    expect(squash(table)).toMatch(
      new RegExp(`^${escapeRe(OPEN)}\\n*<table>[\\s\\S]*</table>${escapeRe(CLOSE)}$`),
    );
  });

  it('keeps <p> for paragraphs of a block inside a tight list item', async () => {
    const out = await html('- item\n  {% folding blue :: T %}\n  x\n  {% endfolding %}\n- next');
    expect(squash(out)).toContain(`${OPEN}<p>x</p>${CLOSE}`);
    expect(warnings()).toEqual([]);
  });

  it('renders an empty block', async () => {
    expect(await html('{% folding blue :: T %}\n{% endfolding %}')).toBe(`${OPEN}${CLOSE}`);
    expect(warnings()).toEqual([]);
  });
});

describe('remarkFolding — ignored regions and errors', () => {
  it('reports a scan problem inside a block once', async () => {
    await html('{% folding :: T %}\nx\n{%- folding :: U %}\n{% endfolding %}');
    expect(warnings()).toEqual([
      '[folding] <input>:3 unparseable folding tag: "{%-" is not supported',
    ]);
  });

  it('leaves tags in fenced code, inline code and HTML comments alone', async () => {
    const out = await html(
      '```\n{% folding :: t %}\n{% endfolding %}\n```\n\n`{% folding :: t %}`\n\n<!-- {% folding :: t %} -->',
    );
    expect(out).not.toContain('<details');
    expect(warnings()).toEqual([]);
  });

  it('shows {% %} inside inline code within content as-is', async () => {
    expect(await html('{% folding blue :: T %}\n`{% endfolding %}`\n{% endfolding %}')).toBe(
      `${OPEN}<p><code>{% endfolding %}</code></p>${CLOSE}`,
    );
  });

  it('keeps text and warns for unclosed, orphan and unparseable tags', async () => {
    const out = await html(
      '{% folding :: open %}\n\n{%- folding :: dash %}\n\n{% endfolding now %}\n\n**粗體**',
    );
    expect(out).toContain('{% folding :: open %}');
    expect(out).toContain('<strong>粗體</strong>');
    expect(out).not.toContain('<details');
    expect(warnings()).toEqual([
      '[folding] <input>:1 unclosed {% folding %}',
      '[folding] <input>:3 unparseable folding tag: "{%-" is not supported',
      '[folding] <input>:5 unparseable folding tag: {% endfolding %} takes no arguments',
    ]);
  });

  it('warns on an unterminated quote and on an open tag without %}', async () => {
    await html('{% folding "blue :: T %}\nx');
    await html('x\n{% folding :: T');
    expect(warnings()).toEqual([
      '[folding] <input>:1 unterminated quote in {% folding %}',
      '[folding] <input>:2 unparseable folding tag: missing "%}"',
    ]);
  });

  it('warns once per problem inside nested content, with file lines', async () => {
    await html(
      '{% folding :: a %}\n\n{% folding teal :: b %}\nx\n{% endfolding %}\n\n{% endfolding %}',
    );
    expect(warnings()).toEqual(['[folding] <input>:3 unknown color: teal']);
  });

  it('reports lines relative to the source file, after front matter', async () => {
    const dir = mkdtempSync(join(tmpdir(), 'folding-'));
    try {
      const path = join(dir, 'post.md');
      writeFileSync(path, '---\ntitle: x\n---\n\n正文\n\n{% endfolding %}\n');
      // Astro passes the body with front matter removed and trimmed.
      const body = '正文\n\n{% endfolding %}';
      await renderLikeAstro(body, { path });
      // Paths outside the project root are printed as-is.
      expect(warnings()).toEqual([`[folding] ${path}:7 orphan {% endfolding %}`]);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it('finds the body after front matter that repeats it', async () => {
    const dir = mkdtempSync(join(tmpdir(), 'folding-'));
    try {
      const path = join(dir, 'post.md');
      writeFileSync(path, '---\ntitle: "{% endfolding %}"\n---\n\n{% endfolding %}\n');
      await renderLikeAstro('{% endfolding %}', { path });
      expect(warnings()).toEqual([`[folding] ${path}:5 orphan {% endfolding %}`]);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it('folds a block after a fence that ended with its blockquote', async () => {
    const out = await html('> ```\n> code\n\n{% folding blue :: T %}\nx\n{% endfolding %}');
    expect(out).toContain(`${OPEN}<p>x</p>${CLOSE}`);
    expect(warnings()).toEqual([]);
  });

  it('warns when an unclosed HTML comment hides folding tags', async () => {
    const out = await html('x\n\n<!--\n{% folding blue :: T %}\ny\n{% endfolding %}');
    expect(out).not.toContain('<details');
    expect(warnings()).toEqual([`[folding] <input>:3 ${UNCLOSED_COMMENT}`]);
  });

  it('skips .mdx files', async () => {
    const out = await renderLikeAstro('{% folding :: t %}\nx\n{% endfolding %}', { path: 'a.mdx' });
    expect(out.html).not.toContain('<details');
  });
});

describe('remarkFolding — content', () => {
  it('turns every content heading into a heading paragraph that stays out of the TOC', async () => {
    const out = await renderLikeAstro(
      '# 外\n\n{% folding blue :: T %}\n\n### **<font color="#FD0214">紅</font>白**\n\nSetext\n---\n\n{% endfolding %}',
    );
    expect(out.html).toContain(
      '<p class="folding-heading folding-heading-3" role="heading" aria-level="3"><strong><font color="#FD0214">紅</font>白</strong></p>',
    );
    expect(out.html).toContain(
      '<p class="folding-heading folding-heading-2" role="heading" aria-level="2">Setext</p>',
    );
    expect(out.headings).toEqual([{ depth: 1, text: '外' }]);
  });

  it('runs notel at the top level of the content', async () => {
    const out = await html(
      '{% folding blue :: T %}\n{% notel red 注意 %}\n內容\n{% endnotel %}\n{% endfolding %}',
    );
    expect(out).toContain('<div class="notel notel-red"><div class="notel-title">注意</div>');
  });

  it('renders content exactly like the same text outside a block', async () => {
    __setCardDataForTests({
      found: {
        'search|Black Lotus||en': {
          name: 'Black Lotus',
          scryfall_uri: 'https://scryfall.com/card/lea/233/black-lotus',
          layout: 'normal',
          card_faces: [{ image: 'https://img/black-lotus.jpg' }],
        },
      },
    });
    const body = [
      '{% mtglink "Black Lotus" %} 說"好"了3次 -- 對...',
      '',
      '![](https://cards.scryfall.io/large/front/a/b/ab.jpg)',
      '',
      '{% youtube dQw4w9WgXcQ %}',
      '',
      '> 引用\n第二行',
    ].join('\n');
    const outside = await html(body);
    const inside = await html(`{% folding blue :: T %}\n${body}\n{% endfolding %}`);
    expect(outside).toContain('https://scryfall.com/card/lea/233/black-lotus');
    expect(squash(inside)).toBe(squash(`${OPEN}${outside}${CLOSE}`));
  });

  it('renders nested and consecutive blocks', async () => {
    const out = await html(
      '{% folding blue :: A %}\n{% folding red :: B %}\nx\n{% endfolding %}\n{% endfolding %}\n{% folding :: C %}\ny\n{% endfolding %}',
    );
    expect(out.match(/<details/g)).toHaveLength(3);
    expect(out).toContain('<div class="folding-body"><details class="folding folding-red">');
  });

  it('keeps r/ words and quoted separators literal in titles', async () => {
    expect(await html('{% folding blue, "r/a, b" %}\nx\n{% endfolding %}')).toContain(
      '<summary class="folding-title">r/a, b</summary>',
    );
  });
});

describe('remarkFolding — block boundaries', () => {
  it('keeps a block whose tags land in different containers as text', async () => {
    const out = await html(
      '- item\n  {% folding blue :: T %}\n  x\n{% endfolding %}\n\n{% folding red :: R %}\ny\n{% endfolding %}',
    );
    expect(out.match(/<details/g)).toHaveLength(1);
    expect(out).toContain('<details class="folding folding-red">');
    expect(out).toContain('{% folding blue :: T %}');
    expect(warnings()).toEqual([
      `[folding] <input>:2 ${CROSSES}`,
      `[folding] <input>:4 ${CROSSES}`,
    ]);
  });

  it('refolds the remaining tags after dropping a failed pair', async () => {
    const out = await html(
      '{% folding :: A %}\n- item\n  {% folding :: B %}\n  x\n{% endfolding %}\n{% endfolding %}',
    );
    expect(out.match(/<details/g)).toHaveLength(1);
    expect(out).toContain('<summary class="folding-title">A</summary>');
    expect(warnings()).toEqual([
      `[folding] <input>:3 ${CROSSES}`,
      `[folding] <input>:5 ${CROSSES}`,
    ]);
  });

  it('keeps a tag line that is not read as its own block as text', async () => {
    const out = await html('text\n    {% folding blue :: T %}\nx\n{% endfolding %}');
    expect(out).not.toContain('<details');
    expect(out).toContain('{% folding blue :: T %}');
    expect(warnings()).toEqual([
      `[folding] <input>:2 ${NOT_A_BLOCK}`,
      `[folding] <input>:4 ${NOT_A_BLOCK}`,
    ]);
  });

  it('picks a marker that does not clash with the post', async () => {
    const out = await html(
      '<!--folding-marker:0-->\n\n{% folding blue :: T %}\nx\n{% endfolding %}',
    );
    expect(out).toContain('<!--folding-marker:0-->');
    expect(out).toContain(`${OPEN}<p>x</p>${CLOSE}`);
  });

  it('never leaks marker comments', async () => {
    for (const md of [
      '{% folding blue :: T %}\nx\n{% endfolding %}',
      '- item\n  {% folding blue :: T %}\n  x\n{% endfolding %}',
      'text\n    {% folding blue :: T %}\nx\n{% endfolding %}',
    ]) {
      expect(await html(md)).not.toContain('folding-marker');
    }
  });

  it('parses a post once without tags, twice with tags, and once more per retry', () => {
    let parses = 0;
    function countParses(this: Processor) {
      const parser = this.parser!;
      this.parser = (doc, file) => {
        parses++;
        return parser(doc, file);
      };
    }
    const run = (md: string) => {
      parses = 0;
      unified().use(remarkParse).use(countParses).use(remarkFolding).parse(md);
      return parses;
    };
    expect(run('plain text')).toBe(1);
    expect(run('{% folding :: T %}\nx\n{% endfolding %}')).toBe(2);
    expect(
      run(
        '- item\n  {% folding :: T %}\n  x\n{% endfolding %}\n\n{% folding :: R %}\ny\n{% endfolding %}',
      ),
    ).toBe(3);
  });
});

describe('astro.config.ts', () => {
  it('registers remarkFolding after remarkNotel', () => {
    const config = readFileSync('astro.config.ts', 'utf-8');
    expect(config).toMatch(/remarkNotel,\s*remarkFolding,\s*\]/);
  });
});
