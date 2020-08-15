import Typography from 'typography';
import fairyGatesTheme from 'typography-theme-fairy-gates';

const { googleFonts, ...rest } = fairyGatesTheme;

console.log(googleFonts);

const typography = new Typography(rest);

export default typography;
