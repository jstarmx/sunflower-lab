<script>
  import { mdiHome } from '@mdi/js';
  import { Button } from '@sunflower-lab/greenhouse';

  import user from '../models/user';

  const lovedOneName = user.get('lovedOneName');

  const handleNext = () => {
    window.location.href = '/home';
  };
</script>

<style>
  footer {
    margin-top: auto;
    width: 100%;
  }
</style>

<svelte:head>
  <title>Get started | Step 8 | Forget-me-not</title>
</svelte:head>

<p>
  Go ahead and explore the rest of the app. If you ever need my help, just click
  on my face up there.
</p>
<p>
  Together we'll treasure the memory of {lovedOneName} and remember all the reasons
  you loved them so much.
</p>

<footer>
  <Button on:click={handleNext} label="Home" icon={mdiHome} fullWidth />
</footer>
