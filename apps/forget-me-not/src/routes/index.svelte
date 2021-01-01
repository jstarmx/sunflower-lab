<script lang="ts">
  import { Button } from '@sunflower-lab/greenhouse';

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
    Hi
    {$user.name}, lets talk about
    {$lovedOne.name}
  {:else}
    <Button href="/get-started/1" label="Get started" />
  {/if}
</section>
