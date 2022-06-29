import { styled } from '@styles/stitches.config';

export const StyledButton = styled('button', {
  height: '40px',
  border: 0,
  borderRadius: '.25rem',

  cursor: 'pointer',
  transition: 'all 0.2s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '500',

  variants: {
    variant: {
      primary: {
        color: '$text-on-brand',
        backgroundColor: '$brand',

        '&:hover': {
          backgroundColor: '$brand-hover',
        },
      },
      secondary: {
        color: '$text-primary',
        backgroundColor: '$surface-secondary',

        '&:hover': {
          backgroundColor: '$surface-secondary-hover',
        },
      },
      outline: {
        backgroundColor: '$surface-primary',
        color: '$brand',
        border: '1px solid $brand',

        '&:hover': {
          backgroundColor: '$brand-hover',
          borderColor: '$brand-hover',
          color: '$text-on-brand',
        },
      },
    },

    size: {
      sm: {
        padding: '1rem',
        fontSize: '$2',
      },
      md: {
        padding: '1.25rem',
        fontSize: '$2',
      },
      lg: {
        padding: '1.5rem',
        fontSize: '$3',
      },
    },
  },
});
