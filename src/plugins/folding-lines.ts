/**
 * Finds standalone `{% folding %}` / `{% endfolding %}` tag lines and pairs them.
 *
 * Whether a tag sits in code or HTML is decided by the Markdown parser, not
 * here: callers pass the parse tree of the unchanged document (T0), and a tag
 * is judged by the positions of T0's `code`, `inlineCode` and `html` nodes.
 * The only scan of Markdown structure in this module looks for `<!--` ... `-->`
 * inside text that T0 already parsed as an `html` node.
 */
import type { Root } from 'mdast';
import { visit } from 'unist-util-visit';
import { lexFoldingArgs, type Param } from './folding-args';

export interface TagLine {
  kind: 'open' | 'close';
  /** 1-based line in the document. */
  line: number;
  /** Offset of `{%`. */
  start: number;
  /** Offset just past `%}`. */
  end: number;
  /** Lexed parameters; `[]` for close tags. */
  params: Param[];
}

export interface Diagnostic {
  line: number;
  reason: string;
}

export interface TagLineScan {
  tags: TagLine[];
  diagnostics: Diagnostic[];
}

export interface FoldingPair {
  open: TagLine;
  close: TagLine;
}

export interface Pairing {
  pairs: FoldingPair[];
  diagnostics: Diagnostic[];
}

const RAW_HTML = 'folding tag inside raw HTML; kept as text';
const OWN_LINE = 'folding tag must be on its own line; kept as text';
const DASH = 'unparseable folding tag: "{%-" is not supported';
const END_ARGS = 'unparseable folding tag: {% endfolding %} takes no arguments';
const UNTERMINATED_QUOTE = 'unterminated quote in {% folding %}';
const MISSING_CLOSE = 'unparseable folding tag: missing "%}"';
const UNCLOSED = 'unclosed {% folding %}';
const ORPHAN = 'orphan {% endfolding %}';
const UNCLOSED_COMMENT = 'unclosed HTML comment hides folding tags';

const SPACE = '[ \\t\\u00a0]';
// Factories, so no caller shares a stateful `lastIndex`. A name that ends its
// line still starts a tag, so arguments wrapped onto the next line get a warning.
const tagRe = () =>
  new RegExp(`\\{%(-?)${SPACE}*(folding|endfolding)(?=${SPACE}|-?%\\}|\\r?\\n|$)`, 'g');
const closeTailRe = () => new RegExp(`${SPACE}*-?%\\}`, 'y');
const PREFIX_RE = /^[ \t>]*$/;
// A trailing no-break space (common in pasted text) still ends the line, as
// inside the tag. A leading one is not indentation in CommonMark, so the
// prefix stays without it.
const SUFFIX_RE = /^[ \t\u00a0]*\r?$/;

interface Span {
  start: number;
  end: number;
}

interface Comment extends Span {
  unclosed: boolean;
}

interface HtmlNode extends Span {
  comments: Comment[];
  warned: boolean;
}

/** Cheap check for any folding or endfolding tag, wherever it appears. */
export function hasFoldingTag(doc: string): boolean {
  return tagRe().test(doc);
}

/**
 * Find the valid tag lines of `doc`, in document order, and diagnose every
 * other tag that is not in code or an HTML comment. `tree` must be the parse
 * of `doc` itself. Diagnostics follow tag order; an unclosed-comment
 * diagnostic carries its node's first line, so callers sort them by line.
 */
export function findTagLines(doc: string, tree: Root): TagLineScan {
  const code: Span[] = [];
  const html: HtmlNode[] = [];
  visit(tree, (node) => {
    const start = node.position?.start.offset;
    const end = node.position?.end.offset;
    if (start === undefined || end === undefined) return;
    if (node.type === 'code' || node.type === 'inlineCode') code.push({ start, end });
    else if (node.type === 'html') html.push(htmlNode(doc, start, end));
  });

  const lines = lineLocator(doc);
  const tags: TagLine[] = [];
  const diagnostics: Diagnostic[] = [];
  const re = tagRe();
  for (let match = re.exec(doc); match; match = re.exec(doc)) {
    const start = match.index;
    const { line, lineStart, lineEnd } = lines(start);
    const report = (reason: string) => diagnostics.push({ line, reason });

    if (code.some((span) => within(span, start))) continue;
    const node = html.find((span) => within(span, start));
    if (node) {
      const comment = node.comments.find((span) => within(span, start));
      if (!comment) report(RAW_HTML);
      else if (comment.unclosed && !node.warned) {
        node.warned = true;
        diagnostics.push({ line: lines(node.start).line, reason: UNCLOSED_COMMENT });
      }
      continue;
    }
    const kind = match[2] === 'folding' ? 'open' : 'close';
    const tag = scanTag(doc, kind, start + match[0].length, lineStart, lineEnd);
    // Skip the whole tag before any check: a quoted parameter may hold tag
    // text, which is not a tag of its own.
    re.lastIndex = tag.end;
    if (!PREFIX_RE.test(doc.slice(lineStart, start))) {
      report(OWN_LINE);
      continue;
    }
    if (match[1] === '-') {
      report(DASH);
      continue;
    }
    if (tag.reason) {
      report(tag.reason);
      continue;
    }
    if (!SUFFIX_RE.test(doc.slice(tag.end, lineEnd))) {
      report(OWN_LINE);
      continue;
    }
    tags.push({ kind, line, start, end: tag.end, params: tag.params });
  }
  return { tags, diagnostics };
}

