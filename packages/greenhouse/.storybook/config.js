import { configure } from '@storybook/svelte';

function loadStories() {
  const req = require.context('../stories', true, /\.stories\.ts$/);
  req.keys().forEach(req);
}

configure(loadStories, module);
