import { describe, it, expect } from 'vitest';
import type { Root, Element } from 'hast';
import { rehypeLazyImages } from '../rehype-lazy-images';

const img = (properties: Element['properties'] = {}): Element => ({
  type: 'element',
  tagName: 'img',
  properties,
  children: [],
});

const run = (children: Root['children']) => {
  const tree: Root = { type: 'root', children };
  rehypeLazyImages()(tree);
  return tree;
};

describe('rehypeLazyImages', () => {
  it('adds loading and decoding to images', () => {
    const el = img({ src: '/a.png' });
    run([el]);
    expect(el.properties).toMatchObject({ loading: 'lazy', decoding: 'async' });
  });

  it('keeps explicit loading and decoding values', () => {
    const el = img({ src: '/a.png', alt: 'a > b', loading: 'eager', decoding: 'sync' });
    run([el]);
    expect(el.properties).toMatchObject({ loading: 'eager', decoding: 'sync' });
  });

  it('handles images nested in other elements', () => {
    const el = img({ src: '/a.png' });
    run([{ type: 'element', tagName: 'details', properties: {}, children: [el] }]);
    expect(el.properties.loading).toBe('lazy');
  });
});
