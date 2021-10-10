<script lang="ts">
  import {
    Button,
    Card,
    Carousel,
    CarouselFrame,
  } from '@sunflower-lab/greenhouse';

  import { user, lovedOne } from '../stores';
</script>

<style>
  section {
    display: grid;
    align-content: start;
    padding: var(--unit-x5) var(--unit);
  }

  .intro {
    padding: 0 var(--unit-x4);
  }
</style>

<svelte:head>
  <title>Home | Forget-me-not</title>
</svelte:head>

<section>
  {#if $lovedOne.name && $user.name}
    <p class="intro">
      Hi
      {$user.name}, lets talk about
      {$lovedOne.name}.
    </p>
    <Carousel>
      <CarouselFrame>
        <Card title="Memory jar" comfySides>
          <p>
            Add a memory of {$lovedOne.name}, or just have a look through the
            memories you've already added.
          </p>
          <Button href="#" label="Go to your memory jar" />
        </Card>
      </CarouselFrame>
      <CarouselFrame>
        <Card title="Diary" comfySides>
          <p>
            Jot down how you're feeling right now. It can be anything you like.
          </p>
          <Button href="#" label="Go to your diary" />
        </Card>
      </CarouselFrame>
    </Carousel>
  {:else}
    <Button href="/get-started" label="Get started" />
  {/if}
</section>
