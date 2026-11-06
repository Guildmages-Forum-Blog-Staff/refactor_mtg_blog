import type { Element, Root as HastRoot, Text } from 'hast';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkSmartypants from 'remark-smartypants';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';
import { VFile } from 'vfile';
import { externalLinksOptions } from '../external-links';
import { rehypePangu } from '../rehype-pangu';
import { remarkBasePath } from '../remark-base-path';
import { remarkFolding } from '../remark-folding';
import { remarkMtgMerge } from '../remark-mtg-merge';
import { remarkMtgTags } from '../remark-mtg-tags';
import { remarkNotel } from '../remark-notel';
import { remarkScryfall } from '../remark-scryfall';
import { remarkYoutube } from '../remark-youtube';

// Mirrors the order in @astrojs/markdown-remark 7.2.0 (the copy Astro 6.4.8
// actually loads): parse -> gfm -> smartypants -> markdown.remarkPlugins ->
// remark-rehype -> markdown.rehypePlugins -> heading collection -> rehype-raw.
// Shiki and Astro's image plugins are left out; they do not touch folding.
// The hoisted @astrojs/markdown-remark is 7.1.1, so it is not imported here.

export interface RenderedHeading {
  depth: number;
  text: string;
}

export interface Rendered {
  html: string;
  headings: RenderedHeading[];
}

const BASE = '/';

// Stand-in for Astro's rehypeHeadingIds: collects h1-h6 elements only, at the
// same position (after user rehype plugins, before rehype-raw).
function collectHeadings() {
  return (tree: HastRoot, file: VFile) => {
    const headings: RenderedHeading[] = [];
    visit(tree, 'element', (node: Element) => {
      const match = /^h([1-6])$/.exec(node.tagName);
      if (!match) return;
      let text = '';
      visit(node, 'text', (child: Text) => {
        text += child.value;
      });
      headings.push({ depth: Number(match[1]), text });
    });
    file.data.headings = headings;
  };
}

export async function renderLikeAstro(
  markdown: string,
  options: { path?: string; folding?: boolean } = {},
): Promise<Rendered> {
  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkSmartypants)
    .use(remarkBasePath, { base: BASE })
    .use(remarkBreaks)
    .use(remarkScryfall)
    .use(remarkYoutube)
    .use(remarkMtgTags)
    .use(remarkMtgMerge, { base: BASE })
    .use(remarkNotel);
  if (options.folding !== false) processor.use(remarkFolding);
  const file = await processor
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypePangu)
    .use(rehypeExternalLinks, externalLinksOptions)
    .use(collectHeadings)
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(new VFile({ value: markdown, path: options.path }));
  return {
    html: String(file.value),
    headings: (file.data.headings as RenderedHeading[] | undefined) ?? [],
  };
}
