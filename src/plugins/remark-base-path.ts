import { visit } from 'unist-util-visit';
import type { Root, Image } from 'mdast';

export interface BasePathOptions {
  base?: string;
}

export function remarkBasePath(options: BasePathOptions = {}) {
  const base = (options.base ?? '').replace(/\/$/, '');
  if (!base) return () => {};

  return function transformer(tree: Root) {
    visit(tree, 'image', (node: Image) => {
      if (node.url.startsWith('/') && !node.url.startsWith('//')) {
        node.url = `${base}${node.url}`;
      }
    });
  };
}
