<script>
  import Icon from '../icon/Icon.svelte';

  export let label;
  export let icon;
  export let image;
  export let imageHeight;
</script>

<style>
  .button__label {
    padding: var(--unit);
  }
</style>

{#if icon}
  <Icon path={icon} />
{/if}
{#if image}
  <img src={image} style="height: calc(var(--unit) * {imageHeight})" alt="" />
{/if}
{#if label}<span class="button__label">{label}</span>{/if}
