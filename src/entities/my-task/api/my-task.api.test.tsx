import { configureStore } from '@reduxjs/toolkit';
import { renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, expect, it, vi } from 'vitest';
import { myIncomingTaskItems } from '../mocks/mock-my-incoming-task-api';
import { myPendingTaskItems } from '../mocks/mock-my-pending-task-items';
import {
  myTaskApi,
  useGetAllTasksQuery,
  useGetIncomingTasksQuery,
  useGetPendingTasksQuery,
} from './my-task-api';

vi.mock('@shared/api', () => ({
  axiosBaseQuery:
    () =>
    async ({ url }: any) => {
      switch (url) {
        case '/task/incoming-tasks':
          return { data: myIncomingTaskItems };
        case '/task/pending-tasks':
          return { data: myPendingTaskItems };
        case '/task/pending-tasks-all':
          return { data: myPendingTaskItems };
        default:
          return { data: null };
      }
    },
}));

const store = configureStore({
  reducer: {
    [myTaskApi.reducerPath]: myTaskApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(myTaskApi.middleware),
});

describe('myTaskApi', () => {
  it('should return array of IIncomingTasks', async () => {
    const { result } = renderHook(() => useGetIncomingTasksQuery({}), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.data).toEqual(myIncomingTaskItems);
  });

  it('should return array of IPendingTasks', async () => {
    const { result } = renderHook(() => useGetPendingTasksQuery({}), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.data).toEqual(myPendingTaskItems);
  });

  it('should return array of IPendingTasks', async () => {
    const { result } = renderHook(() => useGetAllTasksQuery({}), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.data).toEqual(myPendingTaskItems);
  });
});
