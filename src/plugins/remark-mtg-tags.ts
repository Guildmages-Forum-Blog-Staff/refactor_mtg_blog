import { visit } from 'unist-util-visit';
import type { Root, Paragraph, Text, Parent } from 'mdast';

interface MtgTagArgs {
  name?: string;
  edition: string;
  language: string;
  tooltip: boolean;
  alt: string | null;
  collectionNumber?: string;
}

const TAG_PATTERN = /\{%\s*(mtglink|mtgcard|mtgpick)\s+(.*?)\s*%\}/g;

function tokenize(input: string): string[] {
  const tokens: string[] = [];
  const regex = /\"([^\"]*)\"|'([^']*)'|(\S+)/g;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(input)) !== null) {
    tokens.push(match[1] ?? match[2] ?? match[3]);
  }
  return tokens;
}

function parseArgs(tokens: string[]): MtgTagArgs {
  const args: MtgTagArgs = { edition: '', language: 'en', tooltip: false, alt: null };
  tokens.forEach((token, i) => {
    if (i === 0) return; // handled by caller
    const colonIdx = token.indexOf(':');
    const eqIdx = token.indexOf('=');
    const sepIdx = colonIdx !== -1 ? colonIdx : eqIdx;
    if (sepIdx !== -1) {
      const key = token.slice(0, sepIdx);
      const val = token.slice(sepIdx + 1);
      if (key === 'tooltip') args.tooltip = val === 'true';
      else if (key === 'language') args.language = val;
      else if (key === 'alt') args.alt = decodeURIComponent(val);
    } else if (i === 1 && token.length <= 5 && /^[a-z0-9]+$/i.test(token)) {
      args.edition = token.toLowerCase();
    }
  });
  return args;
}

function renderMtgLink(name: string, args: MtgTagArgs): string {
  const display = args.alt ?? name;
  const attrs = [
    `class="mtg-link scryfall-card"`,
    `data-card-name="${name}"`,
    args.edition ? `data-edition="${args.edition}"` : '',
    `data-language="${args.language}"`,
  ]
    .filter(Boolean)
    .join(' ');
  return `<a ${attrs}>${display}</a>`;
}

function renderMtgCard(name: string, args: MtgTagArgs): string {
  if (args.tooltip) return renderMtgLink(name, args);
  const attrs = [
    `class="mtg-card-img"`,
    `data-card-name="${name}"`,
    args.edition ? `data-edition="${args.edition}"` : '',
    `data-language="${args.language}"`,
  ]
    .filter(Boolean)
    .join(' ');
  return `<span ${attrs}></span>`;
}

function renderMtgPick(edition: string, number: string, args: MtgTagArgs): string {
  if (args.tooltip) {
    const display = args.alt ?? '';
    const attrs = [
      `class="mtg-link scryfall-card"`,
      `data-edition="${edition}"`,
      `data-number="${number}"`,
      `data-language="${args.language}"`,
    ].join(' ');
    return `<a ${attrs}>${display}</a>`;
  }
  const attrs = [
    `class="mtg-card-pick"`,
    `data-edition="${edition}"`,
    `data-number="${number}"`,
    `data-language="${args.language}"`,
  ].join(' ');
  return `<span ${attrs}></span>`;
}

function replaceTagsInText(text: string): string {
  return text.replace(TAG_PATTERN, (_match, tag: string, argsStr: string) => {
    const tokens = tokenize(argsStr);
    if (tag === 'mtgpick') {
      const edition = tokens[0]?.toLowerCase() ?? '';
      const number = tokens[1] ?? '';
      const args = parseArgs(tokens);
      return renderMtgPick(edition, number, args);
    }
    const name = tokens[0] ?? '';
    const args = parseArgs(tokens);
    if (tag === 'mtglink') return renderMtgLink(name, args);
    return renderMtgCard(name, args);
  });
}

export function remarkMtgTags() {
  return (tree: Root) => {
    // Handle solo-paragraph tags (block level)
    visit(tree, 'paragraph', (node: Paragraph, index: number | undefined, parent: Parent | undefined) => {
      if (index === undefined || !parent) return;
      if (node.children.length !== 1 || node.children[0].type !== 'text') return;

      const firstChild = node.children[0] as Text;
      const text = firstChild.value.trim();
      TAG_PATTERN.lastIndex = 0;
      if (!TAG_PATTERN.test(text)) return;
      TAG_PATTERN.lastIndex = 0;

      parent.children[index] = {
        type: 'html',
        value: replaceTagsInText(text),
      };
    });

    // Handle inline tags inside mixed-content paragraphs
    visit(tree, 'text', (node: Text, index: number | undefined, parent: Parent | undefined) => {
      if (index === undefined || !parent) return;
      TAG_PATTERN.lastIndex = 0;
      if (!TAG_PATTERN.test(node.value)) return;
      TAG_PATTERN.lastIndex = 0;

      parent.children[index] = {
        type: 'html',
        value: replaceTagsInText(node.value),
      };
    });
  };
}
