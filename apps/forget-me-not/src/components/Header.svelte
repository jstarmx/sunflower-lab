<script>
  import { Button } from '@sunflower-lab/greenhouse';
  import { mdiMenu } from '@mdi/js';
</script>

<style>
  header {
    background-color: var(--primary-light);
    border-bottom: var(--unit) solid var(--primary-dark);
    display: flex;
    padding: var(--unit-x2);
  }
  .logo {
    margin-right: auto;
  }
</style>

<header>
  <a href="." class="logo">home</a>
  <Button label="Menu" icon={mdiMenu} />
</header>
