import type { Root, Paragraph, PhrasingContent, RootContent, Text } from 'mdast';
import type { Node, Parent } from 'unist';
import { visit } from 'unist-util-visit';
import { FOLDING_BODY_TYPE } from './folding-node';

const CURLY_L = String.fromCharCode(0x201c);
const CURLY_R = String.fromCharCode(0x201d);
const CURLY_SL = String.fromCharCode(0x2018);
const CURLY_SR = String.fromCharCode(0x2019);

const OPEN_RE =
  /^\{%\s*notel(?:\s+(default|red|blue|green|yellow|purple|orange|cyan))?\s+(.+?)\s*%\}/;
const CLOSE_RE = /\{%\s*endnotel\s*%\}/;
// Nodes whose children are blocks. The last one is a folding block's content
// node (see folding-node.ts).
const FLOW_PARENTS = new Set([
  'root',
  'blockquote',
  'listItem',
  'footnoteDefinition',
  FOLDING_BODY_TYPE,
]);

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function stripQuotes(s: string): string {
  let normalized = s
    .replace(new RegExp(CURLY_L, 'g'), '"')
    .replace(new RegExp(CURLY_R, 'g'), '"')
    .replace(new RegExp(CURLY_SL, 'g'), "'")
    .replace(new RegExp(CURLY_SR, 'g'), "'")
    .trim();
  if (normalized.startsWith('"') && normalized.endsWith('"')) {
    normalized = normalized.slice(1, -1).trim();
  }
  return normalized;
}

// Splits a paragraph's children at the first close tag in a text child. `skip`
// drops that many characters from the first child (the open tag). Returns null
// when there is no close tag.
function splitAtClose(
  nodes: PhrasingContent[],
  skip = 0,
): { before: PhrasingContent[]; after: PhrasingContent[] } | null {
  const items: PhrasingContent[] =
    skip > 0
      ? [{ type: 'text', value: (nodes[0] as Text).value.slice(skip) }, ...nodes.slice(1)]
      : nodes;
  for (let k = 0; k < items.length; k++) {
    const node = items[k];
    if (node.type !== 'text') continue;
    const match = node.value.match(CLOSE_RE);
    if (!match || match.index === undefined) continue;
    const head = node.value.slice(0, match.index);
    const tail = node.value.slice(match.index + match[0].length);
    return {
      before: [...items.slice(0, k), ...(head ? [{ type: 'text', value: head } as Text] : [])],
      after: [...(tail ? [{ type: 'text', value: tail } as Text] : []), ...items.slice(k + 1)],
    };
  }
  return null;
}

// Drops the blank edges (line breaks, whitespace-only text, and the newline
// next to a tag) so text cut out around a tag does not start or end with an
// empty line.
function trimTagEdges(nodes: PhrasingContent[]): PhrasingContent[] {
  const blank = (n: PhrasingContent) =>
    n.type === 'break' || (n.type === 'text' && n.value.trim() === '');
  let start = 0;
  let end = nodes.length;
  while (start < end && blank(nodes[start])) start++;
  while (end > start && blank(nodes[end - 1])) end--;
  const out = nodes.slice(start, end);
  if (out[0]?.type === 'text') {
    out[0] = { type: 'text', value: out[0].value.replace(/^\n/, '') };
  }
  const last = out.length - 1;
  if (out[last]?.type === 'text') {
    out[last] = { type: 'text', value: (out[last] as Text).value.replace(/\n$/, '') };
  }
  return out;
}

const paragraphOf = (children: PhrasingContent[]): RootContent[] =>
  children.length > 0 ? [{ type: 'paragraph', children } as Paragraph] : [];

export function remarkNotel() {
  return (tree: Root) => {
    visit(tree as Node, (node) => {
      if (FLOW_PARENTS.has(node.type)) transformFlow((node as Parent).children as RootContent[]);
    });
  };
}

function transformFlow(children: RootContent[]): void {
  let i = 0;
  while (i < children.length) {
    const node = children[i];
    if (node.type !== 'paragraph') {
      i++;
      continue;
    }

    const para = node as Paragraph;
    if (!para.children.length || para.children[0].type !== 'text') {
      i++;
      continue;
    }

    const firstText = (para.children[0] as Text).value;
    const openMatch = firstText.match(OPEN_RE);
    if (!openMatch) {
      i++;
      continue;
    }

    const color = openMatch[1] ?? 'default';
    const title = escapeHtml(stripQuotes(openMatch[2]));
    const openTagLen = openMatch[0].length;

    const openHtml: RootContent = {
      type: 'html',
      value: `<div class="notel notel-${color}"><div class="notel-title">${title}</div><div class="notel-body">`,
    };
    const closeHtml: RootContent = { type: 'html', value: `</div></div>` };

    // Close tag in the opening paragraph: text after it follows the box.
    const sameParagraph = splitAtClose(para.children, openTagLen);
    if (sameParagraph) {
      const replacements: RootContent[] = [
        openHtml,
        ...paragraphOf(trimTagEdges(sameParagraph.before)),
        closeHtml,
        ...paragraphOf(trimTagEdges(sameParagraph.after)),
      ];
      children.splice(i, 1, ...replacements);
      i += replacements.length;
      continue;
    }

    // Close tag in a subsequent paragraph
    let j = i + 1;
    let closeSplit: ReturnType<typeof splitAtClose> = null;
    while (j < children.length) {
      const candidate = children[j];
      if (candidate.type === 'paragraph') {
        closeSplit = splitAtClose(candidate.children);
        if (closeSplit) break;
      }
      j++;
    }

    if (!closeSplit) {
      i++;
      continue;
    }

    // Preserve content from the opening paragraph after the open tag
    const afterOpenText = firstText.slice(openTagLen).replace(/^\n/, '');
    const openParaChildren: Paragraph['children'] = [];
    if (afterOpenText.trim()) {
      openParaChildren.push({ type: 'text', value: afterOpenText });
    }
    for (let k = 1; k < para.children.length; k++) {
      openParaChildren.push(para.children[k]);
    }
    const openParaExtra: RootContent[] =
      openParaChildren.length > 0
        ? [{ type: 'paragraph', children: openParaChildren } as Paragraph]
        : [];

    // The close paragraph's text before the tag stays in the box; text after
    // it follows the box.
    const replacements: RootContent[] = [
      openHtml,
      ...openParaExtra,
      ...children.slice(i + 1, j),
      ...paragraphOf(trimTagEdges(closeSplit.before)),
      closeHtml,
      ...paragraphOf(trimTagEdges(closeSplit.after)),
    ];
    children.splice(i, j - i + 1, ...replacements);
    i += replacements.length;
  }
}
