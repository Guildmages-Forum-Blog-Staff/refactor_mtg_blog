import { describe, expect, it } from 'vitest';
import { extractContent, scanFolding, type FoldingBlock } from '../folding-scan';

const contents = (src: string) => scanFolding(src).blocks.map((b) => extractContent(src, b));
const reasons = (src: string) => scanFolding(src).diagnostics;
const UNCLOSED_FENCE =
  'unclosed fenced code block runs to the end of the file; folding tags in it are ignored';
const UNCLOSED_COMMENT =
  'unclosed HTML comment runs to the end of the file; folding tags in it are ignored';

describe('scanFolding — recognition', () => {
  it('finds a block on its own lines and strips one newline at each end', () => {
    const src = 'before\n\n{% folding blue :: t %}\n\nbody\n\n{% endfolding %}\n\nafter';
    expect(contents(src)).toEqual(['\nbody\n']);
    expect(reasons(src)).toEqual([]);
  });

  it('finds tags in the middle of a line and without blank lines', () => {
    expect(contents('text {% folding :: t %}body{% endfolding %} more')).toEqual(['body']);
    expect(contents('a\n{% folding :: t %}\nbody\n{% endfolding %}\nb')).toEqual(['body']);
  });

  it('dedents content inside list items', () => {
    const src = '- item\n  {% folding :: t %}\n  - inner\n    deeper\n  {% endfolding %}';
    expect(contents(src)).toEqual(['- inner\n  deeper\n']);
  });

  it('removes no more indentation than the open tag line has', () => {
    expect(contents('{% folding :: t %}\n    code\n{% endfolding %}')).toEqual(['    code']);
    expect(contents('- {% folding :: t %}\n    text\n    {% endfolding %}')).toEqual(['  text\n']);
    expect(contents('1. {% folding :: t %}\n   text\n   {% endfolding %}')).toEqual(['text\n']);
    expect(contents('\t{% folding :: t %}\n\t\ttext\n\t{% endfolding %}')).toEqual(['\ttext\n']);
  });

  it('keeps blockquote markers as part of the content', () => {
    const src = '> {% folding :: t %}\n> 文字\n> {% endfolding %}';
    expect(contents(src)).toEqual(['> 文字\n> ']);
  });

  it('is case-sensitive about the tag name', () => {
    expect(scanFolding('{% Folding :: t %}x{% endFolding %}')).toEqual({
      blocks: [],
      diagnostics: [],
    });
  });

  it('requires a boundary after the tag name', () => {
    expect(scanFolding('{% foldingx :: t %}x{% endfoldingx %}').blocks).toEqual([]);
  });

  it('accepts -%} on both tags', () => {
    expect(contents('{% folding :: t -%}x{% endfolding -%}')).toEqual(['x']);
  });

  it('does not end the tag at %} inside quotes', () => {
    const src = '{% folding :: "a %} b" %}x{% endfolding %}';
    const [block] = scanFolding(src).blocks;
    expect(block.open.params.map((p) => p.map((f) => f.text).join(''))).toEqual(['::', 'a %} b']);
    expect(extractContent(src, block)).toBe('x');
  });

  it('pairs nested blocks by depth', () => {
    const src =
      '{% folding :: outer %}\nA\n{% folding :: inner %}\nB\n{% endfolding %}\nC\n{% endfolding %}';
    const { blocks } = scanFolding(src);
    expect(blocks).toHaveLength(1);
    expect(blocks[0].children).toHaveLength(1);
    expect(extractContent(src, blocks[0].children[0] as FoldingBlock)).toBe('B');
  });

  it('keeps consecutive blocks independent', () => {
    const src = '{% folding :: a %}\n1\n{% endfolding %}\n{% folding :: b %}\n2\n{% endfolding %}';
    expect(contents(src)).toEqual(['1', '2']);
  });

  it('records 1-based lines for the open tag and the content', () => {
    const src = 'x\n\n{% folding :: t %}\nbody\n{% endfolding %}';
    const [block] = scanFolding(src).blocks;
    expect(block.open.line).toBe(3);
    expect(block.contentLine).toBe(4);
  });
});

