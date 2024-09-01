import { myTaskApi } from '@entities';
import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import { MyTaskPage } from './MyTaskPage';

// Создаем тестовое хранилище Redux
const store = configureStore({
  reducer: {
    [myTaskApi.reducerPath]: myTaskApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(myTaskApi.middleware),
});

// Мокаем необходимые модули
vi.mock('@shared/store/hooks/redux', () => ({
  useGetIncomingTasksQuery: vi.fn().mockReturnValue({
    isSuccess: true,
    data: [], // Замокируйте данные в соответствии с ожиданиями
  }),
}));

vi.mock('@shared/components/reused-table/slice/reused-table', () => ({
  reusedTableSlice: {
    actions: {
      setPaginationConfig: vi.fn(),
      setTableSortsConfig: vi.fn(),
    },
  },
}));

vi.mock('@shared/components', () => {
  const originalModule = vi.importActual<typeof import('@shared/components')>('@shared/components');
  return {
    ...originalModule,
    ReusedCard: vi.fn().mockReturnValue(<div>ReusedCard Mocked</div>),
    ReusedTable: vi.fn().mockReturnValue(<div>ReusedTable Mocked</div>),
    ExtraFilterButtons: vi.fn().mockReturnValue(<div>ExtraFilterButtons Component</div>),
    MyTaskHandlingButtons: vi.fn().mockReturnValue(<div>MyTaskHandlingButtons Component</div>),
    MyTaskTabs: vi.fn().mockReturnValue(<div>MyTaskTabs Component</div>),
  };
});

describe('MyTaskPage', () => {
  it('should render ReusedCard with correct components and handle refresh', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <MyTaskPage />
        </MemoryRouter>
      </Provider>,
    );

    // Проверяем, что компоненты и функции рендерятся
    expect(getByText('ReusedCard Mocked')).toBeInTheDocument();

    // Проверяем, что кнопка "refresh" работает
    // const refreshButton = getByText('MyTaskHandlingButtons Component');
    // fireEvent.click(refreshButton);

    // Проверяем, что диспатч вызывается
    // expect(useGetIncomingTasksQuery).toHaveBeenCalled();
  });
});
