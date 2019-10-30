import Button from './Button.svelte';

export default { title: 'Components|Button' };

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
    type: 'secondary',
  },
});
