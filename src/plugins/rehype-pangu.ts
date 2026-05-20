import { visit, SKIP } from 'unist-util-visit';
import pangu from 'pangu';
import type { Root, Element, Text } from 'hast';

const SKIP_TAGS = new Set(['pre', 'code', 'script', 'style', 'kbd', 'samp']);

export function rehypePangu() {
  return (tree: Root) => {
    visit(tree, (node) => {
      if (
        node.type === 'element' &&
        SKIP_TAGS.has((node as Element).tagName)
      ) {
        return SKIP;
      }
      if (node.type === 'text') {
        (node as Text).value = pangu.spacingText((node as Text).value);
      }
    });
  };
}
