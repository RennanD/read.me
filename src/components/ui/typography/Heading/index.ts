import { styled } from '@styles/stitches.config';

export const Heading = styled('h2', {
  color: '$text-primary',

  variants: {
    size: {
      sm: {
        fontSize: '$4',
      },
      md: {
        fontSize: '$5',
      },
      lg: {
        fontSize: '$7',
      },
      xlg: {
        fontSize: '$8',
      },
      '2xlg': {
        fontSize: '$9',
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
