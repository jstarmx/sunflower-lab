<script>
  /* eslint-disable prefer-const */
  let {
    value = $bindable(''),
    placeholder = '',
    label = '',
    rows = 6,
  } = $props();
  /* eslint-enable prefer-const */
</script>

<style>
  label {
    color: var(--mono-inverse);
  }

  textarea {
    border-radius: var(--unit-x2);
    border: var(--unit-sm) solid var(--mono-light);
    color: var(--primary);
    margin: var(--unit) 0 var(--unit-x3);
    padding: var(--unit-x2) var(--unit-x3);
    width: 100%;
  }

  textarea:focus {
    box-shadow: 0 0 0 var(--unit) var(--secondary-light);
    border-color: var(--secondary);
    outline: none;
  }

  textarea::placeholder {
    color: var(--mono);
  }
</style>

<label
  >{label}
  <textarea {placeholder} {rows} bind:value></textarea>
</label>
