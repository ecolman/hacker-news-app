import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'selector',
  theme: {
    fontSize: {
      xxs: '10px',
    },

    extend: {
      colors: {
        orange: 'rgb(var(--orange-color-rgb))',

        'light-bg': 'rgb(var(--light-background-rgb))',
        'light-text': 'rgba(var(--light-text-rgba))',

        'dark-bg': 'rgb(var(--dark-background-rgb))',
        'dark-text': 'rgba(var(--dark-text-rgba))',
      },
    },
  },
  plugins: [],
};
export default config;
