/**
 * `{% folding [args] %}...{% endfolding %}` — collapsible blocks rendered as
 * native `<details>`.
 *
 * Astro runs custom remark transformers only after Markdown parsing and
 * smartypants, so tags are found by wrapping the processor's parser instead:
 * blocks are cut out of the raw text and replaced with private-use
 * placeholders, the rest is parsed by the original parser, and each
 * placeholder is then swapped for a block node. Block content is parsed
 * recursively as an independent document, so every later remark/rehype
 * plugin sees it. The transformer only re-applies notel to block bodies,
 * because notel scans root children only.
 *
 * Diagnostics go to console.warn as `[folding] <file>:<line> <reason>`;
 * Astro's Markdown processor drops vfile messages.
 */

import { readFileSync } from 'node:fs';
import { relative } from 'node:path';
import type { Heading, Paragraph, PhrasingContent, Root, RootContent, Table } from 'mdast';
import type { Processor } from 'unified';
import type { Node, Parent } from 'unist';
import { visit } from 'unist-util-visit';
import type { VFile } from 'vfile';
import { parseFoldingArgs } from './folding-args';
import { extractContent, scanFolding, type FoldingBlock } from './folding-scan';
import { remarkNotel } from './remark-notel';

type ParseFn = (doc: string, file: VFile) => Root;

interface Ctx {
  parse: ParseFn;
  file: VFile;
  where: string;
  lineOffset: number;
  /** Raw link and footnote definitions from enclosing documents. */
  defs: string;
}

interface Marker {
  open: string;
  close: string;
}

interface Placement {
  marker: Marker;
  blocks: RootContent[];
  raws: string[];
  onUnsupported: (index: number) => void;
}

type Piece = { kind: 'nodes'; nodes: PhrasingContent[] } | { kind: 'block'; index: number };

const FLOW_CONTAINERS = new Set(['blockquote', 'list', 'listItem', 'footnoteDefinition']);
const INLINE_CONTAINERS = new Set(['emphasis', 'strong', 'delete', 'link', 'linkReference']);
const STRING_FIELDS = ['value', 'url', 'alt', 'title'] as const;

export function remarkFolding(this: Processor) {
  const original = this.parser as ParseFn | undefined;
  if (!original) throw new Error('[folding] remarkFolding must run after remark-parse');

  this.parser = (doc: string, file: VFile) => {
    if (file.path?.endsWith('.mdx')) return original(doc, file);
    const ctx: Ctx = {
      parse: original,
      file,
      where: displayPath(file),
      lineOffset: bodyLineOffset(file, doc),
      defs: '',
    };
    return parseDocument(doc, ctx, true);
  };

  const notel = remarkNotel();
  return (tree: Root) => {
    visit(tree as Node, (node) => {
      if (node.type !== 'foldingBody') return;
      const body = node as Parent;
      const root = { type: 'root', children: body.children } as Root;
      notel(root);
      body.children = root.children;
    });
  };
}

function parseDocument(doc: string, ctx: Ctx, reportScan: boolean): Root {
  const scan = scanFolding(doc);
  if (reportScan) for (const d of scan.diagnostics) warn(ctx, d.line, d.reason);
  if (scan.blocks.length === 0) return parseWithDefs(doc, ctx);

  const marker = pickMarker(doc + ctx.defs);
  let replaced = '';
  let last = 0;
  scan.blocks.forEach((block, index) => {
    // Keep the tag's own `{` and `}` around the placeholder: the parser decides
    // whether `*`, `_` and `~` next to a block open or close by looking at
    // these neighbours, and private-use characters count as neither
    // punctuation nor whitespace.
    replaced += `${doc.slice(last, block.open.start)}{${marker.open}${index}${marker.close}}`;
    last = block.closeEnd;
  });
  replaced += doc.slice(last);

  const tree = parseWithDefs(replaced, ctx);
  const inner = { ...ctx, defs: [ctx.defs, ...collectDefs(tree, replaced, marker)].join('\n\n') };
  const blocks = scan.blocks.map((block) => buildFolding(doc, block, inner));
  const unsupported = new Set<number>();
  placeInFlow(tree, {
    marker,
    blocks,
    raws: scan.blocks.map((block) => doc.slice(block.open.start, block.closeEnd)),
    onUnsupported: (index) => {
      // One placeholder can sit in several fields (an autolink's url and text).
      if (unsupported.has(index)) return;
      unsupported.add(index);
      warn(
        ctx,
        scan.blocks[index].open.line,
        'folding block in unsupported position; kept as text',
      );
    },
  });
  return tree;
}

