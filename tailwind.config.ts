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
          },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;
