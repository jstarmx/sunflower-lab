<script>
  import { mdiArrowRight } from '@mdi/js';
  import { Button, TextArea } from '@sunflower-lab/greenhouse';

  import user from '../models/user';

  let memoryStory = user.get('memoryStory');

  const handleNext = () => {
    user.set({ memoryStory }).save();
    window.location.href = '/get-started-7';
  };
</script>

<style>
  :global(textarea) {
    flex-grow: 1;
  }
  form {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-top: auto;
  }
  footer {
    width: 100%;
  }
</style>

<svelte:head>
  <title>Get started | Step 6 | Forget-me-not</title>
</svelte:head>

<p>Tell the story of your memory:</p>
<p>(P.S. remember you can come back to it later!)</p>

<form on:submit|preventDefault={handleNext}>
  <TextArea placeholder="Enter your story here..." bind:value={memoryStory} />

  <footer>
    <Button label="Next" icon={mdiArrowRight} iconRight fullWidth />
  </footer>
</form>
