<script>
  export let title;
  export let comfySides = false;
  export let fill = false;
</script>

<style>
  .card {
    border: 1px solid var(--mono-light);
    border-radius: var(--unit-x2);
    text-align: center;
    padding: var(--unit-x5);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  :global(.card + .card) {
    margin-top: var(--unit-x5);
  }

  .card--comfy-sides {
    padding-left: var(--unit-x10);
    padding-right: var(--unit-x10);
  }

  .card--fill {
    height: 100%;
  }

  h2 {
    color: var(--secondary-dark);
    margin: 0 0 var(--unit-x3);
  }
</style>

<div
  class="card {comfySides ? 'card--comfy-sides' : ''} {fill
    ? 'card--fill'
    : ''}"
>
  <h2>{title}</h2>
  <slot />
</div>
