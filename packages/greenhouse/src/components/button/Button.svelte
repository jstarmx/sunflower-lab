<script>
  import Icon from '../icon/Icon.svelte';

  export let label;
  export let type;
  export let icon;

  const classModifer =
    type === 'secondary' ? 'button--secondary' : 'button--primary';
</script>

<style>
  .button {
    align-items: center;
    background-color: var(--primary);
    box-shadow: 0 var(--unit) 0 0 var(--primary-dark);
    border-radius: var(--unit-x2);
    border: none;
    cursor: pointer;
    display: inline-flex;
    padding: var(--unit-x2) var(--unit-x3);
    position: relative;
    box-shadow: 0 var(--unit) 0 0 var(--primary-dark);
  }

  .button:active {
    transform: translateY(var(--unit));
    box-shadow: 0 calc(-1 * var(--unit)) 0 0 var(--primary-dark);
  }

  .button--primary {
    background-color: var(--primary);
    color: var(--white);
  }

  .button--secondary {
    background-color: var(--white);
    border: var(--unit) solid var(--primary);
    color: var(--primary);
    padding: var(--unit) var(--unit-x2);
  }

  .button__label {
    padding: var(--unit);
  }
</style>

<button type="button" class="button {classModifer}">
  {#if icon}
    <Icon path={icon} />
  {/if}
  {#if label}
    <span class="button__label">{label}</span>
  {/if}
</button>
