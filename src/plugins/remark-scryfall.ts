import { visit } from 'unist-util-visit';
import type { Root, Link, Parent } from 'mdast';

export function remarkScryfall() {
  return (tree: Root) => {
    visit(tree, 'link', (node: Link, index: number | undefined, parent: Parent | undefined) => {
      if (index === undefined || !parent) return;
      if (!node.url?.includes('cards.scryfall.io')) return;

      const firstChild = node.children[0];
      const name = firstChild?.type === 'text' ? firstChild.value : '';
      parent.children[index] = {
        type: 'html',
        value: `<a class="scryfall-card" data-card-image="${node.url}" href="${node.url}" target="_blank" rel="nofollow noopener noreferrer">${name}</a>`,
      };
    });
  };
}
