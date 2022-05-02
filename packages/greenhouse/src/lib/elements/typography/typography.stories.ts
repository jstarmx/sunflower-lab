import Typography from './Typography.svelte';

import type { StorybookSvelte } from '../../types/storybook';

export default {
  title: 'Elements/Typography',
};

export const headings = (): StorybookSvelte.Component => ({
  Component: Typography,
});
