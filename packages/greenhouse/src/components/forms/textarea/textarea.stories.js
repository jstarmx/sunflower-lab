import TextArea from './TextArea.svelte';

export default { title: 'Components/TextArea' };

export const standard = () => ({
  Component: TextArea,
  props: {
    placeholder: 'enter value...',
    type: 'text',
  },
});
