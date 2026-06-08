import { describe, it, expect } from 'vitest';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import { remarkScryfall } from '../remark-scryfall';

// Mirror Astro's chain (parse -> remark plugins -> rehype allowDangerousHtml -> raw -> stringify)
// so assertions run against the final HTML, where hProperties take effect.
const process = (markdown: string) =>
  unified()
    .use(remarkParse)
    .use(remarkScryfall)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(markdown);

describe('remarkScryfall', () => {
  it('transforms scryfall image link to scryfall-card anchor', async () => {
    const input = '[黑蓮花](https://cards.scryfall.io/large/front/a/b/abc123.jpg)';
    const file = await process(input);
    const html = String(file);
    expect(html).toContain('class="scryfall-card"');
    expect(html).toContain(
      'data-card-image="https://cards.scryfall.io/large/front/a/b/abc123.jpg"',
    );
    expect(html).toContain('黑蓮花');
  });

  it('leaves non-scryfall links unchanged', async () => {
    const input = '[Google](https://google.com)';
    const file = await process(input);
    const html = String(file);
    expect(html).not.toContain('scryfall-card');
    expect(html).toContain('https://google.com');
  });

  it('handles link with no text children gracefully (empty name)', async () => {
    const input = '[](https://cards.scryfall.io/large/front/a/b/abc123.jpg)';
    const file = await process(input);
    const html = String(file);
    expect(html).toContain('class="scryfall-card"');
    expect(html).toContain('</a>');
  });

  it('sets target="_blank" and rel="nofollow noopener noreferrer"', async () => {
    const input = '[テスト](https://cards.scryfall.io/large/front/x/y/xyz.jpg)';
    const file = await process(input);
    const html = String(file);
    expect(html).toContain('target="_blank"');
    expect(html).toContain('rel="nofollow noopener noreferrer"');
  });

  it('includes the card URL in the href attribute', async () => {
    const input = '[Card](https://cards.scryfall.io/large/front/c/d/cd456.jpg)';
    const file = await process(input);
    const html = String(file);
    expect(html).toContain('href="https://cards.scryfall.io/large/front/c/d/cd456.jpg"');
  });

  it('preserves inline formatting (bold) inside the scryfall-card anchor', async () => {
    const input = '[**衝動**](https://cards.scryfall.io/large/front/a/b/abc123.jpg)';
    const file = await process(input);
    const html = String(file);
    expect(html).toContain('class="scryfall-card"');
    expect(html).toContain('<strong>衝動</strong>');
  });
});
