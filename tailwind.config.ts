import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#AB3B3A',
        background: '#91989F',
        foreground: '#0C0C0C',
        'dark-bg': '#1C1C1C',
        'dark-fg': '#FCFAF2',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:last-of-type::after': { content: 'none' },
            'code:not(pre code)': {
              backgroundColor: '#BDC0BA',
              borderRadius: '0.25rem',
              padding: '0.125rem 0.375rem',
              fontWeight: 'inherit',
              color: '#434343',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;
