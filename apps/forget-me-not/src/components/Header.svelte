<script>
  import { Button } from '@sunflower-lab/greenhouse';
  import { mdiMenu } from '@mdi/js';

  import user from '../models/user';

  const lovedOneName = user.get('lovedOneName');
  const name = user.get('lovedOneName');
</script>

<style>
  header {
    background-color: var(--primary-light);
    border-bottom: var(--unit) solid var(--primary);
    display: flex;
    padding: var(--unit-x2) var(--unit-x3);
    justify-content: space-between;
    align-items: center;
  }

  a {
    display: flex;
  }

  img {
    height: 60px;
  }

  .help {
    border: none;
    height: 60px;
    width: 60px;
    position: relative;
    border-radius: 50%;
    background-color: white;
  }

  .help::after {
    background-image: url('/images/puppy.jpg');
    background-position: 25% 40%;
    background-size: 175%;
    clip-path: circle(45%);
    content: '';
    height: 60px;
    width: 60px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>

<header>
  <a href="/"><img src="/images/logo-new.svg" alt="Forget-me-not logo" /></a>
  {#if lovedOneName && name}
    <button class="help" />
    <Button label="Menu" icon={mdiMenu} snug />
  {/if}
</header>
