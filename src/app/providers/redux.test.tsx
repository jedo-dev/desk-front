import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { withReduxProvider } from './redux'; // Импортируем HOC
const TestComponent = () => <div>Test Content</div>;

const WrappedComponent = withReduxProvider(TestComponent);

describe('withReduxProvider', () => {
  it('должен оборачивать компонент в withReduxProvider', () => {
    const screen = render(<WrappedComponent />);

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
