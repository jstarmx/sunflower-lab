import { mdiAccount } from '@mdi/js';

import Icon from './Icon.svelte';

import type { StorybookSvelte } from '../../types/storybook';

export default {
  title: 'Components/Icon',
};

export const standard = (): StorybookSvelte.Component => ({
  Component: Icon,
  props: {
    path: mdiAccount,
  },
});

export const inCircle = (): StorybookSvelte.Component => ({
  Component: Icon,
  props: {
    path: mdiAccount,
    background: 'black',
  },
});
