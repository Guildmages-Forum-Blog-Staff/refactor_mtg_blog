import { visit } from 'unist-util-visit';
import type { Root } from 'mdast';

export function remarkScryfall() {
  return (tree: Root) => {
    visit(tree, 'link', (node: any, index: number | undefined, parent: any) => {
      if (index === undefined || !parent) return;
      if (!node.url?.includes('cards.scryfall.io')) return;

      const name = node.children[0]?.type === 'text' ? node.children[0].value : '';
      parent.children[index] = {
        type: 'html',
        value: `<a class="scryfall-card" data-card-image="${node.url}" href="${node.url}" target="_blank" rel="noopener noreferrer">${name}</a>`,
      };
    });
  };
}
