import { describe, it, expect } from 'vitest';
import { remark } from 'remark';
import { remarkScryfall } from '../remark-scryfall';

const process = (markdown: string) =>
  remark().use(remarkScryfall).process(markdown);

describe('remarkScryfall', () => {
  it('transforms scryfall image link to scryfall-card anchor', async () => {
    const input = '[黑蓮花](https://cards.scryfall.io/large/front/a/b/abc123.jpg)';
    const file = await process(input);
    const html = String(file);
    expect(html).toContain('class="scryfall-card"');
    expect(html).toContain('data-card-image="https://cards.scryfall.io/large/front/a/b/abc123.jpg"');
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

  it('sets target="_blank" and rel="noopener noreferrer"', async () => {
    const input = '[テスト](https://cards.scryfall.io/large/front/x/y/xyz.jpg)';
    const file = await process(input);
    const html = String(file);
    expect(html).toContain('target="_blank"');
    expect(html).toContain('rel="noopener noreferrer"');
  });

  it('includes the card URL in the href attribute', async () => {
    const input = '[Card](https://cards.scryfall.io/large/front/c/d/cd456.jpg)';
    const file = await process(input);
    const html = String(file);
    expect(html).toContain('href="https://cards.scryfall.io/large/front/c/d/cd456.jpg"');
  });
});
