import '@testing-library/jest-dom';
import { matchMediaConfig } from '@shared/test-configs/window-match-media';
import { describe, expect, it } from 'vitest';
import {
  setActualRecord,
  setLoadingTable,
  setPaginationConfig,
  setTableFiltersConfig,
  setTableSortsConfig,
} from './reused-table';
import { store } from '@app/providers/redux';
import { waitFor } from '@testing-library/react';

matchMediaConfig;

const mokRecord = {
  field1: 'test',
  field2: true,
  field3: 1,
};

describe('reused-table-slice', () => {
  it('селектор setLoadingTable записывает корреткное значение', async () => {
    store.dispatch(setLoadingTable(true));

    const mokLoadingTable = store.getState().reusedTableReducer.loadingTable;

    await waitFor(() => {
      expect(mokLoadingTable).toBe(true);
    });
  });

  it('селектор setTableFiltersConfig записывает корреткное значение', async () => {
    store.dispatch(
      setTableFiltersConfig({
        filtersArray: [
          {
            field_type: 'test',
            key: 'test',
            operator: 'test',
          },
        ],
        incomingKeys: ['test'],
      }),
    );

    store.dispatch(
      setTableFiltersConfig({
        filtersArray: [
          {
            field_type: 'test1',
            key: 'test1',
            operator: 'test1',
          },
        ],
        incomingKeys: ['test1'],
      }),
    );

    const mokTableFiltersConfig = store.getState().reusedTableReducer.tableFiltersConfig;

    await waitFor(() => {
      expect(mokTableFiltersConfig).toStrictEqual([
        { field_type: 'test', key: 'test', operator: 'test' },
        { field_type: 'test1', key: 'test1', operator: 'test1' },
      ]);
    });
  });

  it('селектор setTableSortsConfig записывает корреткное значение', async () => {
    store.dispatch(
      setTableSortsConfig({
        key: 'test',
        direction: 'asc',
      }),
    );

    store.dispatch(
      setTableSortsConfig({
        key: 'test1',
        direction: 'desc',
      }),
    );

    store.dispatch(
      setTableSortsConfig({
        key: 'test1',
      }),
    );

    const mokTableSortsConfig = store.getState().reusedTableReducer.tableSortsConfig;

    await waitFor(() => {
      expect(mokTableSortsConfig).toStrictEqual([
        {
          direction: 'asc',
          key: 'test',
        },
      ]);
    });
  });

  it('селектор setPaginationConfig записывает корреткное значение', async () => {
    store.dispatch(
      setPaginationConfig({
        current: 1,
        pageSize: 10,
        showSizeChanger: false,
        hideOnSinglePage: true,
      }),
    );
    store.dispatch(
      setPaginationConfig({
        current: 2,
        total: 10,
      }),
    );

    const mokPaginationConfig = store.getState().reusedTableReducer.pagination;

    await waitFor(() => {
      expect(mokPaginationConfig).toStrictEqual({
        showTotal: mokPaginationConfig?.showTotal,
        current: 2,
        pageSize: 10,
        showSizeChanger: false,
        hideOnSinglePage: true,
        total: 10,
      });
    });
  });

  it('селектор setActualRecord записывает корреткное значение', async () => {
    store.dispatch(setActualRecord(mokRecord));

    const mokActualRecord = store.getState().reusedTableReducer.actualRecord;

    await waitFor(() => {
      expect(mokActualRecord).toStrictEqual(mokRecord);
    });
  });
});
