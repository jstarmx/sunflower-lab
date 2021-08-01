<script lang="ts">
  import { mdiHome } from '@mdi/js';
  import { Button, Input, TextArea } from '@sunflower-lab/greenhouse';

  import { user, companion, lovedOne, memory } from '../stores';

  let step: number = 1;

  const handleBack = (): void => {
    step -= 1;
  };

  const handleNext = (): void => {
    step += 1;
  };

  const handleYouChoose = (): void => {
    companion.set({ name: 'Sam', randomName: true });
    handleNext();
  };
</script>

<style>
  img {
    margin-left: auto;
    width: 66%;
  }

  form {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  :global(textarea) {
    flex-grow: 1;
  }

  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: var(--unit-x2);
    margin-top: auto;
  }
</style>

<svelte:head>
  <title>Get started | Step {step} | Forget-me-not</title>
</svelte:head>

<form on:submit|preventDefault={handleNext}>
  {#if step === 1}
    <img src="/images/puppy.jpg" alt="Cute brown puppy" />
    <p>
      Hi! I'm a Labrador puppy. We're well known for looking after our humans.
    </p>
    <p>Would you like to tell me your name?</p>

    <Input
      label="Your name"
      placeholder="Enter your name here..."
      bind:value={$user.name}
    />
  {/if}

  {#if step === 2}
    <img src="/images/puppy.jpg" alt="Cute brown puppy" />

    <p>
      Hi
      {$user.name}, I'm very pleased to meet you! Would you like to give me a
      name too? (You can always change it later!)
    </p>

    <Input
      label="My new name"
      placeholder="Enter my new name here..."
      bind:value={$companion.name}
    />

    <Button
      on:click={handleYouChoose}
      label="You choose"
      type="button"
      mode="secondary"
      fullWidth
    />
  {/if}

  {#if step === 3}
    <img src="/images/puppy.jpg" alt={$companion.name} />

    {#if $companion.randomName}
      <p>Okay, I will call myself... {$companion.name}!</p>
    {:else}
      <p>Ooh {$companion.name}, I love it!</p>
    {/if}

    <p>
      Now, why don't you tell me the name of the person you'd like me to help
      you remember?
    </p>

    <Input
      label="Their name"
      placeholder="Enter their name here..."
      bind:value={$lovedOne.name}
    />
  {/if}

  {#if step === 4}
    <img src="/images/puppy.jpg" alt={$companion.name} />

    <p>
      Thanks, I can't wait to hear more about
      {$lovedOne.name}. Why don't you tell me about one of your favourite
      memories with them?
    </p>

    <p>
      You don't have to think about it too much right now, you can add plenty
      more later!
    </p>
  {/if}

  {#if step === 5}
    <p>Give your memory a title:</p>
    <Input
      label="Title"
      placeholder="Enter a title here..."
      bind:value={$memory.title}
    />
  {/if}

  {#if step === 6}
    <p>Tell the story of your memory:</p>
    <p>(P.S. remember you can come back to it later!)</p>
    <TextArea
      label="Your story"
      placeholder="Enter your story here..."
      bind:value={$memory.story}
    />
  {/if}

  {#if step === 7}
    <img src="/images/puppy.jpg" alt={$companion.name} />

    <p>
      Thanks {$user.name}, I've put that in your <strong>memory jar!</strong>
    </p>
    <p>
      You can return to your memory jar any time you want to save another memory
      look back on the ones you've already saved.
    </p>
  {/if}

  {#if step === 8}
    <img src="/images/puppy.jpg" alt={$companion.name} />

    <p>
      Go ahead and explore the rest of the app. If you ever need help, just give
      my face up there a tap.
    </p>
    <p>
      Together we'll treasure the memory of
      {$lovedOne.name}
      and remember all the reasons you loved them so much.
    </p>
  {/if}

  <footer>
    {#if step !== 1 && step !== 8}
      <Button
        label="Back"
        type="button"
        mode="secondary"
        on:click={handleBack}
        fullWidth
      />
    {:else}<span />{/if}
    {#if step === 8}
      <Button href="/" label="Home" icon={mdiHome} fullWidth />
    {:else}
      <Button label="Next" fullWidth />
    {/if}
  </footer>
</form>
