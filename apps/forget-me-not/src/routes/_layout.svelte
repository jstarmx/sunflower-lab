<script>
  import { onMount } from 'svelte';
  import firebase from 'firebase/app';

  import Header from '../components/Header.svelte';
  import Auth from '../components/Auth.svelte';

  let auth;

  onMount(async () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        auth = user;
      } else {
        auth = null;
      }
    });
  });
</script>

<style>
  .container {
    display: grid;
    grid-template-rows: min-content auto;
    height: 100%;
  }

  main {
    display: flex;
    flex-direction: column;
    padding: var(--unit-x5);
  }
</style>

<div class="container">
  <Header />

  <main>
    {#if auth}
      <slot />
    {:else}
      <Auth />
    {/if}
  </main>
</div>
