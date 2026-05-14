import { describe, it, expect, beforeEach } from 'vitest';
import { remark } from 'remark';
import remarkStringify from 'remark-stringify';
import { remarkMtgTags } from '../remark-mtg-tags';
import { __setCardDataForTests, type Card } from '../mtg-card-cache';

type NotFoundEntry = { first_seen: string; sources: string[] };

function seed(
  found: Record<string, Card>,
  notFound: Record<string, NotFoundEntry> = {},
): void {
  __setCardDataForTests({ found, not_found: notFound });
}

const proc = (md: string) => String(remark().use(remarkMtgTags).use(remarkStringify).processSync(md));

beforeEach(() => {
  __setCardDataForTests();
});

const blackLotus = {
  name: 'Black Lotus',
  scryfall_uri: 'https://scryfall.com/card/lea/233/black-lotus',
  layout: 'normal',
  card_faces: [{ image: 'https://img/black-lotus.jpg' }],
};

describe('remarkMtgTags — mtglink', () => {
  it('renders tooltip link with image on hover', () => {
    seed({ 'search|Black Lotus||en': blackLotus });
    const html = proc('{% mtglink "Black Lotus" %}');
    expect(html).toContain('class="tooltip"');
    expect(html).toContain('href="https://scryfall.com/card/lea/233/black-lotus"');
    expect(html).toContain('>Black Lotus<');
    expect(html).toContain('src="https://img/black-lotus.jpg"');
  });

  it('uses alt= as display text', () => {
    seed({ 'search|Unsubstantiate||en': { ...blackLotus, name: 'Unsubstantiate' } });
    const html = proc('{% mtglink Unsubstantiate alt=取消實質 %}');
    expect(html).toContain('>取消實質<');
  });

  it('renders mtgcard-error on cache miss', () => {
    seed({});
    const html = proc('{% mtglink Foo %}');
    expect(html).toContain('class="mtgcard-error"');
    expect(html).toContain('找不到卡片');
  });

  it('renders not_found hint when negatively cached', () => {
    seed({}, { 'search|Typo||en': { first_seen: '2026-05-13', sources: [] } });
    const html = proc('{% mtglink Typo %}');
    expect(html).toContain('請確認拼字');
  });
});

describe('remarkMtgTags — mtgcard', () => {
  it('renders inline image (no tooltip) on cache hit', () => {
    seed({ 'search|Black Lotus||en': blackLotus });
    const html = proc('{% mtgcard "Black Lotus" %}');
    expect(html).toContain('class="mtgcard');
    expect(html).toContain('src="https://img/black-lotus.jpg"');
    expect(html).not.toContain('class="tooltip"');
  });

  it('wraps split-layout cards in rotated frame', () => {
    seed({
      'search|Fire // Ice||en': {
        name: 'Fire // Ice',
        scryfall_uri: 'https://scryfall.com/x',
        layout: 'split',
        card_faces: [{ image: 'https://img/fire-ice.jpg' }],
      },
    });
    const html = proc('{% mtgcard "Fire // Ice" %}');
    expect(html).toContain('mtgcard-frame--rotated');
    expect(html).toContain('mtgcard--rotated');
  });

  it('tooltip=true switches to tooltip render', () => {
    seed({ 'search|Counterspell||en': { ...blackLotus, name: 'Counterspell' } });
    const html = proc('{% mtgcard Counterspell tooltip=true %}');
    expect(html).toContain('class="tooltip"');
  });

  it('htmlEscapes special chars in card name', () => {
    seed({
      "search|Brothers' Yamazaki||en": {
        name: "Brothers' Yamazaki",
        scryfall_uri: 'https://x',
        layout: 'normal',
        card_faces: [{ image: 'https://img/y.jpg' }],
      },
    });
    const html = proc('{% mtgcard "Brothers\' Yamazaki" %}');
    expect(html).toContain('Brothers&#39; Yamazaki');
  });

  it('normalizes curly double-quotes in tag args', () => {
    seed({ 'search|Black Lotus||en': blackLotus });
    // U+201C, U+201D — smartypants output
    const html = proc('{% mtgcard "Black Lotus" %}');
    expect(html).toContain('src="https://img/black-lotus.jpg"');
  });

  it('parses unquoted name with backslash-escaped space', () => {
    seed({ 'search|Black Lotus||en': blackLotus });
    const html = proc('{% mtgcard Black\\ Lotus %}');
    expect(html).toContain('src="https://img/black-lotus.jpg"');
  });

  it('parses backslash-escaped name plus trailing edition', () => {
    seed({
      'search|Memory Lapse|ema|en': {
        name: 'Memory Lapse',
        scryfall_uri: 'https://x',
        layout: 'normal',
        card_faces: [{ image: 'https://img/ml.jpg' }],
      },
    });
    const html = proc('{% mtgcard Memory\\ Lapse ema %}');
    expect(html).toContain('src="https://img/ml.jpg"');
  });

  it("single-quote wrapping does NOT delimit — author error, renders mtgcard-error", () => {
    seed({ 'search|Black Lotus||en': blackLotus });
    // Tokenizer splits on the inner whitespace; tokens are ["'Black", "Lotus'"].
    // parseSearchTagArgs takes "'Black" as name; "Lotus'" has a non-alphanumeric
    // char so it does not match SET_CODE_PATTERN and is silently dropped.
    const html = proc("{% mtgcard 'Black Lotus' %}");
    expect(html).toContain('mtgcard-error');
    expect(html).not.toContain('src="https://img/black-lotus.jpg"');
  });

  it("single-quote wrapping with backslash space still fails — apostrophes stay literal", () => {
    seed({ 'search|Black Lotus||en': blackLotus });
    // Backslash escape merges into one token, but the leading/trailing `'`
    // remain literal characters in the name. Cache lookup misses.
    const html = proc("{% mtgcard 'Black\\ Lotus' %}");
    expect(html).toContain('mtgcard-error');
    expect(html).not.toContain('src="https://img/black-lotus.jpg"');
  });
});

