<script>
  export let placeholder = '';
  export let value = '';
  export let label = '';
  export let type = 'text';
  export let error = '';
</script>

<style>
  div {
    margin: var(--unit) 0 var(--unit-x2);
  }

  label {
    color: var(--mono-inverse);
  }

  input {
    border-radius: var(--unit-x2);
    border: var(--unit-sm) solid var(--mono-light);
    color: var(--primary-inverse);
    margin: var(--unit) 0;
    padding: var(--unit-x2) var(--unit-x3);
    width: 100%;
  }

  input.error {
    border-color: var(--error);
  }

  input:focus {
    box-shadow: 0 0 0 var(--unit) var(--secondary-light);
    border-color: var(--secondary);
    outline: none;
  }

  input::placeholder {
    color: var(--mono);
  }

  span {
    color: var(--error);
  }
</style>

<div>
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label>
    {label}
    {#if type === 'number'}
      <input
        class={error ? 'error' : ''}
        {placeholder}
        type="number"
        bind:value
      />
    {:else if type === 'email'}
      <input
        class={error ? 'error' : ''}
        {placeholder}
        type="email"
        bind:value
      />
    {:else if type === 'password'}
      <input
        class={error ? 'error' : ''}
        {placeholder}
        type="password"
        bind:value
      />
    {:else}
      <input
        class={error ? 'error' : ''}
        {placeholder}
        type="text"
        bind:value
      />
    {/if}
  </label>
  {#if error}
    <span>{error}</span>
  {/if}
</div>
