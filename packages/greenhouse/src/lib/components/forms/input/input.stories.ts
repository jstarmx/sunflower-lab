import Input from './Input.svelte';

import type { StorybookSvelte } from '../../../types/storybook';

export default { title: 'Components/Input' };

export const text = (): StorybookSvelte.Component => ({
  Component: Input,
  props: {
    placeholder: 'enter value...',
  },
});

export const number = (): StorybookSvelte.Component => ({
  Component: Input,
  props: {
    label: 'Enter number here',
    placeholder: 'enter value...',
    type: 'number',
  },
});

export const email = (): StorybookSvelte.Component => ({
  Component: Input,
  props: {
    label: 'Enter email address here',
    placeholder: 'enter value...',
    type: 'email',
  },
});

export const password = (): StorybookSvelte.Component => ({
  Component: Input,
  props: {
    label: 'Enter password here',
    placeholder: 'enter value...',
    type: 'password',
  },
});
