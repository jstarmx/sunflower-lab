<script>
  import { mdiArrowRight } from '@mdi/js';
  import { Button } from '@sunflower-lab/greenhouse';

  import user from '../models/user';

  const name = user.get('name');

  const handleNext = () => {
    window.location.href = '/get-started-8';
  };
</script>

<style>
  footer {
    margin-top: auto;
    width: 100%;
  }
</style>

<svelte:head>
  <title>Get started | Step 7 | Forget-me-not</title>
</svelte:head>

<p>Thanks {name}, I've put that in your memory jar!</p>
<p>
  You can return to your memory jar any time you want to save another memory
  look back on the ones you've already saved.
</p>

<footer>
  <Button
    on:click={handleNext}
    label="Next"
    icon={mdiArrowRight}
    iconRight
    fullWidth
  />
</footer>
