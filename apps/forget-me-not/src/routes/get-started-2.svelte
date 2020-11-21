<script>
  import { mdiArrowRight } from '@mdi/js';
  import { Button, Input } from '@sunflower-lab/greenhouse';

  import user from '../models/user';

  const name = user.get('name');
  let friendName = user.get('friendName');

  const handleNext = () => {
    user.set({ friendNameChosen: true }).set({ friendName }).save();
    window.location.href = '/get-started-3';
  };

  const handleYouChoose = () => {
    user.set({ friendName: 'Sam' }).save();
    window.location.href = '/get-started-3';
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
  <title>Get started | Step 2 | Forget-me-not</title>
</svelte:head>

<img src="/images/puppy.jpg" alt="Cute brown puppy" />

<p>
  Hi
  {name}, I'm very pleased to meet you! Would you like to give me a name too?
  (You can always change it later!)
</p>

<form on:submit|preventDefault={handleNext}>
  <Input placeholder="Enter my new name here..." bind:value={friendName} />

  <footer>
    <p>
      <Button
        on:click={handleYouChoose}
        label="You choose"
        type="button"
        mode="secondary"
        icon={mdiArrowRight}
        iconRight
        fullWidth
      />
    </p>

    <Button label="Next" icon={mdiArrowRight} iconRight fullWidth />
  </footer>
</form>
