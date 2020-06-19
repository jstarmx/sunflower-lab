<script>
  import { mdiArrowRight } from '@mdi/js';
  import { Button, Input } from '@sunflower-lab/greenhouse';

  import user from '../models/user';

  let name = user.get('name');

  const handleClick = () => {
    user.set({ name }).save();
  };
</script>

<style>
  footer {
    margin-top: auto;
    width: 100%;
  }
</style>

<svelte:head>
  <title>Get started | Step 1 | Forget-me-not</title>
</svelte:head>

<p>Hi! I'm a Labrador puppy. We're well known for looking after our humans.</p>
<p>Would you like to tell me your name?</p>

<Input placeholder="Enter your name here..." bind:value={name} />

<footer>
  <Button
    on:click={handleClick}
    label="Next"
    icon={mdiArrowRight}
    iconRight
    fullWidth />
</footer>
