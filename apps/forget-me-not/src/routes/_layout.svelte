<script>
  import Header from '../components/Header.svelte';
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
    <slot />
  </main>
</div>
