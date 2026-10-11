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
import type { Heading, Paragraph, PhrasingContent, Root, RootContent } from 'mdast';
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
  if (scan.blocks.length === 0) return ctx.parse(doc, ctx.file);

  const marker = pickMarker(doc);
  let replaced = '';
  let last = 0;
  scan.blocks.forEach((block, index) => {
    replaced += doc.slice(last, block.open.start) + marker.open + index + marker.close;
    last = block.closeEnd;
  });
  replaced += doc.slice(last);

  const tree = ctx.parse(replaced, ctx.file);
  placeInFlow(tree, {
    marker,
    blocks: scan.blocks.map((block) => buildFolding(doc, block, ctx)),
    raws: scan.blocks.map((block) => doc.slice(block.open.start, block.closeEnd)),
    onUnsupported: (index) =>
      warn(
        ctx,
        scan.blocks[index].open.line,
        'folding block in unsupported position; kept as text',
      ),
  });
  return tree;
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
    } else if (child.type === 'heading' || child.type === 'table') {
      out.push(child, ...pullBlocksOut(child, env));
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
      for (const part of splitString(child.value, env.marker)) {
        if (typeof part === 'number') pieces.push({ kind: 'block', index: part });
        else if (part) pushNode({ ...child, value: part });
      }
    } else if (INLINE_CONTAINERS.has(child.type) && hasMarker(child, env.marker)) {
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
  return splitString(node.value, env.marker).flatMap((part): Node[] => {
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
    let value = '';
    for (const part of splitString(literal.value, env.marker)) {
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

function hasMarker(node: Node, marker: Marker): boolean {
  const record = node as unknown as Record<string, unknown>;
  for (const field of STRING_FIELDS) {
    const value = record[field];
    if (typeof value === 'string' && value.includes(marker.open)) return true;
  }
  const children = record.children;
  return Array.isArray(children) && children.some((child: Node) => hasMarker(child, marker));
}

function splitString(value: string, marker: Marker): (string | number)[] {
  const re = new RegExp(`${marker.open}(\\d+)${marker.close}`, 'g');
  const parts: (string | number)[] = [];
  let last = 0;
  for (const match of value.matchAll(re)) {
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
 * to body-relative lines when the file is unavailable.
 */
function bodyLineOffset(file: VFile, doc: string): number {
  if (!file.path || !doc) return 0;
  try {
    const source = readFileSync(file.path, 'utf-8');
    const index = source.indexOf(doc);
    return index <= 0 ? 0 : source.slice(0, index).split('\n').length - 1;
  } catch {
    return 0;
  }
}
