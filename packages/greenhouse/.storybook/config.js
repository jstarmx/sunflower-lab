import { configure } from '@storybook/svelte';
import '../public/vars.css';
import '../public/global.css';

configure(require.context('../src', true, /\.stories\.js$/), module);
