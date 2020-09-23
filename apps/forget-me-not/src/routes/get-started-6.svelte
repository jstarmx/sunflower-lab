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
  footer {
    margin-top: auto;
    width: 100%;
  }
</style>

<svelte:head>
  <title>Get started | Step 6 | Forget-me-not</title>
</svelte:head>

<p>Tell the story of your memory:</p>
<p>(P.S. remember you can come back to it later!)</p>

<TextArea placeholder="Enter your story here..." bind:value={memoryStory} />

<footer>
  <Button
    on:click={handleNext}
    label="Next"
    icon={mdiArrowRight}
    iconRight
    fullWidth
  />
</footer>
