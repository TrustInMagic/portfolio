import type { Config } from 'tailwindcss';
const themeSwapper = require('tailwindcss-theme-swapper');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    themeSwapper({
      themes: [
        // The only required theme is `base`. Every property used in
        // other themes must exist in here.
        {
          name: 'base',
          selectors: [':root'],
          theme: {
            fillings: '#0064ff',
            fillingsDark: '#1d4ed8',
            background: {
              light: '#FFFFFF',
              dark: '#f5f5f7',
            },
            text: {
              light: '#535355',
              dark: '#1d1d1f',
            },
          },
        },
        {
          name: 'dark',
          selectors: ['.dark'],
          fillings: '#0064ff',
          fillingsDark: '#1d4ed8',
          theme: {
            background: {
              light: '#1d1d1f',
              dark: '#000000',
            },
            text: {
              light: '#FFFFFF',
              dark: '#cfcfcf',
            },
          },
        },
      ],
    }),
  ],
};
export default config;
