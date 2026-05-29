import { describe, it, expect } from 'vitest';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeExternalLinks from 'rehype-external-links';
import { externalLinksOptions } from '../external-links';

// Mirrors the rehype slice of Astro's markdown pipeline for author-written
// markdown links: by the time user rehype plugins run, a `[text](url)` link is
// already a real hast <a> element, so rehype-external-links can see it.
const run = (md: string) =>
  unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeExternalLinks, externalLinksOptions)
    .use(rehypeStringify)
    .processSync(md)
    .toString();

describe('externalLinksOptions', () => {
  it('adds target=_blank and rel=nofollow noopener noreferrer to external links', () => {
    const html = run('[Google](https://google.com)');
    expect(html).toContain('target="_blank"');
    expect(html).toContain('rel="nofollow noopener noreferrer"');
  });

  it('leaves relative path links untouched', () => {
    const html = run('[about](/about)');
    expect(html).not.toContain('rel=');
    expect(html).not.toContain('target=');
  });

  it('leaves anchor links untouched', () => {
    const html = run('[top](#section)');
    expect(html).not.toContain('rel=');
    expect(html).not.toContain('target=');
  });

  it('leaves self-host (apex) absolute links untouched', () => {
    const html = run('[post](https://guildmagesforum.tw/About-Play-Boosters/)');
    expect(html).toContain('href="https://guildmagesforum.tw/About-Play-Boosters/"');
    expect(html).not.toContain('rel=');
    expect(html).not.toContain('target=');
  });

  it('leaves self-host (www) absolute links untouched', () => {
    const html = run('[post](https://www.guildmagesforum.tw/Round-Process/)');
    expect(html).not.toContain('rel=');
    expect(html).not.toContain('target=');
  });
});
