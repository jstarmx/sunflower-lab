import Button from './button.svelte';

export default { title: 'Button' };

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
