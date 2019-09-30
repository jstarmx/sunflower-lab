import { configure } from '@storybook/svelte';
import '../public/vars.css';
import '../public/global.css';

function loadStories() {
  const req = require.context('../stories', true, /\.stories\.js$/);
  req.keys().forEach(req);
}

configure(loadStories, module);
