import Input from './input.svelte';

export default { title: 'Input' };

export const standard = () => ({
  Component: Input,
  props: {
    placeholder: 'enter value...',
    type: 'text',
  },
});
