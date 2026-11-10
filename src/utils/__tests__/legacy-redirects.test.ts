import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, expect, test } from 'vitest';
import { getAuthorTagRedirects } from '../legacy-redirects';

describe('getAuthorTagRedirects', () => {
  let dir: string;

  afterEach(() => rmSync(dir, { recursive: true, force: true }));

  test('maps mixed-case ids under both cases and lowercase ids once', () => {
    dir = mkdtempSync(join(tmpdir(), 'authors-'));
    writeFileSync(join(dir, 'ClarkShih.yml'), '');
    writeFileSync(join(dir, 'faintmama.yml'), '');
    mkdirSync(join(dir, 'docs'));

    expect(getAuthorTagRedirects(dir)).toEqual({
      '/tags/ClarkShih': '/authors/ClarkShih/',
      '/tags/clarkshih': '/authors/ClarkShih/',
      '/tags/faintmama': '/authors/faintmama/',
    });
  });
});
