import { describe, it, expect } from 'vitest';
import { remark } from 'remark';
import { remarkMtgTags } from '../remark-mtg-tags';

const process = (md: string) => remark().use(remarkMtgTags).process(md);

describe('remarkMtgTags — mtglink', () => {
  it('renders tooltip link with card name', async () => {
    const file = await process('{% mtglink "Unsubstantiate" %}');
    const html = String(file);
    expect(html).toContain('class="mtg-link scryfall-card"');
    expect(html).toContain('data-card-name="Unsubstantiate"');
    expect(html).toContain('>Unsubstantiate<');
  });

  it('uses alt as display text when provided', async () => {
    const file = await process('{% mtglink "Unsubstantiate" alt:取消實質 %}');
    const html = String(file);
    expect(html).toContain('>取消實質<');
  });

  it('sets edition when provided', async () => {
    const file = await process('{% mtglink "Lightning Bolt" lea %}');
    const html = String(file);
    expect(html).toContain('data-edition="lea"');
  });
});

describe('remarkMtgTags — mtgcard', () => {
  it('renders inline image span by default', async () => {
    const file = await process('{% mtgcard "Black Lotus" %}');
    const html = String(file);
    expect(html).toContain('class="mtg-card-img"');
    expect(html).toContain('data-card-name="Black Lotus"');
  });

  it('renders tooltip link when tooltip:true', async () => {
    const file = await process('{% mtgcard "Black Lotus" tooltip:true %}');
    const html = String(file);
    expect(html).toContain('class="mtg-link scryfall-card"');
  });

  it('does not render tooltip when tooltip:false', async () => {
    const file = await process('{% mtgcard "Counterspell" tooltip:false %}');
    const html = String(file);
    expect(html).toContain('class="mtg-card-img"');
    expect(html).not.toContain('mtg-link');
  });
});

describe('remarkMtgTags — mtgpick', () => {
  it('renders inline image span by default', async () => {
    const file = await process('{% mtgpick "blb" "82" %}');
    const html = String(file);
    expect(html).toContain('class="mtg-card-pick"');
    expect(html).toContain('data-edition="blb"');
    expect(html).toContain('data-number="82"');
  });

  it('renders tooltip link when tooltip:true', async () => {
    const file = await process('{% mtgpick "blb" "82" tooltip:true %}');
    const html = String(file);
    expect(html).toContain('class="mtg-link scryfall-card"');
  });
});

describe('remarkMtgTags — language', () => {
  it('defaults language to en', async () => {
    const file = await process('{% mtglink "Counterspell" %}');
    const html = String(file);
    expect(html).toContain('data-language="en"');
  });

  it('sets language when provided', async () => {
    const file = await process('{% mtglink "Counterspell" language:ja %}');
    const html = String(file);
    expect(html).toContain('data-language="ja"');
  });
});

describe('remarkMtgTags — non-matching', () => {
  it('leaves non-mtg paragraphs unchanged', async () => {
    const file = await process('Just a regular paragraph.');
    const html = String(file);
    expect(html).not.toContain('mtg-');
    expect(html).toContain('Just a regular paragraph.');
  });
});
