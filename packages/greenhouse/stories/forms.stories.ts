import { storiesOf } from '@storybook/svelte';

import Input from '../src/components/forms/input.svelte';

const forms = storiesOf('Components', module);

forms.add('Input', () => ({
  Component: Input,
  props: {
    name: 'James',
  },
}));
