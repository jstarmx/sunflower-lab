import Input from './Input.svelte';
export default { title: 'Components/Input' };
export const text = () => ({
  Component: Input,
  props: {
    placeholder: 'enter value...',
  },
});
export const number = () => ({
  Component: Input,
  props: {
    label: 'Enter number here',
    placeholder: 'enter value...',
    type: 'number',
  },
});
export const email = () => ({
  Component: Input,
  props: {
    label: 'Enter email address here',
    placeholder: 'enter value...',
    type: 'email',
  },
});
export const password = () => ({
  Component: Input,
  props: {
    label: 'Enter password here',
    placeholder: 'enter value...',
    type: 'password',
  },
});
