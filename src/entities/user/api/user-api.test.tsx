import { configureStore } from '@reduxjs/toolkit';
import { renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, expect, it, vi } from 'vitest';
import { userItem } from '../mocks/mock-user';
import { useGetCurrentUserQuery, userApi } from './user-api';

vi.mock('@shared/api', () => ({
  axiosBaseQuery:
    () =>
    async ({ url }: any) => {
      if (url === '/current-user') {
        return { data: userItem };
      }
      return { data: null };
    },
}));

const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
});

describe('menuApi', () => {
  it('should return mocked user item', async () => {
    const { result } = renderHook(() => useGetCurrentUserQuery({}), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.data).toEqual(userItem);
  });
});
