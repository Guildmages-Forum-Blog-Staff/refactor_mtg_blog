import { describe, it, expect, beforeAll } from 'vitest';
import { execFileSync, spawnSync } from 'node:child_process';
import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';

// The post-bot runs these bundles with plain `node` to skip tsx's cold start on the Pi.
const ROOT = path.resolve(__dirname, '..', '..');
const DIST = path.join(ROOT, '.scripts-dist');

function runBundle(name: string, ...args: string[]) {
  return spawnSync('node', [path.join(DIST, `${name}.mjs`), ...args], {
    cwd: ROOT,
    encoding: 'utf8',
  });
}

describe('build:scripts bundles', () => {
  let post: string;

  beforeAll(() => {
    execFileSync('npm', ['run', 'build:scripts'], { cwd: ROOT, stdio: 'pipe' });
    post = path.join(mkdtempSync(path.join(tmpdir(), 'build-scripts-test-')), 'post.md');
    writeFileSync(post, '---\ntitle: t\n---\nno card tags here\n');
  }, 60_000);

  it('check-post-tags does not also run the bundled build-card-cache CLI', () => {
    const res = runBundle('check-post-tags', post);
    expect(res.status).toBe(0);
    expect(res.stdout).not.toContain('[build-card-cache]');
  });

  it('lint-mtg-tags resolves repo paths from the bundle location', () => {
    const res = runBundle('lint-mtg-tags', post);
    expect(res.status).toBe(0);
  });

  it('create-post runs its CLI and prints usage without args', () => {
    const res = runBundle('create-post');
    expect(res.stderr + res.stdout).toContain('Usage:');
  });
});
