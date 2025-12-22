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
        cream: {
          50: '#fdfcfa',
          100: '#faf8f4',
          200: '#f5f1e8',
          300: '#ebe4d5',
          400: '#ddd2ba',
          500: '#c9b896',
        },
        warm: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
        sage: {
          50: '#f5f7f6',
          100: '#e8ece9',
          500: '#7c9082',
          600: '#5d6f63',
          700: '#4a5850',
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
        'bounce': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
