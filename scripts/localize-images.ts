// Copies a post's images from third-party hosts into the self-hosted images
// repo (served at images.guildmagesforum.tw) and rewrites the URLs.
// Body images become 1200px WebP; cover/thumbnail become 1200px JPEG so every
// og:image consumer can read them. GIFs are copied untouched (animation).
// Any failure leaves that one URL as-is and is reported as a warning — a dead
// external host must never block publishing.
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const MAX_WIDTH = 1200;
const MAX_BYTES = 30 * 1024 * 1024;
const FETCH_TIMEOUT_MS = 30_000;
// ponytail: fixed allowlist of hosts we've seen in posts; add a host here when authors start using a new one.
const urlPattern = () =>
  /https?:\/\/(?:i\.meee\.com\.tw|i\.imgur\.com|i\.postimg\.cc|hackmd\.io\/_uploads)\/[^\s)"'<>\]]+/g;

export const WARN_PREFIX = '[images] WARN';

type Kind = 'cover' | 'body';
type FetchLike = (url: string, init?: RequestInit) => Promise<Response>;

export interface LocalizeOptions {
  /** Local clone of the images repo. */
  imagesDir: string;
  /** Public URL of the images repo root, no trailing slash. */
  baseUrl: string;
  /** Folder inside the images repo, e.g. `posts/My-Post`. */
  subdir: string;
  fetchImpl?: FetchLike;
}

export interface CoverFields {
  cover?: string;
  thumbnail?: string;
}

export function isExternalImage(url: string): boolean {
  return new RegExp(`^${urlPattern().source}$`).test(url);
}

async function download(url: string, fetchImpl: FetchLike): Promise<Buffer> {
  const res = await fetchImpl(url, { signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  // Deleted imgur images redirect to a "removed" placeholder that is still a valid PNG.
  if (/\/removed\.(png|jpe?g)$/i.test(new URL(res.url || url).pathname)) {
    throw new Error('image was removed by the host');
  }
  const type = res.headers.get('content-type') ?? '';
  if (!type.startsWith('image/')) throw new Error(`not an image (content-type: ${type || 'none'})`);
  if (Number(res.headers.get('content-length') ?? 0) > MAX_BYTES) throw new Error('too large');
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length > MAX_BYTES) throw new Error('too large');
  return buf;
}

async function convert(buf: Buffer, kind: Kind): Promise<{ data: Buffer; ext: string }> {
  // ~40MP decodes to ~160MB RGBA; the post-bot pod shares a 512Mi limit with the bot itself.
  const img = sharp(buf, { limitInputPixels: 40_000_000 });
  const { format } = await img.metadata();
  if (format === 'gif') return { data: buf, ext: 'gif' };
  const resized = img.rotate().resize({ width: MAX_WIDTH, withoutEnlargement: true });
  return kind === 'cover'
    ? { data: await resized.jpeg({ quality: 80, mozjpeg: true }).toBuffer(), ext: 'jpg' }
    : { data: await resized.webp({ quality: 75 }).toBuffer(), ext: 'webp' };
}

async function store(url: string, kind: Kind, opts: LocalizeOptions): Promise<string> {
  const dir = path.join(opts.imagesDir, opts.subdir);
  const hash = createHash('sha1').update(url).digest('hex').slice(0, 12);
  const stem = kind === 'cover' ? `${hash}-cover` : hash;
  const publicUrl = (file: string) => `${opts.baseUrl}/${opts.subdir}/${file}`;

  // Re-importing the same post must not re-download what is already stored.
  const existing = [`${stem}.${kind === 'cover' ? 'jpg' : 'webp'}`, `${stem}.gif`].find((f) =>
    fs.existsSync(path.join(dir, f)),
  );
  if (existing) return publicUrl(existing);

  const { data, ext } = await convert(await download(url, opts.fetchImpl ?? fetch), kind);
  fs.mkdirSync(dir, { recursive: true });
  const file = `${stem}.${ext}`;
  fs.writeFileSync(path.join(dir, file), data);
  return publicUrl(file);
}

/**
 * Returns the rewritten cover fields and body plus one warning per image that
 * could not be moved. Images are processed one at a time to stay inside the
 * post-bot pod's 512Mi memory limit.
 */
export async function localizeImages<T extends CoverFields>(
  frontmatter: T,
  body: string,
  opts: LocalizeOptions,
): Promise<{ frontmatter: T; body: string; warnings: string[] }> {
  sharp.concurrency(1);
  sharp.cache(false);
  const warnings: string[] = [];
  const done = new Map<string, string>();

  async function move(url: string, kind: Kind): Promise<string> {
    const key = `${kind} ${url}`;
    if (!done.has(key)) {
      try {
        done.set(key, await store(url, kind, opts));
      } catch (err) {
        warnings.push(`${WARN_PREFIX} ${url}: ${err instanceof Error ? err.message : err}`);
        done.set(key, url);
      }
    }
    return done.get(key)!;
  }

  const fm = { ...frontmatter };
  for (const field of ['cover', 'thumbnail'] as const) {
    // Authors sometimes leave a trailing space inside the quotes.
    const url = fm[field]?.trim();
    if (url && isExternalImage(url)) fm[field] = (await move(url, 'cover')) as T[typeof field];
  }

  for (const url of new Set(body.match(urlPattern()) ?? [])) await move(url, 'body');
  const newBody = body.replace(urlPattern(), (url) => done.get(`body ${url}`) ?? url);

  return { frontmatter: fm, body: newBody, warnings };
}
