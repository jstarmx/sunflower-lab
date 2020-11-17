<script>
  import { mdiArrowRight } from '@mdi/js';
  import { Button, Input } from '@sunflower-lab/greenhouse';

  import user from '../models/user';

  let name = user.get('name');

  const handleNext = () => {
    user.set({ name }).save();
    window.location.href = '/get-started-2';
  };
</script>

<style>
  img {
    margin-left: auto;
    width: 66%;
  }
  form {
    margin-top: auto;
  }
  footer {
    width: 100%;
  }
</style>

<svelte:head>
  <title>Get started | Step 1 | Forget-me-not</title>
</svelte:head>

<img src="/images/puppy.jpg" alt="Cute brown puppy" />

<p>Hi! I'm a Labrador puppy. We're well known for looking after our humans.</p>
<p>Would you like to tell me your name?</p>

<form on:submit|preventDefault={handleNext}>
  <Input placeholder="Enter your name here..." bind:value={name} />

  <footer>
    <Button label="Next" icon={mdiArrowRight} iconRight fullWidth />
  </footer>
</form>
