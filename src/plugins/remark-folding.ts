/**
 * `{% folding [args] %}...{% endfolding %}` — collapsible blocks rendered as
 * native `<details>`.
 *
 * Astro runs custom remark transformers only after Markdown parsing and
 * smartypants, so tags are found by wrapping the processor's parser instead.
 * Only tags on lines of their own count (see folding-lines.ts). Each paired
 * tag is swapped for an HTML comment marker and the whole post is parsed
 * again; the siblings between a pair's two markers become the block's
 * content. The parser alone decides where a block starts and ends: a pair
 * whose markers are not read as sibling HTML blocks is kept as text, with a
 * warning, and the remaining tags are paired and parsed again.
 *
 * Diagnostics go to console.warn as `[folding] <file>:<line> <reason>`;
 * Astro's Markdown processor drops vfile messages.
 */

import { readFileSync } from 'node:fs';
import { relative } from 'node:path';
import type { Heading, Html, Paragraph, Root, RootContent } from 'mdast';
import type { Processor } from 'unified';
import type { Parent } from 'unist';
import { SKIP, visit } from 'unist-util-visit';
import type { VFile } from 'vfile';
import { parseFoldingArgs, type FoldingArgs } from './folding-args';
import { FOLDING_BODY_TYPE } from './folding-node';
import {
  findTagLines,
  hasFoldingTag,
  pairTags,
  type Diagnostic,
  type FoldingPair,
  type TagLine,
} from './folding-lines';

type ParseFn = (doc: string, file: VFile) => Root;

interface Located {
  node: Html;
  parent: Parent;
}

const CROSSES = 'folding block must open and close in the same container; kept as text';
const NOT_A_BLOCK = 'folding tag not read as its own block; kept as text';

// An HTML node under one of these is inline HTML, not a block of its own.
const PHRASING_PARENTS = new Set(['paragraph', 'heading', 'tableCell']);

export function remarkFolding(this: Processor) {
  const original = this.parser as ParseFn | undefined;
  if (!original) throw new Error('[folding] remarkFolding must run after remark-parse');

  this.parser = (doc: string, file: VFile) => {
    if (file.path?.endsWith('.mdx') || !hasFoldingTag(doc)) return original(doc, file);
    const t0 = original(doc, file);
    const scan = findTagLines(doc, t0);
    let live = scan.tags;
    const failed: Diagnostic[] = [];

    // Every round drops at least one pair, so this ends.
    for (;;) {
      const { pairs, diagnostics: pairing } = pairTags(live);
      if (pairs.length === 0) {
        emit(file, doc, [...scan.diagnostics, ...failed, ...pairing]);
        return t0;
      }

      const markers = markerTexts(doc, live, pairs);
      const t1 = original(replaceTags(doc, markers), file);
      const located = locateMarkers(t1, markers);

      const placed: { pair: FoldingPair; open: Located; close: Located }[] = [];
      const dropped = new Set<TagLine>();
      for (const pair of pairs) {
        const open = located.get(pair.open);
        const close = located.get(pair.close);
        if (open && close && open.parent === close.parent) {
          placed.push({ pair, open, close });
          continue;
        }
        const reason = open && close ? CROSSES : NOT_A_BLOCK;
        failed.push({ line: pair.open.line, reason }, { line: pair.close.line, reason });
        dropped.add(pair.open).add(pair.close);
      }
      if (dropped.size > 0) {
        live = live.filter((tag) => !dropped.has(tag));
        continue;
      }

      const argWarnings: Diagnostic[] = [];
      // Inner pairs come first, so an outer block takes in inner blocks whole.
      for (const { pair, open, close } of placed) {
        const args = parseFoldingArgs(pair.open.params);
        for (const reason of args.warnings) argWarnings.push({ line: pair.open.line, reason });
        const siblings = open.parent.children as RootContent[];
        const from = siblings.indexOf(open.node);
        const to = siblings.indexOf(close.node);
        siblings.splice(from, to - from + 1, buildFolding(args, siblings.slice(from + 1, to)));
      }
      emit(file, doc, [...scan.diagnostics, ...failed, ...pairing, ...argWarnings]);
      return t1;
    }
  };
}

/**
 * The marker comment for each paired tag, in document order. Unpaired tags
 * get none and stay as text. The index is the tag's position in `live`.
 */
function markerTexts(doc: string, live: TagLine[], pairs: FoldingPair[]): Map<TagLine, string> {
  const paired = new Set(pairs.flatMap((pair) => [pair.open, pair.close]));
  const id = pickMarkerId(doc);
  const markers = new Map<TagLine, string>();
  live.forEach((tag, index) => {
    if (paired.has(tag)) markers.set(tag, `<!--${id}:${index}-->`);
  });
  return markers;
}

/**
 * Swap each tag for its marker. The rest of the line, including leading
 * whitespace and `>`, stays, and no line breaks are added or removed.
 */
function replaceTags(doc: string, markers: Map<TagLine, string>): string {
  let out = '';
  let last = 0;
  for (const [tag, marker] of markers) {
    out += doc.slice(last, tag.start) + marker;
    last = tag.end;
  }
  return out + doc.slice(last);
}

/** Find each marker that the parser read as an HTML block, with its parent. */
function locateMarkers(tree: Root, markers: Map<TagLine, string>): Map<TagLine, Located> {
  const tags = new Map([...markers].map(([tag, marker]) => [marker, tag]));
  const located = new Map<TagLine, Located>();
  visit(tree, (node, _index, parent) => {
    if (PHRASING_PARENTS.has(node.type)) return SKIP;
    if (node.type !== 'html' || !parent) return;
    const tag = tags.get(node.value.trim());
    if (tag) located.set(tag, { node, parent });
  });
  return located;
}

/** The first of `folding-marker`, `folding-marker-1`, ... not in the post. */
function pickMarkerId(doc: string): string {
  let id = 'folding-marker';
  for (let n = 1; doc.includes(id); n++) id = `folding-marker-${n}`;
  return id;
}

function buildFolding(args: FoldingArgs, children: RootContent[]): RootContent {
  const body = {
    type: FOLDING_BODY_TYPE,
    data: hData('div', { className: ['folding-body'] }),
    children,
  };
  demoteHeadings(body);

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
      body,
    ],
  };
  return folding as unknown as RootContent;
}

/** Turn every heading in a block's content, at any depth, into a paragraph. */
function demoteHeadings(body: Parent): void {
  visit(body as Root, 'heading', (node: Heading, index, parent) => {
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

function hData(hName: string, hProperties: Record<string, unknown>): Paragraph['data'] {
  return { hName, hProperties } as Paragraph['data'];
}

/** Print diagnostics in line order; the sort is stable within a line. */
function emit(file: VFile, doc: string, diagnostics: Diagnostic[]): void {
  if (diagnostics.length === 0) return;
  const where = displayPath(file);
  // Read the post file only when there is something to print.
  const offset = bodyLineOffset(file, doc);
  for (const { line, reason } of [...diagnostics].sort((a, b) => a.line - b.line)) {
    warn(where, offset + line, reason);
  }
}

function displayPath(file: VFile): string {
  if (!file.path) return '<input>';
  const fromRoot = relative(process.cwd(), file.path);
  return fromRoot.startsWith('..') ? file.path : fromRoot;
}

function warn(where: string, fileLine: number, reason: string): void {
  console.warn(`[folding] ${where}:${fileLine} ${reason}`);
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
