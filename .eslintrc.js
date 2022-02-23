module.exports = {
  extends: ['airbnb-base', 'plugin:cypress/recommended', 'prettier'],
  env: {
    browser: true,
    'cypress/globals': true,
    node: true,
    jest: true,
    es6: true,
    serviceworker: true,
  },
  rules: {
    'import/extensions': 'off',
    'import/first': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'lines-between-class-members': 'off',
    'no-console': 'off',
    'no-restricted-globals': 'off',
    'no-underscore-dangle': 'off',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['cypress', 'import', 'svelte3', '@typescript-eslint'],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        'import/no-mutable-exports': 'off',
      },
    },
    {
      files: ['*.ts'],
      extends: ['plugin:@typescript-eslint/recommended'],
    },
  ],
  settings: {
    'svelte3/typescript': require('typescript'), // eslint-disable-line global-require
  },
};
