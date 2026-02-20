import { render, screen, fireEvent } from '@testing-library/svelte';
import { describe, it, expect, vi } from 'vitest';
import Button from './Button.svelte';

describe('Button', () => {
  it('renders a button with a label', () => {
    render(Button, { label: 'Click Me' });
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click Me');
  });

  it('renders as a link when href is provided', () => {
    render(Button, { label: 'Link', href: 'https://google.com' });
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://google.com');
  });

  it('applies the correct class for secondary mode', () => {
    render(Button, { label: 'Secondary', mode: 'secondary' });
    const button = screen.getByRole('button');
    expect(button).toHaveClass('button--secondary');
  });

  it('emits a click event when clicked', async () => {
    const handleClick = vi.fn();
    render(Button, { label: 'Click Me', onclick: handleClick });

    const button = screen.getByRole('button');
    await fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });
});
