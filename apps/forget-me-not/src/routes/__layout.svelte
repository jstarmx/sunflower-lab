<script lang="ts">
  import { onMount } from 'svelte';
  import { initializeApp } from 'firebase/app';
  import { getAuth, onAuthStateChanged } from 'firebase/auth';
  import '@sunflower-lab/greenhouse/src/styles/vars.css';
  import '@sunflower-lab/greenhouse/src/styles/global.css';

  import Header from '../components/Header.svelte';
  import Auth from '../components/Auth.svelte';
  import Menu from '../components/Menu.svelte';

  let loggedIn = false;
  let loading = true;

  onMount(async () => {
    const firebaseConfig = {
      apiKey: 'AIzaSyCTZNcf_NrG3pEQpdat58lCSrbs5fnE2Y8',
      authDomain: 'forget-me-not-app.firebaseapp.com',
      databaseURL: 'https://forget-me-not-app.firebaseio.com',
      projectId: 'forget-me-not-app',
      storageBucket: 'forget-me-not-app.appspot.com',
      messagingSenderId: '1039937894418',
      appId: '1:1039937894418:web:6e21c2018fa7416c6940cb',
      measurementId: 'G-5RVYT2LC3W',
    };

    const firebaseApp = initializeApp(firebaseConfig);
    const auth = getAuth(firebaseApp);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        loggedIn = true;
      } else {
        loggedIn = false;
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
  <Header {loggedIn} {handleToggleMenu} />

  {#if loading}
    <div class="loader">
      <img src="/images/logo.svg" alt="Forget-me-not logo" />
      Loading, please wait...
    </div>
  {:else if menuOpen}
    <Menu />
  {:else if loggedIn}
    <div class="content">
      <slot />
    </div>
  {:else}
    <Auth />
  {/if}
</div>
