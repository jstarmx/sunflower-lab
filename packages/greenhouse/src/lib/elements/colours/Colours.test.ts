import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Colours from './Colours.svelte';

describe('Colours', () => {
  it('renders without crashing', () => {
    const { container } = render(Colours);
    expect(container).toBeInTheDocument();
    // Check for some text that should be there
    expect(screen.getByText('Primary')).toBeInTheDocument();
    expect(screen.getByText('Secondary')).toBeInTheDocument();
  });
});
