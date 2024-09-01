import '@testing-library/jest-dom';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { MemoryRouter } from 'react-router-dom';
import AppHeader from './AppHeader';

describe('AppHeader', () => {
  it('имя проекта должно корректно отображаться', async () => {
    const screen = render(
      <MemoryRouter>
        <AppHeader collapsed={false} onCollapse={vi.fn} projectName='Name to test' />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getByText('Name to test')).toBeInTheDocument();
    });
  });

  it('onCollapse должен вызываться при нажатии на кнопку скрытия бокового меню', async () => {
    const onCollapse = vi.fn();

    const screen = render(
      <MemoryRouter>
        <AppHeader collapsed={false} onCollapse={onCollapse} projectName='Name to test' />
      </MemoryRouter>,
    );

    const button = await screen.findByTestId('btn');
    fireEvent.click(button);
    expect(onCollapse).toBeCalled();
  });

  it('иконка должна быть типа "открыть" при collapsed={true}', async () => {
    const onCollapse = vi.fn();

    const screen = render(
      <MemoryRouter>
        <AppHeader collapsed={true} onCollapse={onCollapse} projectName='Name to test' />
      </MemoryRouter>,
    );

    const icon = await screen.findByTestId('unfold-icon');
    expect(icon).toBeInTheDocument();
  });

  it('иконка должна быть типа "закрыть" при collapsed={false}', async () => {
    const onCollapse = vi.fn();

    const screen = render(
      <MemoryRouter>
        <AppHeader collapsed={false} onCollapse={onCollapse} projectName='Name to test' />
      </MemoryRouter>,
    );

    const icon = await screen.findByTestId('fold-icon');
    expect(icon).toBeInTheDocument();
  });
});