/**
 * Block content is parsed as its own document, so references inside it only
 * resolve when the enclosing definitions are parsed along with it. The copies
 * are dropped again; the enclosing tree keeps the real definitions.
 */
function parseWithDefs(doc: string, ctx: Ctx): Root {
  if (!ctx.defs) return ctx.parse(doc, ctx.file);
  const tree = ctx.parse(`${doc}\n\n${ctx.defs}`, ctx.file);
  const start = (node: Node) => node.position?.start.offset ?? 0;
  const end = (node: Node) => node.position?.end.offset ?? 0;
  // An unclosed fence or HTML block at the end would swallow the definitions.
  if (tree.children.some((node) => start(node) < doc.length && end(node) > doc.length)) {
    return ctx.parse(doc, ctx.file);
  }
  tree.children = tree.children.filter((node) => start(node) < doc.length);
  return tree;
}

function collectDefs(tree: Root, source: string, marker: Marker): string[] {
  const defs: string[] = [];
  visit(tree, (node) => {
    if (node.type !== 'definition' && node.type !== 'footnoteDefinition') return;
    const raw = source.slice(node.position?.start.offset, node.position?.end.offset);
    // A definition that holds a block placeholder would leak it into the copy.
    if (raw && !raw.includes(marker.open)) defs.push(raw);
  });
  return defs;
}

function buildFolding(doc: string, block: FoldingBlock, ctx: Ctx): RootContent {
  const args = parseFoldingArgs(block.open.params);
  for (const warning of args.warnings) warn(ctx, block.open.line, warning);

  const inner = parseDocument(
    extractContent(doc, block),
    { ...ctx, lineOffset: ctx.lineOffset + block.contentLine - 1 },
    false,
  );
  demoteHeadings(inner);

  const folding = {
    type: 'folding',
    data: hData('details', {
      className: ['folding', `folding-${args.color}`],
      ...(args.open ? { open: true } : {}),
    }),
    children: [
      // One raw node for the whole <summary>: hast-util-raw drops a raw node
      // that holds only plain text, which is exactly what most titles are.
      { type: 'html', value: `<summary class="folding-title">${args.title}</summary>` },
      {
        type: 'foldingBody',
        data: hData('div', { className: ['folding-body'] }),
        children: inner.children,
      },
    ],
  };
  return folding as unknown as RootContent;
}

function demoteHeadings(tree: Root): void {
  visit(tree, 'heading', (node: Heading, index, parent) => {
    if (!parent || index === undefined) return;
    const paragraph: Paragraph = {
      type: 'paragraph',
      children: node.children,
      data: hData('p', {
        className: ['folding-heading', `folding-heading-${node.depth}`],
        role: 'heading',
        ariaLevel: node.depth,
      }),
    };
    (parent.children as RootContent[])[index] = paragraph;
  });
}

function placeInFlow(parent: Parent, env: Placement): void {
  const out: Node[] = [];
  for (const child of parent.children) {
    if (!hasMarker(child, env.marker)) {
      out.push(child);
      continue;
    }
    if (child.type === 'paragraph') {
      out.push(...splitParagraph(child as Paragraph, env));
    } else if (child.type === 'html') {
      out.push(...splitHtml(child as RootContent & { value: string }, env));
    } else if (child.type === 'heading') {
      const blocks = pullBlocksOut(child, env);
      // A heading that held nothing but blocks (e.g. a block line read as
      // setext text) would leave an empty <hN> and an empty TOC entry.
      const heading = child as Heading;
      if (!isEmptied(heading.children)) {
        out.push(child, ...blocks);
      } else if (heading.depth === 2 && isSetext(heading)) {
        // A `---` written under a block line was read as its setext underline;
        // it was meant as a thematic break.
        out.push(...blocks, { type: 'thematicBreak' } as Node);
      } else {
        out.push(...blocks);
      }
    } else if (child.type === 'table') {
      const table = child as Table;
      const held = new Set(table.children.filter((row) => hasMarker(row, env.marker)));
      const blocks = pullBlocksOut(table, env);
      // Same for body rows that held nothing but blocks; the header row stays.
      table.children = table.children.filter(
        (row, i) =>
          i === 0 || !held.has(row) || !row.children.every((cell) => isEmptied(cell.children)),
      );
      out.push(table, ...blocks);
    } else if (FLOW_CONTAINERS.has(child.type)) {
      placeInFlow(child as Parent, env);
      out.push(child);
    } else {
      restoreRaw(child, env);
      out.push(child);
    }
  }
  parent.children = out;
}