describe('remarkMtgTags — mtgpick', () => {
  it('renders image with cache name as alt', () => {
    seed({
      'pick|blb|82|en': {
        name: 'Ral, Crackling Wit',
        scryfall_uri: 'https://x',
        layout: 'normal',
        card_faces: [{ image: 'https://img/ral.jpg' }],
      },
    });
    const html = proc('{% mtgpick blb 82 %}');
    expect(html).toContain('src="https://img/ral.jpg"');
    expect(html).toContain('alt="Ral, Crackling Wit"');
  });

  it('renders mtgcard-error with edition+number label on miss', () => {
    seed({});
    const html = proc('{% mtgpick zzz 999 %}');
    expect(html).toContain('mtgcard-error');
    expect(html).toContain('ZZZ #999');
  });
});

describe('remarkMtgTags — language', () => {
  it('cache key includes language', () => {
    seed({
      'search|Counterspell||ja': {
        name: 'Counterspell（日本語）',
        scryfall_uri: 'https://x',
        layout: 'normal',
        card_faces: [{ image: 'https://img/c.jpg' }],
      },
    });
    const html = proc('{% mtglink Counterspell language=ja %}');
    expect(html).toContain('Counterspell（日本語）');
  });
});

describe('remarkMtgTags — non-matching', () => {
  it('leaves regular paragraphs untouched', () => {
    seed({});
    const html = proc('Just a regular paragraph.');
    expect(html).not.toContain('mtgcard-error');
    expect(html).toContain('Just a regular paragraph.');
  });
});

// Smartypants (Astro's default markdown option, on for the prod blog) collapses
// both `...` and `. . .` to U+2026 `…` before this plugin runs. Prebuild scans
// MDX source directly so cache keys use the literal author form. The fallback
// retries on miss with `…` → `. . .` to bridge that asymmetry — mirrors the
// existing CURLY_APOSTROPHE fallback.
describe('remarkMtgTags — ellipsis fallback', () => {
  const ELLIPSIS = String.fromCharCode(0x2026);

  it('finds cached card when smartypants collapsed `. . .` to `…`', () => {
    seed({
      'search|With Great Power . . .||en': {
        name: 'With Great Power . . .',
        scryfall_uri: 'https://scryfall.com/x',
        layout: 'normal',
        card_faces: [{ image: 'https://img/wgp.jpg' }],
      },
    });
    // The post-smartypants AST text uses the U+2026 form; the cache key uses
    // the literal `. . .` form because prebuild scans the MDX source directly.
    // The fallback bridges this asymmetry.
    const html = proc(`{% mtgcard "With Great Power ${ELLIPSIS}" %}`);
    expect(html).toContain('src="https://img/wgp.jpg"');
    expect(html).not.toContain('mtgcard-error');
  });

  it('still renders mtgcard-error when neither key form is cached', () => {
    seed({});
    const html = proc(`{% mtgcard "Never Cached ${ELLIPSIS}" %}`);
    expect(html).toContain('mtgcard-error');
  });
});
