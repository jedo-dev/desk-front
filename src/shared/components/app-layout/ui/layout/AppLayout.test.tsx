import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import { AppLayout } from './AppLayout';

const mockedUseNavigate = vi.fn();

//? Мокаем хук useNavigate
vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...mod,
    useNavigate: () => mockedUseNavigate,
  };
});

describe('ReportsForm', async () => {
  it('Должно рендериться имя проекта', async () => {
    const screen = render(
      <MemoryRouter>
        <AppLayout projectName='Test project' sidebarMenu={<div>sidebar</div>} />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.queryByText(/Test project/i)).toBeInTheDocument();
    });
  });

  it('Должен рендериться сайдбар', async () => {
    const screen = render(
      <MemoryRouter>
        <AppLayout projectName='Test project' sidebarMenu={<div>sidebar</div>} />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.queryByText(/sidebar/i)).toBeInTheDocument();
    });
  });
});
