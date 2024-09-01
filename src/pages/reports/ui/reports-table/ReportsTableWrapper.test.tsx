import { withReduxProvider } from '@app/providers/redux';
import { matchMediaConfig } from '@shared/test-configs/window-match-media';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ReportsTableWrapper } from './ReportsTableWrapper';

const useGetReportsQueryMock = vi.fn().mockReturnValue({
  data: { content: [{}] },
  isFetching: false,
});

matchMediaConfig;

vi.mock('@entities', async () => {
  const mod = await vi.importActual<typeof import('@entities')>('@entities');
  return {
    ...mod,
    useGetReportsQuery: () => useGetReportsQueryMock,
  };
});

describe('ReportsTableWrapper', () => {
  it('Таблица должна отрендериться с валидными данными', () => {
    render(withReduxProvider(() => <ReportsTableWrapper />)());
    expect(screen.getByText('Отчеты для выбора')).toBeInTheDocument();
  });

  // it('Таблица должна отрендериться с валидными данными', async () => {
  //   render(withReduxProvider(() => <ReportsTableWrapper />)());
  //   const { setFilter } = reportSlice.actions;

  //   store.dispatch(setFilter({ test: 'test' }));

  //   // Wait for the mock function to be called
  //   await waitFor(() => {
  //     expect(useGetReportsQueryMock).toHaveBeenCalled();
  //   });
  // });
});
