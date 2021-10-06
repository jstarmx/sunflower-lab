<script lang="ts">
  import { getAuth, signOut } from 'firebase/auth';
  import { Icon } from '@sunflower-lab/greenhouse';
  import { mdiAccount } from '@mdi/js';

  const auth = getAuth();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      window.location.href = '/';
    } catch (err) {
      console.error(err);
    }
  };
</script>

<style>
  nav {
    background-color: var(--primary);
    height: 100%;
  }

  ul {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
  }

  li {
    border-bottom: var(--unit-sm) solid var(--white);
    color: var(--white);
    list-style: none;
    padding: var(--unit-x2) var(--unit-x3);
    display: flex;
    align-items: center;
    font-weight: bold;
  }

  span {
    padding-left: var(--unit-x3);
  }
</style>

<nav>
  <ul>
    <li on:click={handleSignOut}>
      <Icon path={mdiAccount} background="white" />
      <span>Log out</span>
    </li>
  </ul>
</nav>
