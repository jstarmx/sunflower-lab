import Colours from './Colours.svelte';

import type { StorybookSvelte } from '../../types/storybook';

export default {
  title: 'Elements/Colours',
};

export const main = (): StorybookSvelte.Component => ({
  Component: Colours,
});
