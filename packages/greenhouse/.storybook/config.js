import { configure } from '@storybook/svelte';
import '../src/styles/vars.css';
import '../src/styles/global.css';

configure(require.context('../src', true, /\.stories\.js$/), module);
