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
  main {
    display: flex;
    flex-direction: column;
    padding: var(--unit-x3);
  }
</style>

<div class="container">
  <Header {segment} />

  <main>
    <slot />
  </main>
</div>
