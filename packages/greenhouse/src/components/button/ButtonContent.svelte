<script>
  import Icon from '../icon/Icon.svelte';

  export let label;
  export let icon;
</script>

<style>
  .button__label {
    padding: var(--unit);
    padding-top: var(--unit-sm);
  }
</style>

{#if icon}
  <Icon path={icon} />
{/if}
{#if label}<span class="button__label">{label}</span>{/if}
