<style>
  .container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-gap: var(--unit);
    padding: var(--unit-x3);
    height: 100%;
  }
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.5vw solid transparent;
  }
  .large-text {
    font-size: 36px;
  }
  .primary {
    background-color: var(--primary);
    color: var(--white);
  }
  .primary-light {
    background-color: var(--primary-light);
  }
  .primary-dark {
    background-color: var(--primary-dark);
    color: var(--white);
  }
  .primary-inverse {
    border-color: var(--primary-inverse);
    color: var(--primary-inverse);
  }
  .secondary {
    background-color: var(--secondary);
  }
  .secondary-light {
    background-color: var(--secondary-light);
  }
  .secondary-dark {
    background-color: var(--secondary-dark);
  }
  .secondary-inverse {
    border-color: var(--secondary-inverse);
    color: var(--secondary-inverse);
  }
  .tertiary {
    background-color: var(--tertiary);
  }
  .tertiary-light {
    background-color: var(--tertiary-light);
  }
  .tertiary-dark {
    background-color: var(--tertiary-dark);
  }
  .tertiary-inverse {
    border-color: var(--tertiary-inverse);
    color: var(--tertiary-inverse);
  }
  .mono {
    background-color: var(--mono);
  }
  .mono-light {
    background-color: var(--mono-light);
  }
  .mono-dark {
    background-color: var(--mono-dark);
    color: var(--white);
  }
  .mono-inverse {
    border-color: var(--mono-inverse);
    color: var(--mono-inverse);
  }
  .heading {
    background-color: var(--faint);
  }
</style>

<div class="container">
  <div class="item" />
  <div class="item heading">Inverse</div>
  <div class="item heading">Light</div>
  <div class="item heading">Default</div>
  <div class="item heading">Dark</div>
  <div class="item heading">Primary</div>
  <div class="item primary-inverse">
    <span>
      a
      <span class="large-text">a</span>
    </span>
  </div>
  <div class="item primary-light">
    <span>
      a
      <span class="large-text">a</span>
    </span>
  </div>
  <div class="item primary">
    <span>
      a
      <span class="large-text">a</span>
    </span>
  </div>
  <div class="item primary-dark">
    <span>
      a
      <span class="large-text">a</span>
    </span>
  </div>
  <div class="item heading">Secondary</div>
  <div class="item secondary-inverse">
    <span>
      a
      <span class="large-text">a</span>
    </span>
  </div>
  <div class="item secondary-light">
    <span>
      a
      <span class="large-text">a</span>
    </span>
  </div>
  <div class="item secondary">
    <span>
      a
      <span class="large-text">a</span>
    </span>
  </div>
  <div class="item secondary-dark">
    <span>
      a
      <span class="large-text">a</span>
    </span>
  </div>
  <div class="item heading">Tertiary</div>
  <div class="item tertiary-inverse">
    <span>
      a
      <span class="large-text">a</span>
    </span>
  </div>
  <div class="item tertiary-light">
    <span>
      a
      <span class="large-text">a</span>
    </span>
  </div>
  <div class="item tertiary">
    <span>
      a
      <span class="large-text">a</span>
    </span>
  </div>
  <div class="item tertiary-dark">
    <span>
      a
      <span class="large-text">a</span>
    </span>
  </div>
  <div class="item heading">Monochrome</div>
  <div class="item mono-inverse">
    <span>
      a
      <span class="large-text">a</span>
    </span>
  </div>
  <div class="item mono-light">
    <span>
      a
      <span class="large-text">a</span>
    </span>
  </div>
  <div class="item mono">
    <span>
      a
      <span class="large-text">a</span>
    </span>
  </div>
  <div class="item mono-dark">
    <span>
      a
      <span class="large-text">a</span>
    </span>
  </div>
</div>
