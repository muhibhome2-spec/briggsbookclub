/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        serif: [
          'Iowan Old Style',
          'Palatino Linotype',
          'Palatino',
          'Georgia',
          'Times New Roman',
          'serif',
        ],
      },
      colors: {
        /* Cream, taken from the logo lock-up background */
        cream: {
          50: '#fffdf9',
          100: '#fff8ed',
          200: '#faefdd',
          300: '#f0e0c8',
          400: '#e2cdac',
          500: '#cbb188',
        },
        /* Warm neutrals for body copy */
        warm: {
          50: '#faf9f7',
          100: '#f5f3f0',
          200: '#e8e2da',
          300: '#d6cec3',
          400: '#a89c8e',
          500: '#7d7064',
          600: '#5f5348',
          700: '#463b32',
          800: '#2e2620',
          900: '#1c1613',
        },
        /* Brand brown, from the wordmark */
        clay: {
          50: '#f8f1ed',
          100: '#efe0d8',
          200: '#dcc2b5',
          400: '#8a5a49',
          500: '#7a4c3d',
          600: '#653d32',
          700: '#573229',
          800: '#40241d',
          900: '#2c1813',
        },
        /* Brand ochre, from the robe and the harakat */
        ochre: {
          50: '#fdf4e9',
          100: '#f8e3c8',
          200: '#eec894',
          400: '#d98c3c',
          500: '#c87423',
          600: '#be651c',
          /* 700 and 800 carry text on cream at AA or better */
          700: '#9c4f14',
          800: '#7d3d0d',
        },
      },
      lineHeight: {
        relaxed: '1.75',
        loose: '2',
      },
      maxWidth: {
        prose: '65ch',
      },
      spacing: {
        18: '4.5rem',
        88: '22rem',
        112: '28rem',
        128: '32rem',
      },
      transitionTimingFunction: {
        bounce: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
