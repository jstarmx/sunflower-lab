import CardStandardStory from './CardStandardStory.svelte';
import type { StorybookSvelte } from '../../../types/storybook';

export default { title: 'Components/Card' };

export const Standard = (): StorybookSvelte.Component => ({
  Component: CardStandardStory,
});
