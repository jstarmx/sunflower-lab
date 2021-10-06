<script lang="ts">
  import { Button } from '@sunflower-lab/greenhouse';
  import { mdiMenu, mdiClose } from '@mdi/js';

  import { user, lovedOne } from '../stores';

  const lovedOneName = $user && $user.name;
  const name = $lovedOne && $lovedOne.name;

  export let loggedIn = false;
  export let handleToggleMenu;
  export let menuOpen = false;
</script>

<style>
  header {
    background-color: var(--primary-light);
    border-bottom: var(--unit) solid var(--primary-dark);
    display: flex;
    padding: var(--unit-x2) var(--unit-x3);
    justify-content: space-between;
    align-items: center;
  }

  a {
    display: flex;
  }

  img {
    height: 60px;
  }

  .help {
    border: none;
    height: 60px;
    width: 60px;
    position: relative;
    border-radius: 50%;
    background-color: white;
  }

  .help::after {
    background-image: url('/images/puppy.jpg');
    background-position: 25% 40%;
    background-size: 175%;
    clip-path: circle(45%);
    content: '';
    height: 60px;
    width: 60px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>

<header>
  <a href="/"><img src="/images/logo-circle.svg" alt="Forget-me-not logo" /></a>
  {#if lovedOneName && name}<button class="help" />{/if}
  {#if loggedIn}
    <Button
      label={menuOpen ? 'Close' : 'Menu'}
      icon={menuOpen ? mdiClose : mdiMenu}
      snug
      on:click={handleToggleMenu}
    />
  {/if}
</header>
