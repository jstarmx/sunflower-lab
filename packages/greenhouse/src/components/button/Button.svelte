<script>
  import ButtonContent from './ButtonContent.svelte';

  export let label;
  export let type;
  export let href;
  export let icon;
  export let iconRight;
  export let fullWidth;

  let classModifer =
    type === 'secondary' ? 'button--secondary' : 'button--primary';

  if (iconRight) {
    classModifer += ' button--icon-to-right';
  }

  if (fullWidth) {
    classModifer += ' button--full-width';
  }
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
    padding: var(--unit) var(--unit-x3);
    position: relative;
    justify-content: center;
    text-decoration: none;
    width: fit-content;
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
    border: var(--unit-sm) solid var(--primary);
    color: var(--primary);
    padding: var(--unit-sm) var(--unit-x2);
  }

  .button--icon-to-right {
    flex-direction: row-reverse;
  }

  .button--full-width {
    width: 100%;
  }
</style>

{#if href}
  <a {href} class="button {classModifer}">
    <ButtonContent {icon} {label} />
  </a>
{:else}
  <button type="button" class="button {classModifer}" on:click>
    <ButtonContent {icon} {label} />
  </button>
{/if}
