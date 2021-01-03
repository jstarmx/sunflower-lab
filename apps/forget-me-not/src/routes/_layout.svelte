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

  .loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding-bottom: var(--unit-x6);
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    8% {
      transform: rotate(80deg);
    }
    10% {
      transform: rotate(72deg);
    }
    20% {
      transform: rotate(72deg);
    }
    28% {
      transform: rotate(152deg);
    }
    30% {
      transform: rotate(144deg);
    }
    40% {
      transform: rotate(144deg);
    }
    48% {
      transform: rotate(224deg);
    }
    50% {
      transform: rotate(216deg);
    }
    60% {
      transform: rotate(216deg);
    }
    68% {
      transform: rotate(296deg);
    }
    70% {
      transform: rotate(288deg);
    }
    80% {
      transform: rotate(288deg);
    }
    88% {
      transform: rotate(368deg);
    }
    90% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  img {
    width: 25vw;
    animation: spin 4s infinite linear;
  }
</style>

<div class="container">
  <Header {auth} {handleToggleMenu} />

  <main>
    {#if loading}
      <div class="loader">
        <img src="/images/logo.svg" alt="Forget-me-not logo" />
        Loading, please wait...
      </div>
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
