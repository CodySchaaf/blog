import facepaint from 'facepaint';

export const theme = {
  palette: {
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
  },
  /** @deprecated */
  colors: {
    /** @deprecated */
    darkText: '#424242',

    lightText: '#424242',
    lightWash: '',
  },
};

export const color = (type) => ({ theme }) => theme.colors[type];

const breakpoints = [576, 768, 992, 1200];

export const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));
