<script>
  import { Button, Icon } from '@sunflower-lab/greenhouse';
  import { mdiMenu } from '@mdi/js';

  export let segment;
</script>

<style>
  .header {
    background-color: var(--secondary-light);
    border-bottom: var(--unit) solid var(--secondary-dark);
    display: flex;
    padding: var(--unit-x2);
  }
  .logo {
    margin-right: auto;
  }
</style>

<header class="header">
  <a href="." class="logo">home</a>
  <Button label="Menu" icon={mdiMenu} />
</header>
