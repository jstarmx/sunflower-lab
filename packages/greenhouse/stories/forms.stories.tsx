import { storiesOf } from '@storybook/svelte';

import HelloWorld from '../src/App.svelte';

const forms = storiesOf('Components', module);

forms.add('HelloWorld', () => ({
  Component: HelloWorld,
  props: {
    name: 'James',
  },
}));
