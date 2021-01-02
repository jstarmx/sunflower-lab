<script lang="ts">
  import { onMount } from 'svelte';
  import firebase from 'firebase/app';

  import Header from '../components/Header.svelte';
  import Auth from '../components/Auth.svelte';
  import Menu from '../components/Menu.svelte';

  // Workaround to suppress console warning, see https://github.com/sveltejs/sapper/issues/824
  export let segment;
  segment = segment;

  let auth = null;
  let loading = true;

  onMount(async () => {
    firebase.auth().onAuthStateChanged((authData) => {
      if (authData) {
        auth = authData;
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

  .content {
    display: grid;
    height: 100%;
    padding: var(--unit-x5);
  }
</style>

<div class="container">
  <Header {auth} {handleToggleMenu} />

  <main>
    {#if loading}
      loading...
    {:else if menuOpen}
      <Menu />
    {:else if auth}
      <div class="content">
        <slot />
      </div>
    {:else}
      <Auth />
    {/if}
  </main>
</div>
