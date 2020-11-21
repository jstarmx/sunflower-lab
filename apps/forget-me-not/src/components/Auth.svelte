<script>
  import firebase from 'firebase/app';
  import { mdiCheck } from '@mdi/js';
  import { Button, Input } from '@sunflower-lab/greenhouse';

  let email = '';
  let password = '';

  const handleSubmit = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.error(err);
    }
  };
</script>

<style>
  section {
    display: flex;
    flex-direction: column;
    padding: var(--unit-x5);
  }
</style>

<section>
  <h1>Sign in</h1>
  <form on:submit|preventDefault={handleSubmit}>
    <Input bind:value={email} type="email" label="Email address" />
    <Input bind:value={password} type="password" label="Password" />
    <Button label="Sign in" icon={mdiCheck} fullWidth />
  </form>
</section>
