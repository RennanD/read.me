import { styled } from '@styles/stitches.config';

export const StyledButton = styled('button', {
  height: '2.5rem',
  border: 0,
  borderRadius: '.25rem',

  cursor: 'pointer',
  transition: 'background-color 0.2s ease',

  '&:hover': {
    backgroundColor: '$surface-secondary-hover',
  },

  variants: {
    variant: {
      primary: {
        color: '$text-on-brand',
        backgroundColor: '$brand',
      },
      secondary: {
        color: '$text-primary',
        backgroundColor: '$surface-secondary',
      },
    },
  },
});
