import { mdiAccount } from '@mdi/js';
import Icon from './Icon.svelte';

export default {
  title: 'Components|Icon',
};

export const standard = () => ({
  Component: Icon,
  props: {
    path: mdiAccount,
  },
});
