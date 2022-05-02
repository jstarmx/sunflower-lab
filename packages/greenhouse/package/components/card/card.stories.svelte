<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import Card from './Card.svelte';
  import Button from '../button/Button.svelte';
</script>

<Meta title="Components/Card" component={Card} />

<Story name="Standard">
  <Card title="Some Section">
    <p>This is a card</p>
    <Button label="Do something" />
  </Card>
</Story>
