<script>
  import { getContext } from 'svelte';
  import { FRAMES } from './Carousel.svelte';

  const frame = {};
  const { registerFrame } = getContext(FRAMES);

  registerFrame(frame);
</script>

<style>
  article {
    flex-shrink: 0;
    padding: 0 var(--unit-x4);
    width: 100%;
  }
</style>

<article>
  <slot />
</article>
