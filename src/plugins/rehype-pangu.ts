import { visit } from 'unist-util-visit';
import pangu from 'pangu';
import type { Root, Text } from 'hast';

export function rehypePangu() {
  return (tree: Root) => {
    visit(tree, 'text', (node: Text) => {
      node.value = pangu.spacingText(node.value);
    });
  };
}
