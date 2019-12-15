export const theme = {
  colors: {
    darkText: '#424242',
  }
}


export const color = (type) => ({theme}) => theme.colors[type];
