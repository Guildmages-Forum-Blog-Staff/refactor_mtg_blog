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

const getTagPattern = () => /\{%\s*(mtglink|mtgcard|mtgpick)\s+(.*?)\s*%\}/g;

// U+201C/U+201D = curly double-quotes; U+2018/U+2019 = curly single-quotes
const CURLY_DOUBLE = new RegExp(
  '[' + String.fromCharCode(0x201c) + String.fromCharCode(0x201d) + ']',
  'g',
);
const CURLY_SINGLE = new RegExp(
  '[' + String.fromCharCode(0x2018) + String.fromCharCode(0x2019) + ']',
  'g',
);
// ASCII 34 = double-quote, ASCII 39 = single-quote
const ASCII_DOUBLE = String.fromCharCode(34);
const ASCII_SINGLE = String.fromCharCode(39);

function tokenize(input: string): string[] {
  const normalized = input.replace(CURLY_DOUBLE, ASCII_DOUBLE).replace(CURLY_SINGLE, ASCII_SINGLE);
  const tokens: string[] = [];
  const regex = /"([^"]*)"|'([^']*)'|(\S+)/g;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(normalized)) !== null) {
    tokens.push(match[1] ?? match[2] ?? match[3]);
  }
  return tokens;
}

function parseCardArgs(tokens: string[]): MtgTagArgs {
  const opts: Record<string, string> = {};
  const nameTokens: string[] = [];

  for (const token of tokens) {
    const sep =
      token.indexOf(':') > 0
        ? token.indexOf(':')
        : token.indexOf('=') > 0
          ? token.indexOf('=')
          : -1;
    if (sep > 0) {
      opts[token.slice(0, sep)] = token.slice(sep + 1);
    } else {
      nameTokens.push(token);
    }
  }

  // Last name token is edition if short alphanumeric and not the only name token
  let edition = '';
  const last = nameTokens[nameTokens.length - 1];
  if (nameTokens.length > 1 && last && /^[a-z0-9]{3}$/i.test(last)) {
    edition = last.toLowerCase();
    nameTokens.pop();
  }

  return {
    name: nameTokens.join(' '),
    edition: opts['edition'] ?? edition,
    language: opts['language'] ?? 'en',
    tooltip: opts['tooltip'] === 'true',
    alt: opts['alt'] ?? null,
  };
}

function parsePickArgs(tokens: string[]): MtgTagArgs {
  const opts: Record<string, string> = {};
  for (const token of tokens.slice(2)) {
    const sep =
      token.indexOf(':') > 0
        ? token.indexOf(':')
        : token.indexOf('=') > 0
          ? token.indexOf('=')
          : -1;
    if (sep > 0) opts[token.slice(0, sep)] = token.slice(sep + 1);
  }
  return {
    edition: tokens[0]?.toLowerCase() ?? '',
    collectionNumber: tokens[1] ?? '',
    language: opts['language'] ?? 'en',
    tooltip: opts['tooltip'] === 'true',
    alt: opts['alt'] ?? null,
  };
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
  return text.replace(getTagPattern(), (_match, tag: string, argsStr: string) => {
    const tokens = tokenize(argsStr);
    if (tag === 'mtgpick') {
      const args = parsePickArgs(tokens);
      return renderMtgPick(args.edition ?? '', args.collectionNumber ?? '', args);
    }
    const args = parseCardArgs(tokens);
    if (tag === 'mtglink') return renderMtgLink(args.name ?? '', args);
    return renderMtgCard(args.name ?? '', args);
  });
}

export function remarkMtgTags() {
  return (tree: Root) => {
    // Handle solo-paragraph tags (block level)
    visit(
      tree,
      'paragraph',
      (node: Paragraph, index: number | undefined, parent: Parent | undefined) => {
        if (index === undefined || !parent) return;
        if (node.children.length !== 1 || node.children[0].type !== 'text') return;

        const firstChild = node.children[0] as Text;
        const text = firstChild.value.trim();
        if (!getTagPattern().test(text)) return;

        parent.children[index] = {
          type: 'html',
          value: replaceTagsInText(text),
        };
      },
    );

    // Handle inline tags inside mixed-content paragraphs
    visit(tree, 'text', (node: Text, index: number | undefined, parent: Parent | undefined) => {
      if (index === undefined || !parent) return;
      if (!getTagPattern().test(node.value)) return;

      parent.children[index] = {
        type: 'html',
        value: replaceTagsInText(node.value),
      };
    });
  };
}
