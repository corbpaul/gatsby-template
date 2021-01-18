module.exports = {
  root: true,
  env: {
    browser: true,
    jest: true,
    node: true,
    'cypress/globals': true,
  },
  settings: {
    react: {
      version: '>16',
    },
  },
  plugins: ['@typescript-eslint', 'react', 'cypress'],
  globals: {
    graphql: false,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
};
