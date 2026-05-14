import { describe, it, expect, beforeEach } from 'vitest';
import { remark } from 'remark';
import remarkSmartypants from 'remark-smartypants';
import remarkStringify from 'remark-stringify';
import { remarkMtgTags } from '../remark-mtg-tags';
import {
  parseNames,
  resolveCardUrls,
} from '../remark-mtg-merge';
import { __setCardDataForTests, type Card } from '../mtg-card-cache';
// Vite (vitest's loader) resolves JSON imports natively — no import attribute needed.
import fixture from './__fixtures__/edge-card-names.cache.json';

/**
 * Edge-case card name audit. Each card is tested at three layers:
 *   - mtgcard:  full markdown pipeline (remark + smartypants + remarkMtgTags)
 *   - mtglink:  same pipeline, different tag
 *   - mtgmerge: parseNames + resolveCardUrls (deterministic layers only —
 *               the full plugin fetches images, which we keep out of tests)
 *
 * Assertions describe the CORRECT rendered output, so failures are the
 * bug-list deliverable. Do NOT fix plugin code in this file.
 *
 * Preflight findings (smartypants behavior, verified 2026-05-14):
 *   - "..."  -> "…" (U+2026)
 *   - ". . ." (spaced) ALSO collapses to "…" — same single codepoint
 *   - Adjacent straight double-quotes ("") survive untouched — smartypants
 *     bails on the pair; backslash-escaped \" in source drops the \\ and
 *     keeps a literal " character
 *   - Curly apostrophe (’ / U+2019) survives round-trip intact
 *   - Underscores survive at AST level; remark-stringify escapes them as
 *     \\_ in re-serialized source (does NOT affect HTML output)
 *   - Outer " around a tag arg gets converted to curly “ ” — the plugin's
 *     CURLY_DOUBLE normalization handles this
 */

function mtgTagsHtml(md: string): string {
  return String(
    remark()
      .use(remarkSmartypants)
      .use(remarkMtgTags)
      .use(remarkStringify)
      .processSync(md),
  );
}

const found = fixture.found as Record<string, Card>;

beforeEach(() => {
  __setCardDataForTests({ found, not_found: {} });
});

describe('edge-card-names — fixture sanity', () => {
  it('fixture has 11 cards (10 edge + Black Lotus helper)', () => {
    expect(Object.keys(found)).toHaveLength(11);
  });

  it('fixture seeds via __setCardDataForTests without conversion', () => {
    // beforeEach already seeded — pipeline should find Black Lotus.
    const html = mtgTagsHtml('{% mtgcard "Black Lotus" %}');
    expect(html).toContain('Black Lotus');
  });
});
