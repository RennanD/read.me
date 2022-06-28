import { styled } from '@styles/stitches.config';

export const Container = styled('div', {
  minHeight: '100vh',
  backgroundColor: '$surface',
});

export const HomeSection = styled('section', {
  width: '100%',
  height: '100vh',

  backgroundImage: 'url(/images/home-background.png)',
  padding: '0 16px',

  '& > div': {
    display: 'flex',
    maxWidth: '1200px',
    margin: '0 auto',
    marginTop: '9rem',
  },

  '& nav': {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    height: '5rem',
  },
});
