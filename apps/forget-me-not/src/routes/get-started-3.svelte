<script>
  import { mdiArrowRight } from '@mdi/js';
  import { Button, Input } from '@sunflower-lab/greenhouse';

  import user from '../models/user';

  const friendName = user.get('friendName');
  const friendNameChosen = user.get('friendNameAuto');
  let lovedOneName = user.get('lovedOneName');

  const handleNext = () => {
    user.set({ lovedOneName }).save();
    window.location.href = '/get-started-4';
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
  <title>Get started | Step 3 | Forget-me-not</title>
</svelte:head>

<img src="/images/puppy.jpg" alt={friendName} />

{#if friendNameChosen}
  <p>Ooh {friendName}, I love it!</p>
{:else}
  <p>Okay, I will call myself... {friendName}!</p>
{/if}

<p>
  Now, why don't you tell me the name of the person you'd like me to help you
  remember?
</p>

<form on:submit|preventDefault={handleNext}>
  <Input placeholder="Enter their name here..." bind:value={lovedOneName} />

  <footer>
    <Button label="Next" icon={mdiArrowRight} iconRight fullWidth />
  </footer>
</form>
