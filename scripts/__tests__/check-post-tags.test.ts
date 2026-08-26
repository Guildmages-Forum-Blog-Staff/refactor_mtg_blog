import { describe, it, expect, afterEach } from 'vitest';
import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { checkFile } from '../check-post-tags';
import { __setCardDataForTests } from '../../src/plugins/mtg-card-cache';

const CARD = {
  name: 'Lightning Bolt',
  scryfall_uri: 'https://scryfall.com/lightning-bolt',
  layout: 'normal',
  card_faces: [{ image: 'https://example.com/bolt.jpg' }],
};

afterEach(() => __setCardDataForTests());

function writeTmp(text: string): string {
  const dir = mkdtempSync(join(tmpdir(), 'check-tags-'));
  const file = join(dir, 'post.md');
  writeFileSync(file, text);
  return file;
}

describe('checkFile', () => {
  it('passes when the card is in the cache', () => {
    __setCardDataForTests({ found: { 'search|Lightning Bolt||en': CARD } });
    const file = writeTmp('{% mtgcard "Lightning Bolt" %}');
    expect(checkFile(file)).toEqual([]);
  });

  it('flags a card missing from the cache with the correct line', () => {
    const file = writeTmp('intro\n\n{% mtgcard "Not A Real Card" %}\n');
    const findings = checkFile(file);
    expect(findings).toHaveLength(1);
    expect(findings[0].line).toBe(3);
    expect(findings[0].reason).toBe('missing');
  });

  it('flags a card the cache recorded as not_found on Scryfall', () => {
    __setCardDataForTests({
      not_found: { 'search|Fake Card Name||en': { first_seen: '2026-01-01', sources: [] } },
    });
    const file = writeTmp('{% mtgcard "Fake Card Name" %}');
    const findings = checkFile(file);
    expect(findings[0].reason).toBe('not_found');
  });

  it('resolves mtgpick by edition + collector number', () => {
    __setCardDataForTests({ found: { 'pick|blb|82|en': CARD } });
    const file = writeTmp('{% mtgpick blb 82 %}');
    expect(checkFile(file)).toEqual([]);
  });
});
