<script>
  import { input } from '../../styles/forms.ts';

  export let placeholder;
  export let type;
</script>

<style>
  input {
    border-radius: 4px;
    border: 1px solid #ccc;
  }
</style>

<input {placeholder} {type} class={input} />