/**
 * Find where a tag ends, from just after its name. An unparseable tag carries
 * the reason; it ends at its first `%}`, or at the end of its line when the
 * line has none or a quote runs to it.
 */
function scanTag(
  doc: string,
  kind: 'open' | 'close',
  afterName: number,
  lineStart: number,
  lineEnd: number,
): { end: number; params: Param[]; reason?: string } {
  if (kind === 'close') {
    const tail = closeTailRe();
    tail.lastIndex = afterName;
    if (tail.exec(doc)) return { end: tail.lastIndex, params: [] };
    const close = doc.indexOf('%}', afterName);
    return close !== -1 && close < lineEnd
      ? { end: close + 2, params: [], reason: END_ARGS }
      : { end: lineEnd, params: [], reason: MISSING_CLOSE };
  }
  // Only this line goes to the lexer, so quotes and `%}` end with it.
  const lexed = lexFoldingArgs(doc.slice(lineStart, lineEnd), afterName - lineStart);
  if (lexed.type === 'Err') {
    const reason = lexed.error === 'unterminated-quote' ? UNTERMINATED_QUOTE : MISSING_CLOSE;
    return { end: lineEnd, params: [], reason };
  }
  return { end: lineStart + lexed.end, params: lexed.params };
}

/**
 * Pair tags by depth. A pair is made when its close tag is reached, so inner
 * pairs come before outer ones.
 */
export function pairTags(tags: TagLine[]): Pairing {
  const pairs: FoldingPair[] = [];
  const diagnostics: Diagnostic[] = [];
  const stack: TagLine[] = [];
  for (const tag of tags) {
    if (tag.kind === 'open') {
      stack.push(tag);
      continue;
    }
    const open = stack.pop();
    if (open) pairs.push({ open, close: tag });
    else diagnostics.push({ line: tag.line, reason: ORPHAN });
  }
  // An orphan only occurs while the stack is empty, so every orphan precedes
  // every leftover open: for tags in document order this is line order.
  for (const open of stack) diagnostics.push({ line: open.line, reason: UNCLOSED });
  return { pairs, diagnostics };
}

/**
 * Comment ranges inside an `html` node. The search for `-->` starts two
 * characters after `<!--`, so `<!-->` is a whole comment; a comment with no
 * `-->` runs to the end of the node.
 */
function htmlNode(doc: string, start: number, end: number): HtmlNode {
  const text = doc.slice(start, end);
  const comments: Comment[] = [];
  for (let open = text.indexOf('<!--'); open !== -1; ) {
    const close = text.indexOf('-->', open + 2);
    if (close === -1) {
      comments.push({ start: start + open, end, unclosed: true });
      break;
    }
    comments.push({ start: start + open, end: start + close + 3, unclosed: false });
    open = text.indexOf('<!--', close + 3);
  }
  return { start, end, comments, warned: false };
}

function within(span: Span, offset: number): boolean {
  return span.start <= offset && offset < span.end;
}

/** Map an offset to its 1-based line and that line's bounds (without `\n`). */
function lineLocator(doc: string) {
  const starts = [0];
  for (let i = doc.indexOf('\n'); i !== -1; i = doc.indexOf('\n', i + 1)) starts.push(i + 1);
  return (offset: number) => {
    let lo = 0;
    let hi = starts.length - 1;
    while (lo < hi) {
      const mid = (lo + hi + 1) >> 1;
      if (starts[mid] <= offset) lo = mid;
      else hi = mid - 1;
    }
    const lineEnd = lo + 1 < starts.length ? starts[lo + 1] - 1 : doc.length;
    return { line: lo + 1, lineStart: starts[lo], lineEnd };
  };
}
