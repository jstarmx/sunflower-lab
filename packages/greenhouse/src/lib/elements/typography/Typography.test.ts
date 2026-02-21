import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Typography from './Typography.svelte';

describe('Typography', () => {
  it('renders without crashing', () => {
    const { container } = render(Typography);
    expect(container).toBeInTheDocument();
    // Check for some headings
    expect(screen.getByText('Heading 1')).toBeInTheDocument();
    expect(screen.getByText('Heading 2')).toBeInTheDocument();
  });
});
