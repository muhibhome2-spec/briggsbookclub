/** @type {import('tailwindcss').Config} */

// Brand palette. These values are fixed: the Sanctuary design system only
// adds roles on top of them (see `colors` below and docs/design-system.md).
const cream = {
  50: '#fdfcfa',
  100: '#faf8f4',
  200: '#f5f1e8',
  300: '#ebe4d5',
  400: '#ddd2ba',
  500: '#c9b896',
};
const warm = {
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
};
const sage = {
  50: '#f5f7f6',
  100: '#e8ece9',
  500: '#7c9082',
  600: '#5d6f63',
  700: '#4a5850',
};

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Legacy stacks, still used by the Hadiyah, Umrah and Tafsir pages.
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Iowan Old Style', 'Palatino Linotype', 'Palatino', 'Georgia', 'Times New Roman', 'serif'],
        // Sanctuary design system.
        display: ['"Cormorant Garamond"', 'Iowan Old Style', 'Palatino', 'Georgia', 'serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Arial', 'sans-serif'],
        arabic: ['Amiri', '"Geeza Pro"', '"Traditional Arabic"', 'serif'],
      },
      colors: {
        cream,
        warm,
        sage,
        // Roles: same hex values as the palette above, named by job.
        surface: { DEFAULT: cream[50], alt: cream[100], sunk: cream[200] },
        ink: { DEFAULT: warm[900], body: warm[700], muted: warm[600], subtle: warm[500] },
        line: { DEFAULT: warm[200], strong: warm[300] },
        accent: { soft: sage[500], DEFAULT: sage[600], deep: sage[700], tint: sage[100] },
        'on-dark': { DEFAULT: cream[50], body: cream[100], muted: cream[200], subtle: cream[300] },
      },
      fontSize: {
        // Display (Cormorant Garamond). Fluid between phone and desktop.
        'display-2xl': ['clamp(3rem, 5.2vw + 1.2rem, 5.75rem)', { lineHeight: '1', letterSpacing: '-0.015em' }],
        'display-xl': ['clamp(3rem, 2.6vw + 2.1rem, 4.5rem)', { lineHeight: '0.95', letterSpacing: '-0.01em' }],
        'display-lg': ['clamp(2.5rem, 1.9vw + 1.9rem, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        'display-md': ['clamp(2.25rem, 1vw + 1.9rem, 2.75rem)', { lineHeight: '1.05' }],
        'display-sm': ['clamp(1.625rem, 0.6vw + 1.45rem, 2rem)', { lineHeight: '1.15' }],
        'lead-lg': ['clamp(1.625rem, 1.2vw + 1.3rem, 2.25rem)', { lineHeight: '1.3' }],
        lead: ['clamp(1.375rem, 0.6vw + 1.25rem, 1.75rem)', { lineHeight: '1.4' }],
        // Text (Inter).
        'body-lg': ['clamp(1.0625rem, 0.2vw + 1rem, 1.1875rem)', { lineHeight: '1.75' }],
        body: ['1.0625rem', { lineHeight: '1.75' }],
        'body-sm': ['0.9375rem', { lineHeight: '1.6' }],
        caption: ['0.8125rem', { lineHeight: '1.5' }],
        eyebrow: ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.24em' }],
      },
      borderRadius: {
        tile: '1rem',
        panel: '1.5rem',
        card: '2rem',
        arch: '9999px 9999px 1.5rem 1.5rem',
      },
      boxShadow: {
        cta: '0 12px 30px -12px rgba(74, 88, 80, 0.8)',
        'cta-light': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
        lift: '0 40px 80px -40px rgba(28, 25, 23, 0.45)',
        float: '0 20px 40px -12px rgba(28, 25, 23, 0.6)',
        sheet: '0 40px 80px -30px rgba(28, 25, 23, 0.6)',
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
        calm: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
