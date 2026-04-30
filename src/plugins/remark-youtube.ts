import { visit } from 'unist-util-visit';
import type { Root } from 'mdast';

export function remarkYoutube() {
  return (tree: Root) => {
    visit(tree, 'paragraph', (node: any, index: number | undefined, parent: any) => {
      if (index === undefined || !parent) return;
      if (node.children.length !== 1 || node.children[0].type !== 'text') return;

      const text = (node.children[0].value as string).trim();
      const match = text.match(/\{%\s*youtube\s+([A-Za-z0-9_-]+)\s*%\}/);
      if (!match) return;

      const videoId = match[1];
      parent.children[index] = {
        type: 'html',
        value: `<div class="youtube-embed aspect-video my-6"><iframe class="w-full h-full" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`,
      };
    });
  };
}
