// Color system configuration
export const colors = {
  primary: {
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
  },
  secondary: {
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
};

// Color combination recommendations
export const colorCombos = {
  primary: {
    background: colors.primary.teal.DEFAULT,
    text: '#ffffff', // White text for accessibility
  },
  secondary: {
    background: colors.secondary.ice.DEFAULT,
    text: colors.primary.teal.DEFAULT,
  },
  accent: {
    background: colors.primary.sage.DEFAULT,
    text: '#ffffff',
  },
  subtle: {
    background: colors.secondary.mint.DEFAULT,
    text: colors.primary.teal.dark,
  },
};