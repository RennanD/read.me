import { createStitches } from '@stitches/react';

export const { styled, getCssText, css, keyframes } = createStitches({
  theme: {
    fonts: {
      system: 'system-ui',
    },
    colors: {
      'surface-primary': '#fff',
      'surface-secondary': '#f4f4f5',
      'surface-secondary-hover': '#e4e4e7',
      stroke: '#d4d4d8',
      'text-primary': '#27272A',
      'text-secondary': '#27272A',
      'text-on-tooltip': '#f4f4f5',
      brand: '#8257e5',
      'brand-hover': '#996dff',
      'text-on-brand': '#fff',
    },
    fontSizes: {
      1: '12px',
      2: '14px',
      3: '16px',
      4: '20px',
      5: '24px',
      6: '28px',
      7: '32px',
      8: '48px',
      9: '64px',
    },
  },
  utils: {
    mx: (value: number | string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: number | string) => ({
      marginTop: value,
      marginBottom: value,
    }),
    px: (value: number | string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    py: (value: number | string) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
});
