import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { afterAll, beforeAll, describe, expect, it, vi, type MockInstance } from 'vitest';
import { __setCardDataForTests } from '../mtg-card-cache';
import { renderLikeAstro, type Rendered } from './astro-pipeline';

// Runs the real posts that use folding through the Astro-order pipeline.
// Card lookups all miss (empty cache) in both renders, so they cancel out.

const POSTS_DIR = join(process.cwd(), 'src/content/posts');
const TAG_LINE = /^\{% (?:folding .*|endfolding) %\}$/;

interface Post {
  name: string;
  path: string;
  body: string;
}

// Same shape Astro hands the Markdown processor: front matter removed, trimmed.
function loadPost(name: string): Post {
  const path = join(POSTS_DIR, name);
  const source = readFileSync(path, 'utf-8');
  const body = source.replace(/^---\r?\n[\s\S]*?\r?\n---/, '').trim();
  return { name, path, body };
}

// Placeholders are private-use characters and must never reach the output.
const PRIVATE_USE = /[-]/;

const squash = (html: string) => html.replace(/>\n</g, '><');

// Undo the folding wrapper so the content can be compared with a plain render.
function unwrap(html: string): string {
  return squash(html)
    .replace(
      /<details class="folding folding-[a-z]+"( open)?><summary class="folding-title">.*?<\/summary><div class="folding-body">/g,
      '',
    )
    .replace(/<\/div><\/details>/g, '')
    .replace(
      /<p class="folding-heading folding-heading-(\d)" role="heading" aria-level="\d">(.*?)<\/p>/g,
      '<h$1>$2</h$1>',
    );
}

const posts = readdirSync(POSTS_DIR)
  .filter((name) => name.endsWith('.md'))
  .sort()
  .map(loadPost)
  .filter((post) => post.body.includes('{% folding'));

const rendered = new Map<string, { folded: Rendered; plain: Rendered }>();
let warn: MockInstance<typeof console.warn>;

beforeAll(async () => {
  __setCardDataForTests({});
  warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
  for (const post of posts) {
    // Swap tag lines for an empty comment instead of deleting them: deleting
    // would let two lists on either side of a tag merge into one.
    const stripped = post.body
      .split('\n')
      .map((line) => (TAG_LINE.test(line) ? '<!---->' : line))
      .join('\n');
    rendered.set(post.name, {
      folded: await renderLikeAstro(post.body, { path: post.path }),
      plain: await renderLikeAstro(stripped, { path: post.path, folding: false }),
    });
  }
});

afterAll(() => warn.mockRestore());

describe('folding corpus', () => {
  it('covers 23 posts and folds all 37 blocks', () => {
    expect(posts).toHaveLength(23);
    let total = 0;
    for (const { folded } of rendered.values()) {
      total += folded.html.match(/<details class="folding folding-(?:blue|red)">/g)?.length ?? 0;
      expect(folded.html).not.toContain('{% folding');
      expect(folded.html).not.toContain('{% endfolding');
      expect(folded.html).not.toMatch(PRIVATE_USE);
    }
    expect(total).toBe(37);
  });

  it('emits no folding warnings', () => {
    const foldingWarnings = warn.mock.calls
      .map((call) => String(call[0]))
      .filter((message) => message.startsWith('[folding]'));
    expect(foldingWarnings).toEqual([]);
  });

  it.each(posts.map((post) => post.name))('%s: content HTML matches a plain render', (name) => {
    const { folded, plain } = rendered.get(name)!;
    expect(unwrap(folded.html)).toBe(squash(plain.html.replace(/\n*<!---->/g, '')));
  });

  it('takes the 10 folded ### headings in DSK-Draft-Report.md out of the TOC', () => {
    const { folded, plain } = rendered.get('DSK-Draft-Report.md')!;
    expect(folded.html.match(/class="folding-heading folding-heading-3"/g)).toHaveLength(10);
    const removed = plain.headings.filter(
      (heading) => !folded.headings.some((kept) => kept.text === heading.text),
    );
    expect(removed).toHaveLength(10);
    expect(removed.every((heading) => heading.depth === 3)).toBe(true);
    expect(folded.headings).toHaveLength(plain.headings.length - 10);
  });
});
