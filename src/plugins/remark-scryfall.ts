import { visit } from 'unist-util-visit';
import type { Root, Link } from 'mdast';

export function remarkScryfall() {
  return (tree: Root) => {
    visit(tree, 'link', (node: Link) => {
      if (!node.url?.includes('cards.scryfall.io')) return;

      // Decorate the link in place so its children (and any inline formatting
      // like **bold**) survive into the rendered anchor. remark-rehype keeps
      // the href from node.url and merges these hProperties onto the <a>.
      node.data = {
        ...node.data,
        hProperties: {
          ...node.data?.hProperties,
          className: 'scryfall-card',
          dataCardImage: node.url,
          target: '_blank',
          rel: 'nofollow noopener noreferrer',
        },
      };
    });
  };
}
