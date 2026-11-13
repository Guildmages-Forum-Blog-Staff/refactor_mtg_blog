import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import sharp from 'sharp';
import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { isExternalImage, localizeImages, WARN_PREFIX } from '../localize-images';

const BASE = 'https://images.example';
let png: Buffer;
let dir: string;

beforeAll(async () => {
  png = await sharp({
    create: { width: 2400, height: 1200, channels: 3, background: '#c33' },
  })
    .png()
    .toBuffer();
});
beforeEach(() => {
  dir = fs.mkdtempSync(path.join(os.tmpdir(), 'localize-'));
});
afterEach(() => fs.rmSync(dir, { recursive: true, force: true }));

function respond(body: Buffer | string, type: string, finalUrl = '', status = 200): Response {
  const res = new Response(typeof body === 'string' ? body : new Uint8Array(body), {
    status,
    headers: { 'content-type': type },
  });
  Object.defineProperty(res, 'url', { value: finalUrl });
  return res;
}

const opts = (fetchImpl: (url: string) => Promise<Response>) => ({
  imagesDir: dir,
  baseUrl: BASE,
  subdir: 'posts/Test',
  fetchImpl,
});

describe('isExternalImage', () => {
  it.each([
    'https://i.imgur.com/abc.png',
    'https://i.meee.com.tw/abc.jpg',
    'https://i.postimg.cc/x/abc.png',
    'https://hackmd.io/_uploads/abc.png',
  ])('matches %s', (u) => expect(isExternalImage(u)).toBe(true));

  it.each([
    'https://cards.scryfall.io/a.jpg',
    'https://images.guildmagesforum.tw/a.webp',
    'https://guildmagesforum.tw/images/a.jpg',
    'not a url',
  ])('ignores %s', (u) => expect(isExternalImage(u)).toBe(false));

  it('copies Scryfall art only as a cover', () => {
    expect(isExternalImage('https://cards.scryfall.io/art_crop/a.jpg', 'cover')).toBe(true);
    expect(isExternalImage('https://images.guildmagesforum.tw/a.jpg', 'cover')).toBe(false);
  });
});

