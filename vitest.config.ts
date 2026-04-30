import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      include: ['src/**/*.ts'],
      exclude: ['src/content/**', 'src/pages/**', 'src/layouts/**'],
    },
    server: {
      deps: {
        inline: ['remark', 'remark-stringify', 'unist-util-visit', 'mdast-util-to-markdown'],
      },
    },
  },
});
