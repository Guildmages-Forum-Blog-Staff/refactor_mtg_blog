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

  // `leak` is the substring that would appear if the emphasis marker leaked
  // unparsed. Underscore cases use a name-qualified guard because the anchor
  // legitimately contains `target="_blank"`, so a bare `_` would false-positive.
  it.each([
    ['bold', '[**衝動**]', '<strong>衝動</strong>', '*'],
    ['italic', '[*衝動*]', '<em>衝動</em>', '*'],
    ['bold-italic', '[***衝動***]', '<em><strong>衝動</strong></em>', '*'],
    ['underscore italic', '[_衝動_]', '<em>衝動</em>', '_衝動'],
    ['underscore bold', '[__衝動__]', '<strong>衝動</strong>', '_衝動'],
    ['underscore bold-italic', '[___衝動___]', '<em><strong>衝動</strong></em>', '_衝動'],
  ])(
    'preserves inline %s inside the scryfall-card anchor',
    async (_kind, wrapped, expected, leak) => {
      const input = `${wrapped}(https://cards.scryfall.io/large/front/a/b/abc123.jpg)`;
      const file = await process(input);
      const html = String(file);
      expect(html).toContain('class="scryfall-card"');
      expect(html).toContain(expected);
      expect(html).not.toContain(leak); // no literal emphasis markers leaked
    },
  );
});
