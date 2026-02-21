<script>
  import Icon from '../icon/Icon.svelte';

  const { label, icon, image, imageHeight } = $props();
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
