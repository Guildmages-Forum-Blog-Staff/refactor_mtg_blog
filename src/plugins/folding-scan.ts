/**
 * Raw-text scanner for `{% folding %}` / `{% endfolding %}` blocks.
 *
 * Works on the post text before Markdown parsing. Tags inside fenced code
 * blocks, inline code spans and HTML comments are ignored. Blocks pair by
 * depth; unpaired or unparseable tags are reported as diagnostics and stay
 * in the text untouched.
 */

import { lexFoldingArgs, type Param } from './folding-args';

export interface OpenTag {
  start: number;
  end: number;
  line: number;
  params: Param[];
}

export interface FoldingBlock {
  open: OpenTag;
  /** Index of the `{%` of the matching end tag. */
  closeStart: number;
  /** Index just past the matching end tag. */
  closeEnd: number;
  /** Content range, after dropping one leading and one trailing newline. */
  contentStart: number;
  contentEnd: number;
  /** 1-based line of `contentStart`. */
  contentLine: number;
  children: FoldingBlock[];
}

export interface Diagnostic {
  line: number;
  reason: string;
}

export interface ScanResult {
  blocks: FoldingBlock[];
  diagnostics: Diagnostic[];
}

const SPACE = '[ \\t\\n\\r\\u00a0]';
const tagRe = () => new RegExp(`\\{%(-?)${SPACE}*(folding|endfolding)(?=${SPACE}|-?%\\})`, 'y');
const closeTailRe = () => new RegExp(`${SPACE}*-?%\\}`, 'y');
const anyTagRe = () => new RegExp(`\\{%-?${SPACE}*(?:folding|endfolding)(?=${SPACE}|-?%\\})`, 'g');
const FENCE_RE = /^(?:[ \t]*(?:>[ \t]?|[-*+][ \t]+|\d{1,9}[.)][ \t]+))*[ \t]*(`{3,}|~{3,})/;
const UNCLOSED_FENCE =
  'unclosed fenced code block runs to the end of the file; folding tags in it are ignored';
const UNCLOSED_COMMENT =
  'unclosed HTML comment runs to the end of the file; folding tags in it are ignored';

export function scanFolding(src: string): ScanResult {
  const lineOf = lineLocator(src);
  const found: { pos: number; reason: string }[] = [];
  const report = (pos: number, reason: string) => found.push({ pos, reason });
  const top: FoldingBlock[] = [];
  const stack: { open: OpenTag; children: FoldingBlock[] }[] = [];
  const siblings = () => (stack.length > 0 ? stack[stack.length - 1].children : top);

  let fence: { char: string; length: number; start: number; bodyStart: number } | null = null;
  let atLineStart = true;
  let i = 0;
  while (i < src.length) {
    if (atLineStart) {
      const lineEnd = src.indexOf('\n', i) === -1 ? src.length : src.indexOf('\n', i);
      const line = src.slice(i, lineEnd);
      const fenceMatch = FENCE_RE.exec(line);
      const rest = fenceMatch ? line.slice(fenceMatch[0].length) : '';
      if (fence) {
        if (
          fenceMatch &&
          fenceMatch[1][0] === fence.char &&
          fenceMatch[1].length >= fence.length &&
          rest.trim() === ''
        ) {
          fence = null;
        }
        i = lineEnd + 1;
        continue;
      }
      if (fenceMatch && !(fenceMatch[1][0] === '`' && rest.includes('`'))) {
        fence = {
          char: fenceMatch[1][0],
          length: fenceMatch[1].length,
          start: i,
          bodyStart: lineEnd + 1,
        };
        i = lineEnd + 1;
        continue;
      }
      atLineStart = false;
    }

    const ch = src[i];
    if (ch === '\n') {
      atLineStart = true;
      i++;
      continue;
    }
    if (src.startsWith('<!--', i)) {
      // Search from `--` itself: `<!-->` and `<!--->` are complete comments.
      const end = src.indexOf('-->', i + 2);
      if (end === -1) {
        if (holdsFoldingTag(src, i + 4)) report(i, UNCLOSED_COMMENT);
        i = src.length;
      } else {
        i = end + 3;
      }
      continue;
    }
    if (ch === '`') {
      let run = 1;
      while (src[i + run] === '`') run++;
      const close = findClosingBackticks(src, i + run, run);
      i = close === -1 ? i + run : close + run;
      continue;
    }
    if (ch === '{' && src[i + 1] === '%') {
      const re = tagRe();
      re.lastIndex = i;
      const match = re.exec(src);
      if (!match) {
        i += 2;
        continue;
      }
      if (match[1] === '-') {
        report(i, 'unparseable folding tag: "{%-" is not supported');
        i += 2;
        continue;
      }
      const afterName = i + match[0].length;
      if (match[2] === 'endfolding') {
        const tail = closeTailRe();
        tail.lastIndex = afterName;
        const tailMatch = tail.exec(src);
        if (!tailMatch) {
          report(i, 'unparseable folding tag: {% endfolding %} takes no arguments');
          i += 2;
          continue;
        }
        const end = afterName + tailMatch[0].length;
        const frame = stack.pop();
        if (!frame) {
          report(i, 'orphan {% endfolding %}');
          i = end;
          continue;
        }
        siblings().push(makeBlock(src, frame.open, i, end, frame.children, lineOf));
        i = end;
        continue;
      }
      const lexed = lexFoldingArgs(src, afterName);
      if (lexed.type === 'Err') {
        report(
          i,
          lexed.error === 'unterminated-quote'
            ? 'unterminated quote in {% folding %}'
            : 'unparseable folding tag: missing "%}"',
        );
        i += 2;
        continue;
      }
      stack.push({
        open: { start: i, end: lexed.end, line: lineOf(i), params: lexed.params },
        children: [],
      });
      i = lexed.end;
      continue;
    }
    i++;
  }

  // The scanner tracks fences more loosely than Markdown (e.g. it does not end
  // them with their blockquote), so say so when that hides folding tags.
  if (fence && holdsFoldingTag(src, fence.bodyStart)) report(fence.start, UNCLOSED_FENCE);
  while (stack.length > 0) {
    const frame = stack.pop()!;
    report(frame.open.start, 'unclosed {% folding %}');
    siblings().push(...frame.children);
  }
  const diagnostics = found
    .sort((a, b) => a.pos - b.pos)
    .map(({ pos, reason }) => ({ line: lineOf(pos), reason }));
  return { blocks: top, diagnostics };
}

