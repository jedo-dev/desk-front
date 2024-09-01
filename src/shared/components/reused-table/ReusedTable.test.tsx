import '@testing-library/jest-dom';
import { matchMediaConfig } from '@shared/test-configs/window-match-media';
import { describe, expect, it } from 'vitest';
import { onChangeTable } from './ReusedTable';
import { store } from '@app/providers/redux';
import { waitFor } from '@testing-library/react';
matchMediaConfig;

describe('ReusedTable', () => {
  it('Функция onChangeTable отработала корректно с параметром nonServerPagination', () => {
    onChangeTable({
      props: {
        keyTable: '',
        rowKey: '',
        columns: undefined,
        dataSource: undefined,
        nonServerPagination: true,
      },
      pagination: {
        current: 1,
      },
      dispatch: store.dispatch,
    });

    const mokPaginaton = store.getState().reusedTableReducer.pagination;

    expect(mokPaginaton).toStrictEqual({
      showTotal: mokPaginaton?.showTotal,
      current: 1,
      pageSize: 10,
      showSizeChanger: false,
      hideOnSinglePage: true,
    });
  });

  it('Функция onChangeTable отработала корректно без параметра nonServerPagination', () => {
    onChangeTable({
      props: {
        keyTable: '',
        rowKey: '',
        columns: undefined,
        dataSource: undefined,
      },
      pagination: {
        current: 1,
      },
      dispatch: store.dispatch,
    });

    const mokPaginaton = store.getState().reusedTableReducer.pagination;

    const mokFilters = store.getState().reusedTableReducer.tableFiltersConfig;

    const mokSorts = store.getState().reusedTableReducer.tableSortsConfig;

    waitFor(() => {
      expect(mokPaginaton).toStrictEqual({
        showTotal: mokPaginaton?.showTotal,
        current: 1,
        pageSize: 10,
        showSizeChanger: false,
        hideOnSinglePage: true,
      });
      expect(mokFilters).toStrictEqual([]);
      expect(mokSorts).toStrictEqual([]);
    });
  });
});
