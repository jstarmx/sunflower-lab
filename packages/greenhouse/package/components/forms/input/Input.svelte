<script>
  export let placeholder = '';
  export let value = '';
  export let label = '';
  export let type = 'text';
</script>

<style>
  label {
    color: var(--mono-inverse);
  }

  input {
    border-radius: var(--unit-x2);
    border: var(--unit-sm) solid var(--mono-light);
    color: var(--primary-inverse);
    margin: var(--unit) 0 var(--unit-x2);
    padding: var(--unit-x2) var(--unit-x3);
    width: 100%;
  }

  input:focus {
    box-shadow: 0 0 0 var(--unit) var(--secondary-light);
    border-color: var(--secondary);
    outline: none;
  }

  input::placeholder {
    color: var(--mono);
  }
</style>

{#if type === 'number'}
  <label>{label}<input {placeholder} type="number" bind:value /> </label>
{:else if type === 'email'}
  <label>{label}<input {placeholder} type="email" bind:value /> </label>
{:else if type === 'password'}
  <label>{label}<input {placeholder} type="password" bind:value /> </label>
{:else}
  <label>{label}<input {placeholder} type="text" bind:value /> </label>
{/if}
