<script>
  import { mdiArrowRight } from '@mdi/js';
  import { Button, Input } from '@sunflower-lab/greenhouse';

  import user from '../models/user';

  let memoryTitle = user.get('memoryTitle');

  const handleNext = () => {
    user.set({ memoryTitle }).save();
    window.location.href = '/get-started-6';
  };
</script>

<style>
  footer {
    margin-top: auto;
    width: 100%;
  }
</style>

<svelte:head>
  <title>Get started | Step 5 | Forget-me-not</title>
</svelte:head>

<p>Give your memory a title:</p>

<form on:submit|preventDefault={handleNext}>
  <Input placeholder="Enter a title here..." bind:value={memoryTitle} />

  <footer>
    <Button label="Next" icon={mdiArrowRight} iconRight fullWidth />
  </footer>
</form>
