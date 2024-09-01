import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { withProviders } from './index';

vi.mock('./antd', () => ({
  withAntdProvider: (component: () => React.ReactNode) => () =>
    <div data-testid='antd-provider'>{component()}</div>,
}));

vi.mock('./redux', () => ({
  withReduxProvider: (component: () => React.ReactNode) => () =>
    <div data-testid='redux-provider'>{component()}</div>,
}));

vi.mock('./with-router', () => ({
  withRouter: (component: () => React.ReactNode) => () =>
    <div data-testid='router-provider'>{component()}</div>,
}));

describe('withProviders HOC', () => {
  it('should wrap component with all providers in correct order', () => {
    const MockComponent = () => <div>Test Component</div>;

    const WrappedComponent = withProviders(MockComponent);

    const { getByText, getByTestId } = render(<WrappedComponent />);

    expect(getByTestId('antd-provider')).toBeInTheDocument();
    expect(getByTestId('redux-provider')).toBeInTheDocument();
    expect(getByTestId('router-provider')).toBeInTheDocument();
    expect(getByText('Test Component')).toBeInTheDocument();
  });
});
