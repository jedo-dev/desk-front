import { FormOutlined } from '@ant-design/icons';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { IconsMatcher } from './icons-matcher';

describe('Icons.getIcon', () => {
  it('должна вернуть FormOutlined', () => {
    const icon = IconsMatcher.getIcon('FormOutlined');
    const { container } = render(icon);
    expect(container.querySelector('svg')).toBeTruthy();
    expect(icon?.type).toBe(FormOutlined);
  });

  it('должна вернуть null на ненайденное название иконки', () => {
    const icon = IconsMatcher.getIcon('UnknownIcon');
    expect(icon).toBeNull();
  });
});