function holdsFoldingTag(src: string, from: number): boolean {
  const re = anyTagRe();
  re.lastIndex = from;
  return re.test(src);
}

/** Content text of a block: the trimmed range with common indentation removed. */
export function extractContent(src: string, block: FoldingBlock): string {
  return dedent(src.slice(block.contentStart, block.contentEnd));
}

function makeBlock(
  src: string,
  open: OpenTag,
  closeStart: number,
  closeEnd: number,
  children: FoldingBlock[],
  lineOf: (pos: number) => number,
): FoldingBlock {
  let contentStart = open.end;
  let contentEnd = closeStart;
  if (src.startsWith('\r\n', contentStart)) contentStart += 2;
  else if (src[contentStart] === '\n') contentStart += 1;
  if (contentEnd - contentStart >= 2 && src.startsWith('\r\n', contentEnd - 2)) contentEnd -= 2;
  else if (contentEnd > contentStart && src[contentEnd - 1] === '\n') contentEnd -= 1;
  return {
    open,
    closeStart,
    closeEnd,
    contentStart,
    contentEnd,
    contentLine: lineOf(contentStart),
    children,
  };
}

function findClosingBackticks(src: string, from: number, run: number): number {
  let j = from;
  while (j < src.length) {
    if (src[j] === '\n') {
      // A code span never crosses a blank line.
      let k = j + 1;
      while (src[k] === ' ' || src[k] === '\t' || src[k] === '\r') k++;
      if (k >= src.length || src[k] === '\n') return -1;
    }
    if (src[j] === '`') {
      let length = 1;
      while (src[j + length] === '`') length++;
      if (length === run) return j;
      j += length;
      continue;
    }
    j++;
  }
  return -1;
}

function dedent(text: string): string {
  const lines = text.split('\n');
  let common: string | null = null;
  for (const line of lines) {
    if (line.trim() === '') continue;
    const indent = /^[ \t]*/.exec(line)![0];
    if (common === null) {
      common = indent;
      continue;
    }
    let k = 0;
    while (k < common.length && k < indent.length && common[k] === indent[k]) k++;
    common = common.slice(0, k);
  }
  const prefix = common ?? '';
  return lines.map((line) => (line.trim() === '' ? '' : line.slice(prefix.length))).join('\n');
}

function lineLocator(src: string): (pos: number) => number {
  const starts = [0];
  for (let k = 0; k < src.length; k++) if (src[k] === '\n') starts.push(k + 1);
  return (pos) => {
    let lo = 0;
    let hi = starts.length - 1;
    while (lo < hi) {
      const mid = (lo + hi + 1) >> 1;
      if (starts[mid] <= pos) lo = mid;
      else hi = mid - 1;
    }
    return lo + 1;
  };
}
