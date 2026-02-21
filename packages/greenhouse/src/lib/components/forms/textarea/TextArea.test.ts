import { render, screen, fireEvent } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import TextArea from './TextArea.svelte';

describe('TextArea', () => {
  it('renders the label and placeholder', () => {
    render(TextArea, { label: 'Message', placeholder: 'Type here...' });
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Type here...')).toBeInTheDocument();
  });

  it('reflects the value and updates when typing', async () => {
    render(TextArea, { value: 'initial' });
    const textarea: HTMLTextAreaElement = screen.getByRole('textbox');
    expect(textarea.value).toBe('initial');

    await fireEvent.input(textarea, { target: { value: 'updated text' } });
    expect(textarea.value).toBe('updated text');
  });

  it('applies the rows attribute', () => {
    render(TextArea, { rows: 10 });
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('rows', '10');
  });
});
