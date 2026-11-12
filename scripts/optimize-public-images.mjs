// One-off: convert large post-referenced public/images files to WebP (max 1200px) and rewrite post refs.
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync, statSync, unlinkSync, renameSync } from 'node:fs';
import sharp from 'sharp';

const SKIP = new Set(['avatar', 'bg-lotus', 'logo']);
const files = execSync('find public/images -type f -size +300k', { encoding: 'utf8' })
  .trim()
  .split('\n');
const posts = execSync('find src/content/posts -type f', { encoding: 'utf8' }).trim().split('\n');
const report = [];
for (const f of files) {
  if (/\.gif$/i.test(f) || [...SKIP].some((s) => f.includes(s))) continue;
  const web = f.slice('public'.length);
  const refs = posts.filter((p) => readFileSync(p, 'utf8').includes(web));
  if (!refs.length) {
    report.push(`skip(unreferenced) ${f}`);
    continue;
  }
  const before = statSync(f).size;
  const buf = await sharp(f)
    .rotate()
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 85 })
    .toBuffer();
  if (buf.length > before * 0.7) {
    report.push(`skip(<30%) ${f}`);
    continue;
  }
  const out = f.replace(/\.[^.]+$/, '.webp');
  writeFileSync(out + '.tmp', buf);
  renameSync(out + '.tmp', out);
  if (out !== f) {
    unlinkSync(f);
    const neu = out.slice('public'.length);
    for (const p of refs) writeFileSync(p, readFileSync(p, 'utf8').split(web).join(neu));
  }
  report.push(`ok ${f} ${before} -> ${buf.length}`);
}
console.log(report.join('\n'));
