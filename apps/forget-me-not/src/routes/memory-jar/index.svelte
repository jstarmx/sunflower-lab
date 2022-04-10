<script lang="ts">
  import {
    Button,
    Card,
    Carousel,
    CarouselFrame,
  } from '@sunflower-lab/greenhouse';
  import { mdiStarPlus } from '@mdi/js';

  import { memories } from '../../stores';
</script>

<style>
  main {
    padding: var(--unit-x5);
  }

  .carousel-wrapper {
    margin-top: var(--unit-x5);
  }
</style>

<main>
  <Button
    label="Add a new memory"
    href="/memory-jar/new"
    icon={mdiStarPlus}
    fullWidth
  />
  <div class="carousel-wrapper">
    <Carousel>
      {#each $memories as memory}
        <CarouselFrame>
          <Card title={memory.title} comfySides>
            <p>{memory.content || '(This memory has no story yet)'}</p>
          </Card>
        </CarouselFrame>
      {/each}
    </Carousel>
  </div>
</main>
