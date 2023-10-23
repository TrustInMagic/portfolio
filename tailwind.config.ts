import type { Config } from 'tailwindcss';
const themeSwapper = require('tailwindcss-theme-swapper');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      'max-1250': { max: '1250px' },
      'max-1000': { max: '1000px' },
      'max-850': { max: '850px' },
      'max-650': { max: '650px' },
      'max-500': { max: '500px' },
      'max-410': { max: '410px' },
      'max-350': { max: '350px' },
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
            themeButton: '#FFFFFF',
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
            borders: '#e5e7eb',
          },
        },
        {
          name: 'dark',
          selectors: ['.dark'],
          fillings: '#0064ff',
          fillingsDark: '#1d4ed8',
          theme: {
            themeButton: '#141414',
            background: {
              light: '#1d1d1f',
              dark: '#000000',
            },
            text: {
              light: '#b1b1b1',
              dark: '#FFFFFF',
            },
            borders: '#1f2937',
          },
        },
      ],
    }),
  ],
};
export default config;
