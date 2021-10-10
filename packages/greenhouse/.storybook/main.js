const path = require('path');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/*.stories.@(ts|svelte)'],
  addons: ['@storybook/addon-svelte-csf'],
  webpackFinal: async (config) => {
    config.resolve.alias.svelte = path.resolve('node_modules', 'svelte');
    return config;
  },
};
