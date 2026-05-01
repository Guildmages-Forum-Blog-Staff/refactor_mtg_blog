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
  return input.trim().split(/\s+/).filter(Boolean);
}

function parseCardArgs(tokens: string[]): MtgTagArgs {
  const opts: Record<string, string> = {};
  const nameTokens: string[] = [];

  for (const token of tokens) {
    const sep = token.indexOf(':') > 0 ? token.indexOf(':') : token.indexOf('=') > 0 ? token.indexOf('=') : -1;
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
    const sep = token.indexOf(':') > 0 ? token.indexOf(':') : token.indexOf('=') > 0 ? token.indexOf('=') : -1;
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
  return text.replace(TAG_PATTERN, (_match, tag: string, argsStr: string) => {
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
        TAG_PATTERN.lastIndex = 0;
        if (!TAG_PATTERN.test(text)) return;
        TAG_PATTERN.lastIndex = 0;

        parent.children[index] = {
          type: 'html',
          value: replaceTagsInText(text),
        };
      },
    );

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
