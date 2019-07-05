import { storiesOf } from '@storybook/svelte';

import Input from '../src/components/forms/input.svelte';

const forms = storiesOf('Forms', module);

forms.add('Input', () => ({
  Component: Input,
  props: {
    placeholder: 'enter value...',
    type: 'text',
  },
}));
