<script>
  const { title, comfySides = false, children = undefined } = $props();
</script>

<style>
  .card {
    border: 1px solid var(--mono-light);
    border-radius: var(--unit-x2);
    text-align: center;
    padding: var(--unit) var(--unit-x3);
  }

  .card--comfy-sides {
    padding-left: var(--unit-x10);
    padding-right: var(--unit-x10);
  }

  h2 {
    color: var(--secondary-dark);
    margin-top: var(--unit-x2);
  }

  p {
    color: var(--mono-dark);
  }
</style>

<div class="card {comfySides ? 'card--comfy-sides' : ''}">
  <h2>{title}</h2>
  <p>{@render children?.()}</p>
</div>
