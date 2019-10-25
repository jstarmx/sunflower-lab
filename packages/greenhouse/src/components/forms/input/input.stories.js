import Input from './Input.svelte';

export default { title: 'Input' };

export const standard = () => ({
  Component: Input,
  props: {
    placeholder: 'enter value...',
    type: 'text',
  },
});
