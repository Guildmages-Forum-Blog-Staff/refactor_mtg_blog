import type { Options } from 'rehype-external-links';

// Shared rehype-external-links config: imported by both astro.config.ts (live
// pipeline) and the test, so the attribute contract cannot drift between them.
export const externalLinksOptions: Options = {
  target: '_blank',
  rel: ['nofollow', 'noopener', 'noreferrer'],
};
