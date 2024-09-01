import { configureStore } from '@reduxjs/toolkit';
import { renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, expect, it, vi } from 'vitest';
import { eventItems } from '../mocks/mock-event';
import { eventsApi, useGetDictItemsQuery } from './events-api';

vi.mock('@shared/api', () => ({
  axiosBaseQuery:
    () =>
    async ({ url }: any) => {
      if (url === '/history-event/filter-with-relations') {
        return { data: eventItems }; // Возвращаем замокированные данныеt
      }
      return { data: null };
    },
}));

const store = configureStore({
  reducer: {
    [eventsApi.reducerPath]: eventsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(eventsApi.middleware),
});

describe('menuApi', () => {
  it('should return mocked menu items', async () => {
    // Рендерим хук
    const { result } = renderHook(() => useGetDictItemsQuery({}), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true); // Дожидаемся, пока запрос завершится
    });

    expect(result.current.data).toEqual(eventItems);
  });
});
