import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, beforeEach, describe, expect, it, vi, type MockInstance } from 'vitest';
import { __setCardDataForTests } from '../mtg-card-cache';
import { renderLikeAstro } from './astro-pipeline';

const html = async (md: string) => (await renderLikeAstro(md)).html;
const OPEN =
  '<details class="folding folding-blue"><summary class="folding-title">T</summary><div class="folding-body">';
const CLOSE = '</div></details>';

let warn: MockInstance<typeof console.warn>;
beforeEach(() => {
  __setCardDataForTests({});
  warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
});
afterEach(() => warn.mockRestore());

const warnings = () => warn.mock.calls.map((call) => String(call[0]));
// remark-rehype puts a newline between root-level blocks but not between the
// children of a custom node; the two are equivalent HTML.
// Placeholders are private-use characters and must never reach the output.
const PRIVATE_USE = /[\uE000-\uF8FF]/;
const squash = (s: string) => s.replace(/>\n</g, '><');

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

describe('remarkFolding — placement', () => {
  it('splits a paragraph around a block in the middle of a line', async () => {
    expect(await html('前文 {% folding blue :: T %}x{% endfolding %} 後文')).toBe(
      `<p>前文</p>\n${OPEN}<p>x</p>${CLOSE}\n<p>後文</p>`,
    );
  });

  it('splits emphasis that surrounds a block', async () => {
    expect(await html('*a {% folding blue :: T %}x{% endfolding %} b*')).toBe(
      `<p><em>a</em></p>\n${OPEN}<p>x</p>${CLOSE}\n<p><em>b</em></p>`,
    );
  });

  it('keeps emphasis that ends in punctuation right before a block', async () => {
    expect(await html('**注意：**{% folding blue :: T %}x{% endfolding %}')).toBe(
      `<p><strong>注意：</strong></p>\n${OPEN}<p>x</p>${CLOSE}`,
    );
  });

  it('keeps emphasis that starts with punctuation right after a block', async () => {
    expect(await html('{% folding blue :: T %}x{% endfolding %}*（註）*')).toBe(
      `${OPEN}<p>x</p>${CLOSE}\n<p><em>（註）</em></p>`,
    );
  });

  it('places a block inside a list item', async () => {
    const out = await html('- item\n  {% folding blue :: T %}\n  - inner\n  {% endfolding %}');
    expect(out).toBe(`<ul>\n<li>item\n${OPEN}<ul>\n<li>inner</li>\n</ul>${CLOSE}\n</li>\n</ul>`);
  });

  it('places a block inside a blockquote and keeps > lines as content', async () => {
    const out = await html('> {% folding blue :: T %}\n> 文字\n> {% endfolding %}');
    expect(out).toBe(
      `<blockquote>\n${OPEN}<blockquote>\n<p>文字</p>\n</blockquote>${CLOSE}\n</blockquote>`,
    );
  });

  it('splits raw HTML around a block', async () => {
    expect(await html('<div class="w">{% folding blue :: T %}x{% endfolding %}</div>')).toBe(
      `<div class="w">\n${OPEN}<p>x</p>${CLOSE}\n</div>`,
    );
  });

  it('moves a block out of a heading to just after it', async () => {
    expect(await html('## 標 {% folding blue :: T %}x{% endfolding %}')).toBe(
      `<h2>標</h2>\n${OPEN}<p>x</p>${CLOSE}`,
    );
    expect(await html('## A {% folding blue :: T %}x{% endfolding %} B')).toContain('<h2>A B</h2>');
  });

  it('moves a block out of a table to just after it', async () => {
    const out = await html('| a |\n| - |\n| b {% folding blue :: T %}x{% endfolding %} |');
    expect(out).toMatch(/<\/table>\n?<details class="folding folding-blue">/);
  });

  it('restores the original text where no block can go, and warns', async () => {
    const out = await html('![說明 {% folding blue :: T %}x{% endfolding %}](https://e.x/a.png)');
    expect(out).toContain('alt="說明 {% folding blue :: T %}x{% endfolding %}"');
    expect(out).not.toContain('<details');
    expect(out).not.toMatch(PRIVATE_USE);
    expect(warnings()).toEqual([
      '[folding] <input>:1 folding block in unsupported position; kept as text',
    ]);
  });
});

describe('remarkFolding — ignored regions and errors', () => {
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

describe('astro.config.ts', () => {
  it('registers remarkFolding after remarkNotel', () => {
    const config = readFileSync('astro.config.ts', 'utf-8');
    expect(config).toMatch(/remarkNotel,\s*remarkFolding,\s*\]/);
  });
});
