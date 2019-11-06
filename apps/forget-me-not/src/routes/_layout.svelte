<script>
  import Header from '../components/Header.svelte';

  export let segment;
</script>

<style>
  .container {
    display: grid;
    grid-template-rows: min-content auto;
    height: 100%;
  }
  .main-content {
    display: grid;
    align-items: center;
    justify-items: center;
    padding: var(--unit-x2);
  }
</style>

<div class="container">
  <Header {segment} />

  <main class="main-content">
    <slot />
  </main>
</div>
