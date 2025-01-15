/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          // Primary Colors
          teal: {
            DEFAULT: '#0e525a',
            light: '#166d77',
            dark: '#0a3c42',
          },
          sage: {
            DEFAULT: '#4f993b',
            light: '#5fb348',
            dark: '#3d7a2e',
          },
          sky: {
            DEFAULT: '#9fcfdd',
            light: '#b7dbe6',
            dark: '#88bccb',
          },
          // Secondary Colors
          mint: {
            DEFAULT: '#add1cd',
            light: '#c4e0dd',
            dark: '#96bab6',
          },
          ice: {
            DEFAULT: '#e8f5f9',
            light: '#f4fafc',
            dark: '#d1eaf2',
          },
        },
      },
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #0e525a 0%, #4f993b 100%)',
        'gradient-subtle': 'linear-gradient(135deg, #e8f5f9 0%, #add1cd 100%)',
      },
    },
  },
  plugins: [],
};