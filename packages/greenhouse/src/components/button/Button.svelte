<script>
  import ButtonContent from './ButtonContent.svelte';

  export let label;
  export let mode = 'primary';
  export let href = '';
  export let icon = '';
  export let type = 'submit';
  export let iconRight = false;
  export let fullWidth = false;
  export let snug = false;

  let classModifer =
    mode === 'secondary' ? 'button--secondary' : 'button--primary';

  if (iconRight) {
    classModifer += ' button--icon-to-right';
  }

  if (fullWidth) {
    classModifer += ' button--full-width';
  }

  if (snug) {
    classModifer += ' button--snug';
  }
</script>

<style>
  .button {
    align-items: center;
    background-color: var(--primary);
    box-shadow: 0 var(--unit) 0 0 var(--primary-dark);
    border-radius: var(--unit-x2);
    border: var(--unit-sm) solid var(--primary);
    cursor: pointer;
    display: inline-flex;
    font-weight: bold;
    line-height: var(--unit-x4);
    padding: var(--unit) var(--unit-x3);
    margin: var(--unit-x2) 0 0;
    position: relative;
    justify-content: center;
    text-decoration: none;
    width: fit-content;
  }

  button:focus {
    box-shadow: 0 0 0 var(--unit) var(--secondary-light);
    outline: none;
  }

  .button:active {
    transform: translateY(var(--unit));
    box-shadow: none;
  }

  .button--primary {
    background-color: var(--primary);
    color: var(--white);
  }

  .button--secondary {
    background-color: var(--white);
    color: var(--primary);
  }

  .button--icon-to-right {
    flex-direction: row-reverse;
  }

  .button--full-width {
    width: 100%;
  }

  .button--snug {
    margin: 0;
  }
</style>

{#if href}
  <a {href} class="button {classModifer}">
    <ButtonContent {icon} {label} />
  </a>
{:else}
  <button {type} class="button {classModifer}" on:click>
    <ButtonContent {icon} {label} />
  </button>
{/if}
