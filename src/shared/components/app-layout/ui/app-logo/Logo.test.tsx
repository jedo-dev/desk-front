import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import Logo from './Logo';

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
  it('Должен рендерится логотип без надписи', async () => {
    const screen = render(
      <MemoryRouter>
        <Logo collapsed={true} />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.queryByText(/Росэнергоатом/i)).not.toBeInTheDocument();
    });
  });

  it('Должен рендерится логотип с надписью', async () => {
    const screen = render(<Logo collapsed={false} />);

    await waitFor(() => {
      expect(screen.getByText('Росэнергоатом')).toBeInTheDocument();
    });
  });
});
