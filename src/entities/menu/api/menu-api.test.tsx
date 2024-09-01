import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom';
import { renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux'; // Импортируйте Provider как компонент
import { describe, expect, it, vi } from 'vitest';
import { menuItems } from '../mocks/mock-menu-api';
import { menuApi, useGetMenuQuery } from './menu-api';
// Мокаем axiosBaseQuery
vi.mock('@shared/api', () => ({
  axiosBaseQuery:
    () =>
    async ({ url }: any) => {
      if (url === '/menu') {
        return { data: menuItems }; // Возвращаем замокированные данныеt
      }
      return { data: null };
    },
}));

// Создаем тестовое хранилище Redux
const store = configureStore({
  reducer: {
    [menuApi.reducerPath]: menuApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(menuApi.middleware),
});

describe('menuApi', () => {
  it('should return mocked menu items', async () => {
    const { result } = renderHook(() => useGetMenuQuery({}), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true); // Дожидаемся, пока запрос завершится
    });

    expect(result.current.data).toEqual(menuItems);
  });
});
