import { describe, it, expect } from 'vitest';
import { remark } from 'remark';
import { remarkYoutube } from '../remark-youtube';

const process = (markdown: string) => remark().use(remarkYoutube).process(markdown);

describe('remarkYoutube', () => {
  it('transforms {%youtube ID%} to iframe embed', async () => {
    const input = '{%youtube dQw4w9WgXcQ %}';
    const file = await process(input);
    const html = String(file);
    expect(html).toContain('youtube-embed');
    expect(html).toContain('https://www.youtube.com/embed/dQw4w9WgXcQ');
    expect(html).toContain('<iframe');
  });

  it('handles extra spaces around youtube tag', async () => {
    const input = '{% youtube   abc123XYZ  %}';
    const file = await process(input);
    const html = String(file);
    expect(html).toContain('https://www.youtube.com/embed/abc123XYZ');
  });

  it('leaves non-youtube paragraphs unchanged', async () => {
    const input = 'Just a normal paragraph with some text.';
    const file = await process(input);
    const html = String(file);
    expect(html).not.toContain('youtube-embed');
    expect(html).toContain('Just a normal paragraph');
  });

  it('leaves paragraphs with multiple children unchanged', async () => {
    // Inline emphasis forces remark to split the paragraph into 3 children
    // (text + emphasis + text), so node.children.length !== 1 and the plugin skips it
    const input = '{%youtube abc123 %} and *some* extra text';
    const file = await process(input);
    const html = String(file);
    expect(html).not.toContain('youtube-embed');
  });

  it('output includes allowfullscreen attribute', async () => {
    const input = '{%youtube testVideoId %}';
    const file = await process(input);
    const html = String(file);
    expect(html).toContain('allowfullscreen');
  });

  it('wraps the iframe in a div with aspect-video class', async () => {
    const input = '{%youtube someVideoId %}';
    const file = await process(input);
    const html = String(file);
    expect(html).toContain('aspect-video');
    expect(html).toContain('<div');
  });
});
