import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { createMemoryRouter } from 'react-router-dom';
import { withRouter } from './with-router';

// Мокаем @pages и routerConfig
vi.mock('@pages', () => ({
  default: createMemoryRouter([
    {
      path: '/',
      element: <div>Test Component</div>, // Этот компонент будет рендериться на странице "/"
    },
  ]),
}));

describe('withRouter', () => {
  it('должен оборачивать компонент в withRouterProvider', () => {
    const MockComponent = () => <div>Test Component</div>;

    const WrappedComponent = withRouter(MockComponent);

    const screen = render(<WrappedComponent />);

    expect(screen.getByText('Test Component')).toBeInTheDocument();
  });
});
