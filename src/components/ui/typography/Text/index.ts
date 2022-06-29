import { styled } from '@styles/stitches.config';

export const Text = styled('p', {
  color: '$text-primary',

  variants: {
    size: {
      xsm: {
        fontSize: '$1',
      },
      sm: {
        fontSize: '$2',
      },
      md: {
        fontSize: '$3',
      },
      lg: {
        fontSize: '$4',
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
