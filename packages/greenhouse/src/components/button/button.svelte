<script>
  export let label;
  export let type;
</script>

<style>
  .button {
    background-color: var(--primary);
    box-shadow: 0 var(--unit) 0 0 var(--primary-dark);
    border-radius: var(--unit);
    border: none;
    color: var(--white);
    cursor: pointer;
    padding: var(--unit-x2) var(--unit-x3);
  }

  .button:active {
    transform: translateY(var(--unit));
  }

  .button--primary {
    background-color: var(--primary);
    box-shadow: 0 var(--unit) 0 0 var(--primary-dark);
  }

  .button--primary:active {
    box-shadow: 0 calc(-1 * var(--unit)) 0 0 var(--primary-dark);
  }

  .button--secondary {
    background-color: var(--secondary);
    box-shadow: 0 var(--unit) 0 0 var(--secondary-dark);
  }

  .button--secondary:active {
    box-shadow: 0 calc(-1 * var(--unit)) 0 0 var(--secondary-dark);
  }
</style>

{#if type === 'secondary'}
  <button type="button" class="button button--secondary">{label}</button>
{:else}
  <button type="button" class="button button--primary">{label}</button>
{/if}
