<script>
  import { onMount } from 'svelte';
  import firebase from 'firebase/app';

  import Header from '../components/Header.svelte';
  import Auth from '../components/Auth.svelte';
  import Menu from '../components/Menu.svelte';

  let auth;
  let loading = true;

  onMount(async () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        auth = user;
      } else {
        auth = null;
      }
      loading = false;
    });
  });

  let menuOpen = false;

  const handleToggleMenu = () => {
    menuOpen = !menuOpen;
  };
</script>

<style>
  .container {
    display: grid;
    grid-template-rows: min-content auto;
    height: 100%;
  }
</style>

<div class="container">
  <Header {auth} {handleToggleMenu} {menuOpen} />

  <main>
    {#if loading}
      loading...
    {:else if menuOpen}
      <Menu />
    {:else if auth}
      <slot />
    {:else}
      <Auth />
    {/if}
  </main>
</div>
