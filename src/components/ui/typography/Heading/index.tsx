import { styled } from '@styles/stitches.config';

export const Heading = styled('h2', {
  color: '$text-primary',

  variants: {
    size: {
      sm: {
        fontSize: '$3',
      },
      md: {
        fontSize: '$4',
      },
      lg: {
        fontSize: '$5',
      },
      xlg: {
        fontSize: '$6',
      },
      '2xlg': {
        fontSize: '$7',
        lineHeight: '59px',
      },
    },
    variant: {
      primary: {
        color: '$text-primary',
      },
      secondary: {
        color: '$text-secondary',
      },
      brand: {
        color: '$brand',
      },
    },
  },
});
