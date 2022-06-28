import { globalCss } from '@stitches/react';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    outline: 0,
    boxSizing: 'border-box',
  },
  body: {
    'font-family': 'Inter, sans-serif',
    '-webkit-font-smoothing': 'antialiased',
  },
  'input,button': {
    fontFamily: 'Inter, sans-serif',
  },
});
