import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Icon from './Icon.svelte';

describe('Icon', () => {
  it('renders the svg with correct path', () => {
    const testPath = 'M10 10h10v10h-10z';
    const { container } = render(Icon, { path: testPath });
    const path = container.querySelector('path');
    expect(path).toHaveAttribute('d', testPath);
  });

  it('applies background class when provided', () => {
    const { container, unmount } = render(Icon, {
      path: '...',
      background: 'white',
    });
    const span = container.querySelector('span');
    expect(span).toHaveClass('circle--white');
    unmount();

    const { container: container2 } = render(Icon, {
      path: '...',
      background: 'black',
    });
    expect(container2.querySelector('span')).toHaveClass('circle--black');
  });

  it('renders without background class if not provided', () => {
    const { container } = render(Icon, { path: '...' });
    const span = container.querySelector('span');
    expect(span).not.toHaveClass('circle');
  });
});
