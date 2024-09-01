import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { withAntdProvider } from './antd';

const TestComponent = () => <div>Test Content</div>;

const WrappedComponent = withAntdProvider(TestComponent);

describe('withAntdProvider', () => {
  it('должен оборачивать компонент в ConfigProvider', () => {
    const screen = render(<WrappedComponent />);

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
