import facepaint from 'facepaint'

export const theme = {
  colors: {
    darkText: '#424242',
    lightWash: '',
  }
}


export const color = (type) => ({theme}) => theme.colors[type];

const breakpoints = [576, 768, 992, 1200]

export const mq = facepaint(
  breakpoints.map(bp => `@media (min-width: ${bp}px)`)
)

