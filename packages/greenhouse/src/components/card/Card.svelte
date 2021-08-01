<script>
  export let title;
</script>

<style>
  div {
    border: 1px solid var(--mono-light);
    border-radius: var(--unit-x2);
    text-align: center;
    padding: var(--unit) var(--unit-x3);
  }

  h2 {
    color: var(--secondary-dark);
    margin-top: var(--unit-x2);
  }

  p {
    color: var(--mono-dark);
  }
</style>

<div>
  <h2>{title}</h2>
  <p><slot /></p>
</div>
