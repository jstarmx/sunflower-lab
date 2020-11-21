<script>
  import { Button } from '@sunflower-lab/greenhouse';

  import user from '../models/user';

  const lovedOneName = user.get('lovedOneName');
  const name = user.get('lovedOneName');
</script>

<style>
  section {
    display: flex;
    flex-direction: column;
    padding: var(--unit-x5);
  }
</style>

<svelte:head>
  <title>Home | Forget-me-not</title>
</svelte:head>

<section>
  {#if lovedOneName && name}
    Menu...
  {:else}
    <Button href="/get-started-1" label="Get started" />
  {/if}
</section>
