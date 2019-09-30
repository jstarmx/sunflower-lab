<script>
  export let placeholder;
  export let type;
</script>

<style>
  input {
    border-radius: var(--unit);
    border: 1px solid var(--neutral);
    padding: var(--unit-x2) var(--unit-x3);
  }
</style>

<input {placeholder} {type} />
