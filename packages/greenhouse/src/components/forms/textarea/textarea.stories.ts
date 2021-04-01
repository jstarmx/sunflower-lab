import TextArea from './TextArea.svelte';

import type { StorybookSvelte } from '../../../types';

export default { title: 'Components/TextArea' };

export const standard = (): StorybookSvelte.Component => ({
  Component: TextArea,
  props: {
    placeholder: 'enter value...',
    type: 'text',
  },
});
