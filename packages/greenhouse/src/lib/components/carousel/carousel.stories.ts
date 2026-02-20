import CarouselStandardStory from './CarouselStandardStory.svelte';
import type { StorybookSvelte } from '../../../types/storybook';

export default { title: 'Components/Carousel' };

export const Standard = (): StorybookSvelte.Component => ({
  Component: CarouselStandardStory,
});
