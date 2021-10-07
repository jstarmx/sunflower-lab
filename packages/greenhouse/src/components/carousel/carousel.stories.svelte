<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import Carousel from './Carousel.svelte';
  import CarouselFrame from './CarouselFrame.svelte';
  import Card from '../card/Card.svelte';
  import Button from '../button/Button.svelte';
</script>

<Meta title="Components/Carousel" component={Carousel} />

<Story name="Standard">
  <Carousel>
    <CarouselFrame>
      <Card title="Some Section" comfySides>
        <p>Card 1</p>
        <Button label="Do something" />
      </Card>
    </CarouselFrame>
    <CarouselFrame>
      <Card title="Some Section" comfySides>
        <p>Card 2</p>
        <Button label="Do something" />
      </Card>
    </CarouselFrame>
    <CarouselFrame>
      <Card title="Some Section" comfySides>
        <p>Card 3</p>
        <Button label="Do something" />
      </Card>
    </CarouselFrame>
  </Carousel>
</Story>
