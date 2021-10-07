<script lang="ts">
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
  import { mdiCheck } from '@mdi/js';
  import { Button, Input } from '@sunflower-lab/greenhouse';

  let email = '';
  let password = '';

  const auth = getAuth();

  const handleSubmit = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
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
    <Input
      bind:value={email}
      type="email"
      label="Email address"
      placeholder="Enter your email address"
    />
    <Input
      bind:value={password}
      type="password"
      label="Password"
      placeholder="Enter your password"
    />
    <Button label="Sign in" icon={mdiCheck} fullWidth />
  </form>
</section>
