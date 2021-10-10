module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/*.stories.@(ts|svelte)'],
  addons: ['@storybook/addon-svelte-csf']
};