function splitParagraph(paragraph: Paragraph, env: Placement): Node[] {
  const pieces = splitPhrasing(paragraph.children, env);
  const out: Node[] = [];
  pieces.forEach((piece, i) => {
    if (piece.kind === 'block') {
      out.push(env.blocks[piece.index]);
      return;
    }
    if (pieces[i - 1]?.kind === 'block') trimEdge(piece.nodes, 'start');
    if (pieces[i + 1]?.kind === 'block') trimEdge(piece.nodes, 'end');
    if (piece.nodes.length === 0) return;
    const part: Paragraph = { ...paragraph, children: piece.nodes };
    out.push(part);
  });
  return out;
}

function splitPhrasing(children: PhrasingContent[], env: Placement): Piece[] {
  const pieces: Piece[] = [];
  const pushNode = (node: PhrasingContent) => {
    const last = pieces[pieces.length - 1];
    if (last?.kind === 'nodes') last.nodes.push(node);
    else pieces.push({ kind: 'nodes', nodes: [node] });
  };
  for (const child of children) {
    if ((child.type === 'text' || child.type === 'html') && hasMarker(child, env.marker)) {
      const parts =
        child.type === 'html'
          ? splitHtmlValue(child.value, env)
          : splitString(child.value, env.marker);
      for (const part of parts) {
        if (typeof part === 'number') pieces.push({ kind: 'block', index: part });
        else if (part) pushNode({ ...child, value: part });
      }
    } else if (INLINE_CONTAINERS.has(child.type) && hasMarker(child, env.marker)) {
      const url = (child as { url?: unknown }).url;
      if (typeof url === 'string' && url.includes(env.marker.open)) {
        // An autolink that swallowed a placeholder: its text is the same
        // placeholder, so the whole link goes back to the original text.
        restoreRaw(child, env);
        pushNode(child);
        continue;
      }
      restoreFields(child, env);
      const container = child as PhrasingContent & { children: PhrasingContent[] };
      for (const sub of splitPhrasing(container.children, env)) {
        if (sub.kind === 'block') pieces.push(sub);
        else pushNode({ ...container, children: sub.nodes } as PhrasingContent);
      }
    } else {
      if (hasMarker(child, env.marker)) restoreRaw(child, env);
      pushNode(child);
    }
  }
  return pieces;
}

function splitHtml(node: RootContent & { value: string }, env: Placement): Node[] {
  return splitHtmlValue(node.value, env).flatMap((part): Node[] => {
    if (typeof part === 'number') return [env.blocks[part]];
    return part ? [{ ...node, value: part } as unknown as Node] : [];
  });
}

/** Remove placeholders from a heading or table and return their blocks in order. */
function pullBlocksOut(node: Node, env: Placement): Node[] {
  const found: Node[] = [];
  visit(node, (child) => {
    if (child.type !== 'text' && child.type !== 'html') {
      restoreFields(child, env);
      return;
    }
    const literal = child as Node & { value: string };
    const parts =
      child.type === 'html'
        ? splitHtmlValue(literal.value, env)
        : splitString(literal.value, env.marker);
    let value = '';
    for (const part of parts) {
      if (typeof part === 'number') {
        found.push(env.blocks[part]);
        continue;
      }
      // Collapse the whitespace that surrounded the removed block.
      value += /\s$/.test(value) ? part.replace(/^\s+/, '') : part;
    }
    literal.value = value;
  });
  visit(node, (child) => {
    if (child.type !== 'heading' && child.type !== 'tableCell') return;
    const phrasing = (child as Parent).children as PhrasingContent[];
    trimEdge(phrasing, 'start');
    trimEdge(phrasing, 'end');
  });
  return found;
}

function restoreRaw(node: Node, env: Placement): void {
  visit(node, (child) => restoreFields(child, env));
}

function restoreFields(node: Node, env: Placement): void {
  const record = node as unknown as Record<string, unknown>;
  for (const field of STRING_FIELDS) {
    const value = record[field];
    if (typeof value !== 'string' || !value.includes(env.marker.open)) continue;
    record[field] = splitString(value, env.marker)
      .map((part) => {
        if (typeof part === 'string') return part;
        env.onUnsupported(part);
        return env.raws[part];
      })
      .join('');
  }
}