describe('scanFolding — ignored regions', () => {
  it('ignores fenced code blocks, including inside blockquotes and lists', () => {
    for (const src of [
      '```\n{% folding :: t %}\n{% endfolding %}\n```',
      '~~~~\n{% folding :: t %}\n~~~\n{% endfolding %}\n~~~~',
      '> ```\n> {% folding :: t %}\n> {% endfolding %}\n> ```',
      '- ```md\n  {% folding :: t %}\n  {% endfolding %}\n  ```',
    ]) {
      expect(scanFolding(src)).toEqual({ blocks: [], diagnostics: [] });
    }
  });

  it('ignores inline code spans', () => {
    expect(scanFolding('`{% folding :: t %}` and ``{% endfolding %}``')).toEqual({
      blocks: [],
      diagnostics: [],
    });
  });

  it('does not open a code span at an escaped backtick', () => {
    expect(contents('a \\` b {% folding :: t %}x{% endfolding %} c ` d')).toEqual(['x']);
    expect(contents('a \\\\`{% folding :: t %}x{% endfolding %}` d')).toEqual([]);
  });

  it('keeps code spans from crossing a blank line', () => {
    const src = '`open\n\n{% folding :: t %}x{% endfolding %} `';
    expect(contents(src)).toEqual(['x']);
  });

  it('ignores tags inside HTML comments, to the end of the file when unclosed', () => {
    expect(scanFolding('<!-- {% folding :: t %} -->\n<!-- {% endfolding %}')).toEqual({
      blocks: [],
      diagnostics: [{ line: 2, reason: UNCLOSED_COMMENT }],
    });
  });

  it('treats <!--> and <!---> as complete comments', () => {
    expect(contents('a <!--> b\n{% folding :: t %}x{% endfolding %}')).toEqual(['x']);
    expect(contents('a <!---> b\n{% folding :: t %}x{% endfolding %}')).toEqual(['x']);
    expect(contents('<!-->\n\n{% folding :: t %}x{% endfolding %}')).toEqual(['x']);
  });

  it('still recognises tags inside indented code blocks', () => {
    expect(contents('    {% folding :: t %}x{% endfolding %}')).toEqual(['x']);
  });
});

describe('scanFolding — errors', () => {
  it('reports an unclosed open tag and keeps nested pairs', () => {
    const src = '{% folding :: a %}\n{% folding :: b %}\nB\n{% endfolding %}';
    const { blocks, diagnostics } = scanFolding(src);
    expect(blocks).toHaveLength(1);
    expect(extractContent(src, blocks[0])).toBe('B');
    expect(diagnostics).toEqual([{ line: 1, reason: 'unclosed {% folding %}' }]);
  });

  it('reports an orphan end tag', () => {
    expect(reasons('x\n{% endfolding %}')).toEqual([
      { line: 2, reason: 'orphan {% endfolding %}' },
    ]);
  });

  it('reports an unterminated quote and keeps scanning', () => {
    const src = '{% folding "blue :: t %}\nbody\n{% endfolding %}';
    expect(reasons(src)).toEqual([
      { line: 1, reason: 'unterminated quote in {% folding %}' },
      { line: 3, reason: 'orphan {% endfolding %}' },
    ]);
  });

  it('reports {%- tags as unparseable and excludes them from pairing', () => {
    expect(reasons('{%- folding :: t %}x{% endfolding %}')).toEqual([
      { line: 1, reason: 'unparseable folding tag: "{%-" is not supported' },
      { line: 1, reason: 'orphan {% endfolding %}' },
    ]);
  });

  it('reports end tags with arguments as unparseable', () => {
    expect(reasons('{% folding :: t %}x{% endfolding now %}')).toEqual([
      { line: 1, reason: 'unclosed {% folding %}' },
      { line: 1, reason: 'unparseable folding tag: {% endfolding %} takes no arguments' },
    ]);
  });

  it('reports an open tag without %}', () => {
    expect(reasons('{% folding :: t\nbody')).toEqual([
      { line: 1, reason: 'unparseable folding tag: missing "%}"' },
    ]);
  });

  it('reports an unclosed fence that swallows folding tags', () => {
    const src = 'x\n> ```\n> code\n\n段落\n\n{% folding :: t %}\nbody\n{% endfolding %}';
    expect(scanFolding(src)).toEqual({
      blocks: [],
      diagnostics: [{ line: 2, reason: UNCLOSED_FENCE }],
    });
  });

  it('reports an unclosed HTML comment that swallows folding tags', () => {
    expect(reasons('a <!-- b\n\n{% folding :: t %}x{% endfolding %}')).toEqual([
      { line: 1, reason: UNCLOSED_COMMENT },
    ]);
  });

  it('stays quiet about an unclosed fence or comment without folding tags', () => {
    expect(reasons('```\ncode {% notel %}')).toEqual([]);
    expect(reasons('<!-- note {% youtube x %}')).toEqual([]);
  });
});
