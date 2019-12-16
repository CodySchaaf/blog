module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    `eslint:recommended`,
    `react-app`,
    `airbnb`
  ],
  rules: {
    'arrow-parens': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/jsx-one-expression-per-line': ['off'],
    'semi': ['off'],
  },
};
