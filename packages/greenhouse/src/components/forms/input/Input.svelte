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
    padding-top: var(--unit);
    width: 100%;
  }

  input:focus {
    box-shadow: 0 0 0 var(--unit) var(--primary-light);
    border-color: var(--primary);
    outline: none;
  }

  input::placeholder {
    color: var(--mono);
  }
</style>

<label>
  {label}
  {#if type === 'number'}
    <input {placeholder} type="number" bind:value />
  {:else if type === 'email'}
    <input {placeholder} type="email" bind:value />
  {:else if type === 'password'}
    <input {placeholder} type="password" bind:value />
  {:else}<input {placeholder} type="text" bind:value />{/if}
</label>
