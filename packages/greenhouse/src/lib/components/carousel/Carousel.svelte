<script context="module">
  export const FRAMES = {};
</script>

<script>
  import { setContext, onDestroy } from 'svelte';
  import { writable } from 'svelte/store';
  import { useSwipe } from 'svelte-gestures';
  import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';

  import Button from '../button/Button.svelte';

  const frames = [];
  const selectedFrameIndex = writable(0);

  setContext(FRAMES, {
    registerFrame: (frame) => {
      frames.push(frame);

      onDestroy(() => {
        const index = frames.indexOf(frame);
        frames.splice(index, 1);
      });
    },

    selectedFrameIndex,
  });

  const prev = () => {
    if ($selectedFrameIndex === 0) {
      selectedFrameIndex.set(frames.length - 1);
    } else {
      selectedFrameIndex.set($selectedFrameIndex - 1);
    }
  };

  const next = () => {
    if ($selectedFrameIndex === frames.length - 1) {
      selectedFrameIndex.set(0);
    } else {
      selectedFrameIndex.set($selectedFrameIndex + 1);
    }
  };

  const onSwipe = ({ detail: direction }) => {
    if (direction === 'left') {
      next();
    } else {
      prev();
    }
  };
</script>

<style>
  .carousel {
    width: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
  }

  .carousel__frames {
    display: flex;
    transform: translateX(0);
    transition: transform 250ms ease-out;
    width: 100%;
  }

  .button {
    position: absolute;
    left: var(--unit);
  }

  .button.button--next {
    left: auto;
    right: var(--unit);
  }

  .indicators {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: var(--unit-x3);
  }

  .indicator {
    display: inline-flex;
    height: var(--unit-x3);
    width: var(--unit-x3);
    border-radius: 50%;
    background-color: var(--secondary-dark);
    margin: 0 var(--unit-sm);
    transition:
      width 250ms ease-out,
      opacity 250ms ease-out;
    opacity: 0.5;
  }

  .indicator--active {
    height: var(--unit-x4);
    width: var(--unit-x4);
    opacity: 1;
  }
</style>

<div class="carousel">
  <div
    class="carousel__frames"
    use:useSwipe={{ timeframe: 300, minSwipeDistance: 60 }}
    on:swipe={onSwipe}
    style="transform: translateX(-{$selectedFrameIndex * 100}%);"
  >
    <slot />
  </div>
  <span class="button">
    <Button on:click={prev} icon={mdiChevronLeft} snug mode="secondary" />
  </span>
  <span class="button button--next">
    <Button on:click={next} icon={mdiChevronRight} snug mode="secondary" />
  </span>
</div>

<div class="indicators">
  {#each frames as _frame, index (index)}
    <span
      class="indicator {$selectedFrameIndex === index
        ? 'indicator--active'
        : ''}"
    ></span>
  {/each}
</div>
