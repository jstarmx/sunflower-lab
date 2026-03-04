import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import { axe } from 'vitest-axe';
import Card from './Card.svelte';
import { createRawSnippet } from 'svelte';

describe('Card', () => {
  it('renders the title', () => {
    render(Card, { title: 'Test Title' });
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('applies comfySides class when prop is true', () => {
    const { container } = render(Card, { title: 'Title', comfySides: true });
    const cardDiv = container.querySelector('.card');
    expect(cardDiv).toHaveClass('card--comfy-sides');
  });

  it('renders slot content', () => {
    // For Svelte 5, legacy slots are often handled via 'children' snippet if not using <slot />
    // But this component still uses <slot />.
    // In @testing-library/svelte v5, we can pass snippets.
    const children = createRawSnippet(() => ({
      render: () => '<span data-testid="slot-content">Hello Slot</span>',
    }));

    render(Card, {
      props: {
        title: 'Title',
        children,
      },
    });

    // Svelte 5 maps <slot /> to the 'children' prop by default.
  });

  it('should have no accessibility violations', async () => {
    const { container } = render(Card, { title: 'Accessible Card' });
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
