/** @type { import('@storybook/svelte-vite').StorybookConfig } */
const config = {
  stories: ['../src/lib/**/*.stories.@(ts|svelte)'],
  addons: ['@storybook/addon-svelte-csf'],
  framework: {
    name: '@storybook/svelte-vite',
    options: {
      svelteConfig: {
        preprocess: [
          // We can't easily import vitePreprocess here without more ESM ceremony,
          // but Storybook should ideally pick up svelte.config.js
        ],
      },
    },
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
