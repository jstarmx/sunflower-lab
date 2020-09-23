<script>
  import { mdiArrowRight } from '@mdi/js';
  import { Button } from '@sunflower-lab/greenhouse';

  import user from '../models/user';

  const lovedOneName = user.get('lovedOneName');

  const handleNext = () => {
    window.location.href = '/get-started-5';
  };
</script>

<style>
  footer {
    margin-top: auto;
    width: 100%;
  }
</style>

<svelte:head>
  <title>Get started | Step 4 | Forget-me-not</title>
</svelte:head>

<p>
  Thanks, I can't wait to hear more about {lovedOneName}. Why don't you tell me
  about one of your favourite memories with them?
</p>

<p>
  You don't have to think about it too much right now, you can add plenty more
  later!
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
