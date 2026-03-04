import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import { axe } from 'vitest-axe';
import Colours from './Colours.svelte';

describe('Colours', () => {
  it('renders without crashing', () => {
    const { container } = render(Colours);
    expect(container).toBeInTheDocument();
    expect(screen.getByText('Primary')).toBeInTheDocument();
    expect(screen.getByText('Secondary')).toBeInTheDocument();
  });

  it('should have no accessibility violations', async () => {
    const { container } = render(Colours);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