describe('localizeImages', () => {
  it('copies a Scryfall cover but keeps Scryfall card art in the body', async () => {
    const fetchImpl = vi.fn(async (_url: string, _init?: RequestInit) =>
      respond(png, 'image/jpeg'),
    );
    const art = 'https://cards.scryfall.io/art_crop/front/a.jpg?1';
    const r = await localizeImages(
      { cover: art, thumbnail: art },
      '![card](https://cards.scryfall.io/large/k.jpg)',
      opts(fetchImpl),
    );

    expect(r.warnings).toEqual([]);
    expect(fetchImpl).toHaveBeenCalledTimes(1);
    expect(fetchImpl.mock.calls[0][1]?.headers).toMatchObject({ Accept: 'image/*' });
    expect(r.frontmatter.cover).toMatch(
      /^https:\/\/images\.example\/posts\/Test\/\w{12}-cover\.jpg$/,
    );
    expect(r.frontmatter.thumbnail).toBe(r.frontmatter.cover);
    expect(r.body).toContain('https://cards.scryfall.io/large/k.jpg');
  });

  it('stores body images as 1200px webp and the cover as jpg, rewriting both', async () => {
    const fetchImpl = vi.fn(async () => respond(png, 'image/png'));
    const body =
      '![](https://i.imgur.com/a.png)\n<img src="https://i.imgur.com/a.png">\nhttps://cards.scryfall.io/x.jpg';
    const r = await localizeImages(
      { title: 't', cover: 'https://i.meee.com.tw/c.png' },
      body,
      opts(fetchImpl),
    );

    expect(r.warnings).toEqual([]);
    expect(fetchImpl).toHaveBeenCalledTimes(2); // duplicate body URL fetched once
    expect(r.frontmatter.cover).toMatch(
      /^https:\/\/images\.example\/posts\/Test\/\w{12}-cover\.jpg$/,
    );
    const bodyUrl = r.body.match(/https:\/\/images\.example\/\S+?\.webp/)![0];
    expect(r.body.split(bodyUrl)).toHaveLength(3);
    expect(r.body).toContain('https://cards.scryfall.io/x.jpg');

    const meta = await sharp(path.join(dir, bodyUrl.slice(BASE.length + 1))).metadata();
    expect(meta).toMatchObject({ format: 'webp', width: 1200 });
  });

  it('moves images from any host in image syntax, but not plain links or card art', async () => {
    const fetchImpl = vi.fn(async () => respond(png, 'image/png'));
    const body = [
      '![a](https://media.wizards.com/x.jpg)',
      '<img alt="b" src="https://cdn.melee.gg/y.png?w=2">',
      '![c](https://meee.com.tw/z.jpg)',
      '[decklist](https://media.wizards.com/page.html)',
      '![card](https://cards.scryfall.io/large/k.jpg)',
    ].join('\n');
    const r = await localizeImages({}, body, opts(fetchImpl));

    expect(r.warnings).toEqual([]);
    expect(fetchImpl).toHaveBeenCalledTimes(3);
    expect(r.body).not.toMatch(/media\.wizards\.com\/x|melee|meee/);
    expect(r.body).toContain('(https://media.wizards.com/page.html)');
    expect(r.body).toContain('https://cards.scryfall.io/large/k.jpg');
  });

  it('does not clip a longer URL that shares a prefix', async () => {
    const r = await localizeImages(
      {},
      '![](https://i.imgur.com/a.png) ![](https://i.imgur.com/a.png?x=1)',
      opts(async () => respond(png, 'image/png')),
    );
    expect(r.body).toMatch(
      /^!\[\]\(https:\/\/images\.example\/\S+\) !\[\]\(https:\/\/images\.example\/\S+\)$/,
    );
    expect(new Set(r.body.match(/\w{12}\.webp/g))).toHaveProperty('size', 2);
  });

  it('accepts an image served as octet-stream but rejects non-image bytes', async () => {
    const ok = await localizeImages(
      {},
      '![](https://cdn.melee.gg/a.png)',
      opts(async () => respond(png, 'application/octet-stream')),
    );
    expect(ok.warnings).toEqual([]);
    const bad = await localizeImages(
      {},
      '![](https://cdn.melee.gg/b.png)',
      opts(async () => respond('<html>', 'binary/octet-stream')),
    );
    expect(bad.warnings).toHaveLength(1);
    expect(bad.body).toBe('![](https://cdn.melee.gg/b.png)');
  });

  it('accepts a cover URL with stray whitespace', async () => {
    const r = await localizeImages(
      { cover: 'https://i.meee.com.tw/c.png ' },
      '',
      opts(async () => respond(png, 'image/png')),
    );
    expect(r.frontmatter.cover).toMatch(/-cover\.jpg$/);
  });

  it('skips the download when the file already exists (re-import)', async () => {
    const fetchImpl = vi.fn(async () => respond(png, 'image/png'));
    const first = await localizeImages({}, '![](https://i.imgur.com/a.png)', opts(fetchImpl));
    const second = await localizeImages({}, '![](https://i.imgur.com/a.png)', opts(fetchImpl));
    expect(fetchImpl).toHaveBeenCalledTimes(1);
    expect(second.body).toBe(first.body);
  });

  it('keeps GIFs byte-for-byte', async () => {
    const gif = await sharp({ create: { width: 4, height: 4, channels: 3, background: '#000' } })
      .gif()
      .toBuffer();
    const r = await localizeImages(
      {},
      '![](https://i.imgur.com/a.gif)',
      opts(async () => respond(gif, 'image/gif')),
    );
    const file = r.body.match(/posts\/Test\/(\w+\.gif)/)![1];
    expect(fs.readFileSync(path.join(dir, 'posts/Test', file)).equals(gif)).toBe(true);
  });

  it.each([
    ['HTTP error', () => respond('', 'text/plain', '', 404), /HTTP 404/],
    ['non-image response', () => respond('<html>', 'text/html'), /not an image/],
    [
      'imgur removed placeholder',
      () => respond(png, 'image/png', 'https://i.imgur.com/removed.png'),
      /removed/,
    ],
    ['network failure', () => Promise.reject(new Error('ECONNRESET')), /ECONNRESET/],
  ])('keeps the original URL and warns on %s', async (_, make, reason) => {
    const url = 'https://i.imgur.com/gone.png';
    const r = await localizeImages(
      { cover: url },
      `![](${url})`,
      opts(async () => make()),
    );
    expect(r.body).toBe(`![](${url})`);
    expect(r.frontmatter.cover).toBe(url);
    expect(r.warnings).toHaveLength(2);
    expect(r.warnings[0]).toMatch(new RegExp(`^\\${WARN_PREFIX} ${url}: `));
    expect(r.warnings[0]).toMatch(reason);
  });
});
