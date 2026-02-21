import { render, screen, fireEvent } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import CarouselTest from './CarouselTest.svelte';

describe('Carousel', () => {
  it('renders correctly with multiple frames', () => {
    const { container } = render(CarouselTest);

    // Check for frames
    expect(screen.getByText('Frame 1')).toBeInTheDocument();
    expect(screen.getByText('Frame 2')).toBeInTheDocument();
    expect(screen.getByText('Frame 3')).toBeInTheDocument();

    // Check for indicators (3 spans)
    const indicators = container.querySelectorAll('.indicator');
    expect(indicators.length).toBe(3);

    // First indicator should be active
    expect(indicators[0]).toHaveClass('indicator--active');
  });

  it('navigates to next frame when clicking next button', async () => {
    const { container } = render(CarouselTest);
    const nextButton = container.querySelector(
      '.button--next button',
    ) as HTMLButtonElement;

    await fireEvent.click(nextButton);

    const indicators = container.querySelectorAll('.indicator');
    expect(indicators[0]).not.toHaveClass('indicator--active');
    expect(indicators[1]).toHaveClass('indicator--active');
  });

  it('navigates to prev frame when clicking prev button (wraps around)', async () => {
    const { container } = render(CarouselTest);
    const prevButton = container
      .querySelectorAll('.button')[0]
      .querySelector('button') as HTMLButtonElement;

    await fireEvent.click(prevButton);

    const indicators = container.querySelectorAll('.indicator');
    // From 0 to 2 (last)
    expect(indicators[2]).toHaveClass('indicator--active');
  });
});
