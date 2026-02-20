<script>
  import Carousel from './Carousel.svelte';
  import CarouselFrame from './CarouselFrame.svelte';
  import Card from '../card/Card.svelte';
  import Button from '../button/Button.svelte';
</script>

<Carousel>
  <CarouselFrame>
    <Card title="Some Section" comfySides>
      <p>Card 1 - this card has some more text in it to demonstrate wrapping</p>
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
