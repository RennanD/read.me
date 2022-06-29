import { styled } from '@styles/stitches.config';

export const Container = styled('div', {
  minHeight: '100vh',

  backgroundColor: '$surface',
});

export const HeroImage = styled('img', {
  width: '450px',
  alignSelf: 'center',
  aspectRatio: '9/16',
  borderRadius: '8px',
});

export const HomeSection = styled('section', {
  width: '100%',
  height: '100vh',

  backgroundImage: 'url(/images/home-background.png)',
  backgroundSize: 'cover',
  padding: '0 16px',

  '& > div': {
    display: 'flex',
    maxWidth: '1280px',
    margin: '0 auto',
    // marginTop: '9rem',
    justifyContent: 'space-between',
    gap: '1rem',
  },

  '& nav': {
    width: '100%',
    maxWidth: '1280px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    height: '5rem',
  },
});

export const HeroContent = styled('div', {
  // display: 'flex',
  // flexDirection: 'column',
  // alignItems: 'center',
  // justifyContent: 'center',
  marginTop: '144px',
});
