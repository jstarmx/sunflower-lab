<script>
  export let path;
  export let background = '';
</script>

<style>
  .circle {
    border-radius: 50%;
    color: white;
    display: inline-flex;
    padding: var(--unit-x2);
  }

  .circle--white {
    background-color: rgba(255, 255, 255, 0.25);
  }

  .circle--black {
    background-color: rgba(0, 0, 0, 0.25);
  }

  svg {
    fill: currentColor;
    height: 1.25em;
    width: 1.25em;
    vertical-align: middle;
  }
</style>

<span class={`${background ? `circle circle--${background}` : ''}`}>
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <path d={path} />
  </svg>
</span>
