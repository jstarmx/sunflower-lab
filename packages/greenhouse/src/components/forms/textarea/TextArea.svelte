<script>
  export let placeholder = '';
  export let value = '';
  export let rows = 6;
</script>

<style>
  textarea {
    border-radius: var(--unit-x2);
    border: 1px solid var(--primary);
    color: var(--primary);
    margin: 0 0 var(--unit-x3);
    padding: var(--unit-x2) var(--unit-x3);
    width: 100%;
  }

  textarea::placeholder {
    color: var(--primary-light);
  }
</style>

<textarea {placeholder} {rows} bind:value />