function trimEdge(nodes: PhrasingContent[], side: 'start' | 'end'): void {
  while (nodes.length > 0) {
    const index = side === 'start' ? 0 : nodes.length - 1;
    const node = nodes[index];
    if (node.type === 'break') {
      nodes.splice(index, 1);
      continue;
    }
    if (node.type === 'text') {
      node.value =
        side === 'start' ? node.value.replace(/^\s+/, '') : node.value.replace(/\s+$/, '');
      if (node.value) return;
      nodes.splice(index, 1);
      continue;
    }
    if ('children' in node && INLINE_CONTAINERS.has(node.type)) {
      trimEdge(node.children as PhrasingContent[], side);
      if (node.children.length > 0) return;
      nodes.splice(index, 1);
      continue;
    }
    return;
  }
}

/** True when only empty literals are left, e.g. after pulling blocks out. */
function isEmptied(nodes: PhrasingContent[]): boolean {
  return nodes.every((node) => (node.type === 'text' || node.type === 'html') && node.value === '');
}

/** ATX headings are one line; setext headings span text plus underline. */
function isSetext(heading: Heading): boolean {
  const { start, end } = heading.position ?? {};
  return start !== undefined && end !== undefined && end.line > start.line;
}

function hasMarker(node: Node, marker: Marker): boolean {
  const record = node as unknown as Record<string, unknown>;
  for (const field of STRING_FIELDS) {
    const value = record[field];
    if (typeof value === 'string' && value.includes(marker.open)) return true;
  }
  const children = record.children;
  return Array.isArray(children) && children.some((child: Node) => hasMarker(child, marker));
}

/**
 * Like splitString, but a placeholder inside an HTML tag (an attribute value)
 * cannot hold a block: it goes back to its original text, with a warning.
 */
function splitHtmlValue(value: string, env: Placement): (string | number)[] {
  const parts: (string | number)[] = [''];
  let last = 0;
  for (const match of value.matchAll(placeholderRe(env.marker))) {
    const index = Number(match[1]);
    const before = value.slice(last, match.index);
    last = match.index + match[0].length;
    // ponytail: ignores `<` and `>` inside quoted attribute values.
    if (value.lastIndexOf('<', match.index) > value.lastIndexOf('>', match.index)) {
      env.onUnsupported(index);
      parts[parts.length - 1] += before + env.raws[index];
    } else {
      parts[parts.length - 1] += before;
      parts.push(index, '');
    }
  }
  parts[parts.length - 1] += value.slice(last);
  return parts;
}

function placeholderRe(marker: Marker): RegExp {
  return new RegExp(`\\{${marker.open}(\\d+)${marker.close}\\}`, 'g');
}

function splitString(value: string, marker: Marker): (string | number)[] {
  const parts: (string | number)[] = [];
  let last = 0;
  for (const match of value.matchAll(placeholderRe(marker))) {
    parts.push(value.slice(last, match.index));
    parts.push(Number(match[1]));
    last = match.index + match[0].length;
  }
  parts.push(value.slice(last));
  return parts;
}

function pickMarker(doc: string): Marker {
  for (let cp = 0xe000; cp < 0xf8ff; cp += 2) {
    const open = String.fromCharCode(cp);
    const close = String.fromCharCode(cp + 1);
    if (!doc.includes(open) && !doc.includes(close)) return { open, close };
  }
  throw new Error('[folding] no free private-use marker characters');
}

function hData(hName: string, hProperties: Record<string, unknown>): Paragraph['data'] {
  return { hName, hProperties } as Paragraph['data'];
}

function displayPath(file: VFile): string {
  if (!file.path) return '<input>';
  const fromRoot = relative(process.cwd(), file.path);
  return fromRoot.startsWith('..') ? file.path : fromRoot;
}

function warn(ctx: Ctx, line: number, reason: string): void {
  console.warn(`[folding] ${ctx.where}:${ctx.lineOffset + line} ${reason}`);
}

/**
 * Astro strips front matter and trims the body before rendering, so body line
 * 1 is not file line 1. Re-read the source to recover the offset; fall back
 * to body-relative lines when the file is unavailable. The body is the tail
 * of the file, so search from the end: front matter may repeat its text.
 */
function bodyLineOffset(file: VFile, doc: string): number {
  if (!file.path || !doc) return 0;
  try {
    const source = readFileSync(file.path, 'utf-8');
    const index = source.lastIndexOf(doc);
    return index <= 0 ? 0 : source.slice(0, index).split('\n').length - 1;
  } catch {
    return 0;
  }
}
