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

  it('embeds a tag in a paragraph with other inline nodes and keeps them', async () => {
    // Inline emphasis splits the paragraph into text + emphasis + text children
    const input = '{%youtube abc123 %} and *some* extra text';
    const html = String(await process(input));
    expect(html).toContain('youtube-embed');
    expect(html).toContain('and *some* extra text');
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

  it('rewrites pasted YouTube share-embed iframe into responsive embed', async () => {
    const input =
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/Otdgj8fBQxc?si=x29_faesj8l1VKme" title="YouTube video player" frameborder="0" allowfullscreen></iframe>';
    const file = await process(input);
    const html = String(file);
    expect(html).toContain('youtube-embed');
    expect(html).toContain('https://www.youtube.com/embed/Otdgj8fBQxc"');
    expect(html).not.toContain('width="560"');
  });

  it('leaves non-YouTube iframes unchanged', async () => {
    const input = '<iframe src="https://example.com/embed/abc"></iframe>';
    const file = await process(input);
    const html = String(file);
    expect(html).not.toContain('youtube-embed');
    expect(html).toContain(input);
  });

  it('restores "--" in video ID after smartypants turned it into an em dash', async () => {
    const EM_DASH = String.fromCharCode(0x2014);
    const input = `{%youtube 01yY${EM_DASH}aNLao %}`;
    const file = await process(input);
    expect(String(file)).toContain('https://www.youtube.com/embed/01yY--aNLao"');
  });

  it('gives the embed an accessible title and lazy loading', async () => {
    const html = String(await process('{%youtube someVideoId %}'));
    expect(html).toContain('title="YouTube video player"');
    expect(html).toContain('loading="lazy"');
    expect(html).toContain('referrerpolicy="strict-origin-when-cross-origin"');
  });

  it('keeps the privacy-enhanced youtube-nocookie.com host', async () => {
    const input = '<iframe src="https://www.youtube-nocookie.com/embed/abc123"></iframe>';
    const html = String(await process(input));
    expect(html).toContain('youtube-embed');
    expect(html).toContain('src="https://www.youtube-nocookie.com/embed/abc123"');
  });

  it('keeps embed options like start time but drops the si tracking param', async () => {
    const input =
      '<iframe src="https://www.youtube.com/embed/abc123?si=xyz&amp;start=134"></iframe>';
    const html = String(await process(input));
    expect(html).toContain('src="https://www.youtube.com/embed/abc123?start=134"');
  });

  it('accepts single-quoted src and hosts without www.', async () => {
    const html = String(await process("<iframe src='https://youtube.com/embed/abc123'></iframe>"));
    expect(html).toContain('src="https://www.youtube.com/embed/abc123"');
  });

  it('rewrites the iframe even when text follows it without a blank line', async () => {
    const input = '<iframe src="https://www.youtube.com/embed/abc123"></iframe>\ncaption text';
    const html = String(await process(input));
    expect(html).toContain('youtube-embed');
    expect(html).toContain('caption text');
  });

  it('restores "--" in video ID when smartypants used an en dash (oldschool mode)', async () => {
    const EN_DASH = String.fromCharCode(0x2013);
    const html = String(await process(`{%youtube 01yY${EN_DASH}aNLao %}`));
    expect(html).toContain('https://www.youtube.com/embed/01yY--aNLao"');
  });

  it('allows web-share like the YouTube embed code does', async () => {
    const html = String(await process('{%youtube someVideoId %}'));
    expect(html).toContain('picture-in-picture; web-share"');
  });

  it('ignores data-src so lazy-load snippets are left alone', async () => {
    const input =
      '<iframe data-src="https://www.youtube.com/embed/abc123" src="about:blank"></iframe>';
    const html = String(await process(input));
    expect(html).not.toContain('youtube-embed');
    expect(html).toContain(input);
  });

  it('rewrites every YouTube iframe in one HTML block', async () => {
    const input =
      '<iframe src="https://www.youtube.com/embed/first"></iframe>\n<iframe src="https://www.youtube.com/embed/second"></iframe>';
    const html = String(await process(input));
    expect(html.match(/youtube-embed/g)).toHaveLength(2);
    expect(html).toContain('embed/second"');
  });

  it('keeps text around a {% youtube %} tag', async () => {
    const html = String(await process('看這裡 {% youtube abc123 %}\n影片說明'));
    expect(html).toContain('youtube-embed');
    expect(html).toContain('看這裡');
    expect(html).toContain('影片說明');
  });

  it('only restores dashes inside the tag, not in surrounding text', async () => {
    const EM_DASH = String.fromCharCode(0x2014);
    const html = String(await process(`A${EM_DASH}B {% youtube abc123 %}`));
    expect(html).toContain(`A${EM_DASH}B`);
  });

  it('finds the tag after a link in the same paragraph', async () => {
    const html = String(
      await process('[card](https://cards.scryfall.io/large/x.jpg)\n{%youtube pgx9-6fzMu8 %}'),
    );
    expect(html).toContain('embed/pgx9-6fzMu8"');
    expect(html).toContain('[card](https://cards.scryfall.io/large/x.jpg)');
    expect(html).not.toContain('{%youtube');
  });

  it('handles two tags in one paragraph', async () => {
    const html = String(await process('{%youtube first %}\n{%youtube second %}'));
    expect(html.match(/youtube-embed/g)).toHaveLength(2);
  });
});
