import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import { axe } from 'vitest-axe';
import Typography from './Typography.svelte';

describe('Typography', () => {
  it('renders without crashing', () => {
    const { container } = render(Typography);
    expect(container).toBeInTheDocument();
    expect(screen.getByText('Heading 1')).toBeInTheDocument();
    expect(screen.getByText('Heading 2')).toBeInTheDocument();
  });

  it('should have no accessibility violations', async () => {
    const { container } = render(Typography);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
