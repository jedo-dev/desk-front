import '@testing-library/jest-dom';
import { fireEvent, render, waitFor } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import { SideMenu } from './SideMenu';
const mockedUseNavigate = vi.fn();

//? Мокаем хук useGetMenuQuery
vi.mock('@entities', () => ({
  useGetMenuQuery: vi.fn().mockReturnValue({
    data: [
      { key: '/home', label: 'Home' },
      { key: '/about', label: 'About' },
    ],
    isSuccess: true,
  }),
}));

//? Мокаем хук useNavigate
vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...mod,
    useNavigate: () => mockedUseNavigate,
  };
});

describe('SideMenu', async () => {
  it('меню должно отрендерится корректно, основываясь на данных их хука useGetMenuQuery', async () => {
    const screen = render(
      <MemoryRouter>
        <SideMenu />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('About')).toBeInTheDocument();
    });
  });

  it('useNavigate должен вызваться после нажатия на menuItem', async () => {
    const screen = render(
      <MemoryRouter>
        <SideMenu />
      </MemoryRouter>,
    );

    const menuItems = screen.getAllByRole('menuitem');

    fireEvent.click(menuItems[0]);
    expect(mockedUseNavigate).toBeCalled();
  });
});
