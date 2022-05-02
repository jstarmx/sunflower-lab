import { mdiAccount, mdiArrowRight } from '@mdi/js';

import Button from './Button.svelte';

import type { StorybookSvelte } from '../../types/storybook';

export default { title: 'Components/Button' };

export const primary = (): StorybookSvelte.Component => ({
  Component: Button,
  props: {
    label: 'Click Me',
  },
});

export const secondary = (): StorybookSvelte.Component => ({
  Component: Button,
  props: {
    label: 'Click Me',
    mode: 'secondary',
  },
});

export const asLink = (): StorybookSvelte.Component => ({
  Component: Button,
  props: {
    label: "I'm a link",
    href: '#',
  },
});

export const withIcon = (): StorybookSvelte.Component => ({
  Component: Button,
  props: {
    label: 'Click Me',
    icon: mdiAccount,
  },
});

export const withIconOnRight = (): StorybookSvelte.Component => ({
  Component: Button,
  props: {
    label: 'Click Me',
    icon: mdiArrowRight,
    iconRight: true,
  },
});

export const iconOnly = (): StorybookSvelte.Component => ({
  Component: Button,
  props: {
    icon: mdiAccount,
  },
});

export const fullWidth = (): StorybookSvelte.Component => ({
  Component: Button,
  props: {
    label: 'Click Me',
    fullWidth: true,
  },
});

export const fullWidthWithIcon = (): StorybookSvelte.Component => ({
  Component: Button,
  props: {
    label: 'Click Me',
    icon: mdiAccount,
    fullWidth: true,
  },
});

export const fullWidthWithIconOnRight = (): StorybookSvelte.Component => ({
  Component: Button,
  props: {
    label: 'Click Me',
    icon: mdiArrowRight,
    iconRight: true,
    fullWidth: true,
  },
});

export const withImage = (): StorybookSvelte.Component => ({
  Component: Button,
  props: {
    label: 'Click Me',
    mode: 'secondary',
    image: '/memory-jar.jpg',
    imageHeight: 10,
  },
});
