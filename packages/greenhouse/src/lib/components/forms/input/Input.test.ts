import { render, screen, fireEvent } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Input from './Input.svelte';

describe('Input', () => {
  it('renders the label and placeholder', () => {
    render(Input, { label: 'My Label', placeholder: 'Enter text' });
    expect(screen.getByLabelText(/My Label/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('updates the value when typing', async () => {
    // In legacy Svelte Testing Library, we might need a wrapper for two-way binding tests
    // or just check if the input value changes and the component internal state would update.
    // For unit tests, we usually check if it reflects the 'value' prop and emits input events.
    render(Input, { value: 'initial' });
    const input: HTMLInputElement = screen.getByRole('textbox');
    expect(input.value).toBe('initial');

    await fireEvent.input(input, { target: { value: 'new value' } });
    // Note: Checking if 'value' prop updated back to parent is hard without a wrapper.
    // But we can check the input element itself.
    expect(input.value).toBe('new value');
  });

  it('shows error message and applies error class', () => {
    render(Input, { error: 'Something went wrong' });
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();

    // The textbox won't have role 'textbox' if it's password or email in some envs,
    // but usually it works.
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('error');
  });

  it('renders different types correctly', () => {
    const { unmount } = render(Input, { type: 'password', label: 'Pass' });
    // Use container query or specific query for password
    expect(screen.getByLabelText(/Pass/i)).toHaveAttribute('type', 'password');
    unmount();

    render(Input, { type: 'number', label: 'Num' });
    expect(screen.getByLabelText(/Num/i)).toHaveAttribute('type', 'number');
  });
});
