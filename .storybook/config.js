import { configure } from '@storybook/react';

function loadStories() {
  const req = require.context('../stories', true, /\.stories\.tsx$/);
  req.keys().forEach(req);
}

configure(loadStories, module);
