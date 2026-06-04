import { describe, it, expect, beforeEach } from 'vitest';
import { remark } from 'remark';
import remarkSmartypants from 'remark-smartypants';
import remarkStringify from 'remark-stringify';
import { remarkMtgTags } from '../remark-mtg-tags';
import { parseNames, resolveCardUrls } from '../remark-mtg-merge';
import { __setCardDataForTests, type Card } from '../mtg-card-cache';
import { tokenize, parseSearchTagArgs } from '../mtg-tag-shared';
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
    remark().use(remarkSmartypants).use(remarkMtgTags).use(remarkStringify).processSync(md),
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

describe('Card #1 — SP//dr, Piloted by Peni (SPM#147, // in name body)', () => {
  const NAME = 'SP//dr, Piloted by Peni';

  it('mtgcard renders single-frame image (not rotated split frame)', () => {
    const html = mtgTagsHtml(`{% mtgcard "${NAME}" %}`);
    expect(html).toContain('class="mtgcard w-full rounded-lg"');
    expect(html).not.toContain('mtgcard-frame--rotated');
    expect(html).toMatch(/src="https:\/\/cards\.scryfall\.io\/.+"/);
  });

  it('mtglink renders tooltip with display name', () => {
    const html = mtgTagsHtml(`{% mtglink "${NAME}" %}`);
    expect(html).toContain('class="tooltip"');
    expect(html).toContain('SP//dr, Piloted by Peni');
  });

  it('mtgmerge parseNames preserves // in name body', () => {
    const names = parseNames(`["${NAME}", "Black Lotus"]`);
    expect(names).toEqual([NAME, 'Black Lotus']);
  });

  it('mtgmerge resolveCardUrls returns image URL for SP//dr from cache', () => {
    const urls = resolveCardUrls([NAME, 'Black Lotus']);
    expect(urls[0]).toMatch(/^https:\/\/cards\.scryfall\.io\//);
    expect(urls[1]).toMatch(/^https:\/\/cards\.scryfall\.io\//);
  });
});

describe('Card #2 — +2 Mace (AFR#1, leading +)', () => {
  const NAME = '+2 Mace';

  it('mtgcard (quoted) renders image', () => {
    const html = mtgTagsHtml(`{% mtgcard "${NAME}" %}`);
    expect(html).toContain('class="mtgcard w-full rounded-lg"');
    expect(html).toMatch(/src="https:\/\/cards\.scryfall\.io\/.+"/);
  });

  it('mtglink (quoted) renders tooltip', () => {
    const html = mtgTagsHtml(`{% mtglink "${NAME}" %}`);
    expect(html).toContain('class="tooltip"');
    expect(html).toContain('+2 Mace');
  });

  it('mtgmerge parses + and resolves URL', () => {
    expect(parseNames(`["${NAME}", "Black Lotus"]`)).toEqual([NAME, 'Black Lotus']);
    expect(resolveCardUrls([NAME])[0]).toMatch(/^https:\/\/cards\.scryfall\.io\//);
  });
});

describe('Card #3 — "Ach! Hans, Run!" (UNH#116, quotes in name)', () => {
  // The cache key uses straight quotes (smartypants does not touch the JSON-
  // encoded fixture). The author's source tag uses backslash-escaped quotes,
  // which the tokenizer treats as literal " chars within the quoted token.
  const NAME = '"Ach! Hans, Run!"';
  const SOURCE = '{% mtgcard "\\"Ach! Hans, Run!\\"" %}';

  it('mtgcard renders image despite quotes-in-name', () => {
    const html = mtgTagsHtml(SOURCE);
    expect(html).toContain('class="mtgcard w-full rounded-lg"');
    expect(html).toMatch(/src="https:\/\/cards\.scryfall\.io\/.+"/);
  });

  it('mtglink renders tooltip with the quoted name as display', () => {
    const html = mtgTagsHtml('{% mtglink "\\"Ach! Hans, Run!\\"" %}');
    expect(html).toContain('class="tooltip"');
    // htmlEscape converts " to &quot; in the display text
    expect(html).toContain('&quot;Ach! Hans, Run!&quot;');
  });

  it('mtgmerge parses literal " inside JSON-encoded name', () => {
    // JSON: ["\"Ach! Hans, Run!\""], inner literal name has surrounding "
    const names = parseNames('["\\"Ach! Hans, Run!\\""]');
    expect(names).toEqual([NAME]);
  });

  it('mtgmerge resolveCardUrls finds card from cache', () => {
    expect(resolveCardUrls([NAME])[0]).toMatch(/^https:\/\/cards\.scryfall\.io\//);
  });
});

describe('Card #4 — _____ (UNH#23, five underscores)', () => {
  const NAME = '_____';

  it('mtgcard renders image (underscores survive markdown)', () => {
    const html = mtgTagsHtml(`{% mtgcard "${NAME}" %}`);
    expect(html).toContain('class="mtgcard w-full rounded-lg"');
    expect(html).toMatch(/src="https:\/\/cards\.scryfall\.io\/.+"/);
  });

  it('mtglink renders tooltip with literal underscores as display', () => {
    const html = mtgTagsHtml(`{% mtglink "${NAME}" %}`);
    expect(html).toContain('class="tooltip"');
    expect(html).toContain('_____');
    // Guard: emphasis tags must not appear
    expect(html).not.toMatch(/<em>|<strong>/);
  });

  it('mtgmerge parseNames + resolveCardUrls round-trip underscores', () => {
    expect(parseNames(`["${NAME}"]`)).toEqual([NAME]);
    expect(resolveCardUrls([NAME])[0]).toMatch(/^https:\/\/cards\.scryfall\.io\//);
  });
});

describe('Card #5 — Who // What // When // Where // Why (UNH#120, split layout)', () => {
  const NAME = 'Who // What // When // Where // Why';

  it('mtgcard wraps in rotated frame and uses Who-face image', () => {
    const html = mtgTagsHtml(`{% mtgcard "${NAME}" %}`);
    expect(html).toContain('mtgcard-frame--rotated');
    expect(html).toContain('mtgcard--rotated');
    expect(html).toMatch(/src="https:\/\/cards\.scryfall\.io\/.+"/);
  });

  it('mtglink renders tooltip wrapping the rotated card image', () => {
    const html = mtgTagsHtml(`{% mtglink "${NAME}" %}`);
    expect(html).toContain('class="tooltip"');
    expect(html).toContain('mtgcard-frame--rotated');
  });

  it('mtgmerge parseNames keeps all four //', () => {
    const names = parseNames(`["${NAME}", "Black Lotus"]`);
    expect(names).toEqual([NAME, 'Black Lotus']);
  });

  it('mtgmerge resolveCardUrls returns first-face image', () => {
    const urls = resolveCardUrls([NAME, 'Black Lotus']);
    expect(urls[0]).toMatch(/^https:\/\/cards\.scryfall\.io\//);
    expect(urls[1]).toMatch(/^https:\/\/cards\.scryfall\.io\//);
  });
});

describe('Card #6 — Question Elemental? (UNH#43, trailing ?)', () => {
  const NAME = 'Question Elemental?';

  it('mtgcard renders image', () => {
    const html = mtgTagsHtml(`{% mtgcard "${NAME}" %}`);
    expect(html).toContain('class="mtgcard w-full rounded-lg"');
  });

  it('mtglink renders tooltip with literal ? in display', () => {
    const html = mtgTagsHtml(`{% mtglink "${NAME}" %}`);
    expect(html).toContain('class="tooltip"');
    expect(html).toContain('Question Elemental?');
  });

  it('mtgmerge parses and resolves', () => {
    expect(parseNames(`["${NAME}"]`)).toEqual([NAME]);
    expect(resolveCardUrls([NAME])[0]).toMatch(/^https:\/\/cards\.scryfall\.io\//);
  });
});

describe('Card #7 — Circle of Protection: Red (9ED#11, colon in name)', () => {
  const NAME = 'Circle of Protection: Red';

  it('mtgcard renders image', () => {
    const html = mtgTagsHtml(`{% mtgcard "${NAME}" %}`);
    expect(html).toContain('class="mtgcard w-full rounded-lg"');
  });

  it('mtglink renders tooltip with colon in display name', () => {
    const html = mtgTagsHtml(`{% mtglink "${NAME}" %}`);
    expect(html).toContain('class="tooltip"');
    expect(html).toContain('Circle of Protection: Red');
  });

  it('mtgmerge parses and resolves', () => {
    expect(parseNames(`["${NAME}"]`)).toEqual([NAME]);
    expect(resolveCardUrls([NAME])[0]).toMatch(/^https:\/\/cards\.scryfall\.io\//);
  });
});

describe("Card #8 — R&D's Secret Lair (UNH#135, & + apostrophe)", () => {
  const NAME = "R&D's Secret Lair";

  it('mtgcard renders image (apostrophe fallback handles smartypants curly)', () => {
    const html = mtgTagsHtml(`{% mtgcard "${NAME}" %}`);
    expect(html).toContain('class="mtgcard w-full rounded-lg"');
    expect(html).toMatch(/src="https:\/\/cards\.scryfall\.io\/.+"/);
  });

  it('mtglink renders tooltip with & escaped in display text', () => {
    const html = mtgTagsHtml(`{% mtglink "${NAME}" %}`);
    expect(html).toContain('class="tooltip"');
    expect(html).toContain('R&amp;D');
  });

  it('mtgmerge parseNames preserves both & and apostrophe', () => {
    expect(parseNames(`["${NAME}"]`)).toEqual([NAME]);
  });

  it('mtgmerge resolveCardUrls finds card despite apostrophe variant', () => {
    // No smartypants here (parseNames + resolveCardUrls are pure); cache key
    // uses straight apostrophe (matches fixture). Should hit.
    expect(resolveCardUrls([NAME])[0]).toMatch(/^https:\/\/cards\.scryfall\.io\//);
  });
});

describe('Card #9 — With Great Power . . . (SPM#24, spaced ellipsis)', () => {
  const NAME = 'With Great Power . . .';

  it('mtgcard renders image despite smartypants ellipsis interaction', () => {
    const html = mtgTagsHtml(`{% mtgcard "${NAME}" %}`);
    expect(html).toContain('class="mtgcard w-full rounded-lg"');
    expect(html).toMatch(/src="https:\/\/cards\.scryfall\.io\/.+"/);
  });

  it('mtglink renders tooltip with spaced dots preserved', () => {
    const html = mtgTagsHtml(`{% mtglink "${NAME}" %}`);
    expect(html).toContain('class="tooltip"');
    expect(html).toContain('With Great Power . . .');
  });

  it('mtgmerge parses and resolves spaced-dot name', () => {
    expect(parseNames(`["${NAME}"]`)).toEqual([NAME]);
    expect(resolveCardUrls([NAME])[0]).toMatch(/^https:\/\/cards\.scryfall\.io\//);
  });
});

describe('Card #10 — Welcome to . . . // Jurassic Park (REX#7, DFC + spaced ellipsis)', () => {
  const NAME = 'Welcome to . . . // Jurassic Park';

  it('mtgcard renders front-face image (DFC, not rotated frame)', () => {
    const html = mtgTagsHtml(`{% mtgcard "${NAME}" %}`);
    expect(html).toContain('class="mtgcard w-full rounded-lg"');
    // DFC is not split, so NOT rotated
    expect(html).not.toContain('mtgcard-frame--rotated');
    expect(html).toMatch(/src="https:\/\/cards\.scryfall\.io\/.+"/);
  });

  it('mtglink renders tooltip with full DFC name', () => {
    const html = mtgTagsHtml(`{% mtglink "${NAME}" %}`);
    expect(html).toContain('class="tooltip"');
    expect(html).toContain('Welcome to . . . // Jurassic Park');
  });

  it('mtgmerge parses DFC name with embedded ellipsis', () => {
    expect(parseNames(`["${NAME}"]`)).toEqual([NAME]);
    expect(resolveCardUrls([NAME])[0]).toMatch(/^https:\/\/cards\.scryfall\.io\//);
  });
});

describe('Parser-unit — edge tokenization', () => {
  it('unquoted "+2 Mace" splits at the space (known limitation, name=+2, edition=Mace)', () => {
    // The author SHOULD quote — `{% mtgcard "+2 Mace" %}`. Without quotes,
    // tokenizer emits ["+2", "Mace"]; "Mace" matches SET_CODE_PATTERN so it
    // becomes edition. Document the failure mode so future authors know.
    const tokens = tokenize('+2 Mace');
    expect(tokens).toEqual(['+2', 'Mace']);
    const args = parseSearchTagArgs(tokens);
    expect(args.name).toBe('+2');
    expect(args.edition).toBe('mace');
  });

  it('quoted "+2 Mace" parses as single name', () => {
    const tokens = tokenize('"+2 Mace"');
    expect(tokens).toEqual(['+2 Mace']);
    expect(parseSearchTagArgs(tokens).name).toBe('+2 Mace');
  });
});
