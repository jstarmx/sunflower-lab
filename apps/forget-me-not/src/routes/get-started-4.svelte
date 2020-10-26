<script>
  import { mdiArrowRight } from '@mdi/js';
  import { Button } from '@sunflower-lab/greenhouse';

  import user from '../models/user';

  const lovedOneName = user.get('lovedOneName');
  const friendName = user.get('friendName');
</script>

<style>
  img {
    margin-left: auto;
    width: 66%;
  }
  footer {
    margin-top: auto;
    width: 100%;
  }
</style>

<svelte:head>
  <title>Get started | Step 4 | Forget-me-not</title>
</svelte:head>

<img src="/images/puppy.jpg" alt={friendName} />

<p>
  Thanks, I can't wait to hear more about {lovedOneName}. Why don't you tell me
  about one of your favourite memories with them?
</p>

<p>
  You don't have to think about it too much right now, you can add plenty more
  later!
</p>

<footer>
  <Button
    href="/get-started-5"
    label="Next"
    icon={mdiArrowRight}
    iconRight
    fullWidth
  />
</footer>
