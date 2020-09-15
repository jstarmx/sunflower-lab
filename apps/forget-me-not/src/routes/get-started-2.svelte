<script>
  import { mdiArrowRight } from '@mdi/js';
  import { Button, Input } from '@sunflower-lab/greenhouse';

  import user from '../models/user';

  const name = user.get('name');
  let friendName = user.get('friendName');

  const handleNext = (friendNameChosen = true) => {
    user.set({ friendNameChosen }).set({ friendName }).save();
    window.location.href = '/get-started-3';
  };

  const handleYouChoose = () => {
    friendName = 'Sam';
    handleNext(false);
  };
</script>

<style>
  footer {
    margin-top: auto;
    width: 100%;
  }
</style>

<svelte:head>
  <title>Get started | Step 2 | Forget-me-not</title>
</svelte:head>

<p>
  Hi {name}, I'm very pleased to meet you! Would you like to give me a name too?
</p>
<p>(You can always change it later!)</p>

<Input placeholder="Enter my new name here..." bind:value="{friendName}" />

<footer>
  <p>
    <Button
      on:click="{handleYouChoose}"
      label="You choose"
      type="secondary"
      icon="{mdiArrowRight}"
      iconRight
      fullWidth
    />
  </p>

  <Button
    on:click="{handleNext}"
    label="Next"
    icon="{mdiArrowRight}"
    iconRight
    fullWidth
  />
</footer>
