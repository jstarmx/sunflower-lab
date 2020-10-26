import { mdiAccount, mdiArrowRight } from '@mdi/js';
import Button from './Button.svelte';

export default { title: 'Components/Button' };

export const primary = () => ({
  Component: Button,
  props: {
    label: 'Click Me',
  },
});

export const secondary = () => ({
  Component: Button,
  props: {
    label: 'Click Me',
    mode: 'secondary',
  },
});

export const asLink = () => ({
  Component: Button,
  props: {
    label: "I'm a link",
    href: '#',
  },
});

export const withIcon = () => ({
  Component: Button,
  props: {
    label: 'Click Me',
    icon: mdiAccount,
  },
});

export const withIconOnRight = () => ({
  Component: Button,
  props: {
    label: 'Click Me',
    icon: mdiArrowRight,
    iconRight: true,
  },
});

export const fullWidth = () => ({
  Component: Button,
  props: {
    label: 'Click Me',
    fullWidth: true,
  },
});

export const fullWidthWithIcon = () => ({
  Component: Button,
  props: {
    label: 'Click Me',
    icon: mdiAccount,
    fullWidth: true,
  },
});

export const fullWidthWithIconOnRight = () => ({
  Component: Button,
  props: {
    label: 'Click Me',
    icon: mdiArrowRight,
    iconRight: true,
    fullWidth: true,
  },
});
