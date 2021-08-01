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
    display: flex;
    flex-direction: column;
  }
</style>

<svelte:head>
  <title>Home | Forget-me-not</title>
</svelte:head>

<section>
  {#if $lovedOne.name && $user.name}
    <p>
      Hi
      {$user.name}, lets talk about
      {$lovedOne.name}.
    </p>
    <Carousel>
      <CarouselFrame>
        <Card title="Memory jar">
          <p>
            Add a memory of {$lovedOne.name}, or just have a look through the
            memories you've already added.
          </p>
          <Button href="#" label="Go to your memory jar" />
        </Card>
      </CarouselFrame>
      <CarouselFrame>
        <Card title="Diary">
          <p>
            Jot down how you're feeling right now. It can be anything you like.
          </p>
          <Button href="#" label="Go to your diary" />
        </Card>
      </CarouselFrame>
    </Carousel>
    <!-- <p>
      You could <a href="#">add a memory of {$lovedOne.name}</a>, or just
      <a href="#">have a look through the memories you've already added</a>.
    </p>
    <p>You could <a href="#">write down how you're feeling</a> right now.</p>
    <p>
      Or you could have a look to see where you can <a href="#"
        >get some more help</a
      > if you need it.
    </p> -->
  {:else}
    <Button href="/get-started" label="Get started" />
  {/if}
</section>
