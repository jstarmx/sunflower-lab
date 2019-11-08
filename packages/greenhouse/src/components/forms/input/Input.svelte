<script>
  export let placeholder;
  export let value;
  export let type = 'text';
</script>

<style>
  input {
    border-radius: var(--unit-x2);
    border: 1px solid var(--primary);
    color: var(--primary);
    margin: 0 0 var(--unit-x3);
    padding: var(--unit-x2) var(--unit-x3);
    width: 100%;
  }

  input::placeholder {
    color: var(--primary-light);
  }
</style>

<input {placeholder} type="text" bind:value />
