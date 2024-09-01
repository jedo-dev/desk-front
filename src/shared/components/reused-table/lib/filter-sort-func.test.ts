import '@testing-library/jest-dom';
import { matchMediaConfig } from '@shared/test-configs/window-match-media';
import { describe, expect, it, vi } from 'vitest';
import { createFiltersArray, createSorstArray } from './filter-sort-func';
import { waitFor } from '@testing-library/react';
import { store } from '@app/providers/redux';
import { setTableFiltersConfig, setTableSortsConfig } from '../slice/reused-table';

matchMediaConfig;

vi.spyOn(store, 'dispatch');

describe('filter-sort-func', () => {
  it('функция createSorstArray  возвращает корректный массив', async () => {
    const testSorts = createSorstArray({
      sorts: {
        order: 'ascend',
        field: 'full_name',
      },
    });

    const testSorts2 = createSorstArray({
      sorts: {
        order: 'descend',
        field: 'description',
      },
    });

    const testSorts3 = createSorstArray({
      sorts: {
        order: undefined,
        field: 'description',
      },
    });

    const testSorts4 = createSorstArray({
      sorts: {
        order: undefined,
        field: ['description', 'text'],
      },
    });

    const testSorts5 = createSorstArray({
      sorts: {
        order: 'descend',
        field: ['description', 'text'],
      },
    });

    const testSorts6 = createSorstArray({
      sorts: {
        order: 'ascend',
        field: ['description', 'text'],
      },
    });

    store.dispatch(
      setTableSortsConfig(
        createSorstArray({
          sorts: {
            order: 'descend',
            field: 'full_name',
          },
        }),
      ),
    );

    store.dispatch(
      setTableSortsConfig(
        createSorstArray({
          sorts: {
            order: 'ascend',
            field: 'full_name',
          },
        }),
      ),
    );

    store.dispatch(
      setTableSortsConfig(
        createSorstArray({
          sorts: {
            order: 'descend',
            field: 'description',
          },
        }),
      ),
    );

    const mokTableSorst = store.getState().reusedTableReducer.tableSortsConfig;

    await waitFor(() => {
      expect(testSorts).toStrictEqual({
        key: 'full_name',
        direction: 'ASC',
      });

      expect(testSorts2).toStrictEqual({
        key: 'description',
        direction: 'DESC',
      });

      expect(testSorts3).toStrictEqual({
        key: 'description',
      });

      expect(testSorts4).toStrictEqual({
        key: 'description.text',
      });

      expect(testSorts5).toStrictEqual({
        key: 'description.text',
        direction: 'DESC',
      });

      expect(testSorts6).toStrictEqual({
        key: 'description.text',
        direction: 'ASC',
      });

      expect(mokTableSorst).toStrictEqual([
        {
          key: 'full_name',
          direction: 'ASC',
        },
        {
          key: 'description',
          direction: 'DESC',
        },
      ]);
    });
  });

  it('функция createFiltersArrays возвращает корректный массив', async () => {
    const testFilters = createFiltersArray({
      filters: {
        code_name: ['БЕЛ АЭС'],
      },
    });

    const testFilters2 = createFiltersArray({
      filters: {
        code_name: ['КОЛ АЭС', 'БЕЛ АЭС'],
      },
    });

    const testFilters3 = createFiltersArray({
      filters: {
        code_name: ['КОЛ АЭС', 'БЕЛ АЭС'],
        full_name: ['Кольская АЭС'],
      },
    });

    const testFilters4 = createFiltersArray({
      filters: {
        is_active: [true],
      },
    });

    const testFilters5 = createFiltersArray({
      filters: {
        number: [1],
      },
    });

    const testFilters6 = createFiltersArray({
      filters: {
        number: [1, 2],
        is_active: [true, false],
      },
    });

    const testFilters7 = createFiltersArray({
      filters: {
        number: [1, 2],
        is_active: [true, false],
      },
      compositeKeys: {
        number: 'number.code',
        is_active: 'is_active.code',
      },
    });

    const testFilters8 = createFiltersArray({
      filters: {
        number: [2],
        is_active: [true],
      },
      compositeKeys: {
        number: 'number.code',
        is_active: 'is_active.code',
      },
    });

    store.dispatch(
      setTableFiltersConfig(
        createFiltersArray({
          filters: {
            code_name: ['БЕЛ АЭС'],
          },
        }),
      ),
    );

    store.dispatch(
      setTableFiltersConfig(
        createFiltersArray({
          filters: {
            code_name: ['БЕЛ АЭС'],
          },
        }),
      ),
    );

    store.dispatch(
      setTableFiltersConfig(
        createFiltersArray({
          filters: {
            code_name: ['КОЛ АЭС', 'БЕЛ АЭС'],
          },
        }),
      ),
    );

    store.dispatch(
      setTableFiltersConfig(
        createFiltersArray({
          filters: {
            code_name: ['КОЛ АЭС', 'БЕЛ АЭС'],
            full_name: ['Кольская АЭС'],
          },
        }),
      ),
    );

    const mokTableFilters = store.getState().reusedTableReducer.tableFiltersConfig;

    await waitFor(() => {
      expect(testFilters).toStrictEqual({
        filtersArray: [
          {
            key: 'code_name',
            operator: 'LIKE',
            field_type: 'STRING',
            value: 'БЕЛ АЭС',
          },
        ],
        incomingKeys: ['code_name'],
      });

      expect(testFilters2).toStrictEqual({
        filtersArray: [
          {
            key: 'code_name',
            operator: 'IN',
            field_type: 'STRING',
            values: ['КОЛ АЭС', 'БЕЛ АЭС'],
          },
        ],
        incomingKeys: ['code_name'],
      });

      expect(testFilters3).toStrictEqual({
        filtersArray: [
          {
            key: 'code_name',
            operator: 'IN',
            field_type: 'STRING',
            values: ['КОЛ АЭС', 'БЕЛ АЭС'],
          },
          {
            key: 'full_name',
            operator: 'LIKE',
            field_type: 'STRING',
            value: 'Кольская АЭС',
          },
        ],
        incomingKeys: ['code_name', 'full_name'],
      });

      expect(testFilters4).toStrictEqual({
        filtersArray: [
          {
            key: 'is_active',
            operator: 'EQUAL',
            field_type: 'BOOLEAN',
            value: true,
          },
        ],
        incomingKeys: ['is_active'],
      });

      expect(testFilters5).toStrictEqual({
        filtersArray: [
          {
            key: 'number',
            operator: 'EQUAL',
            field_type: 'INTEGER',
            value: 1,
          },
        ],
        incomingKeys: ['number'],
      });

      expect(testFilters6).toStrictEqual({
        filtersArray: [
          {
            key: 'number',
            operator: 'IN',
            field_type: 'INTEGER',
            values: [1, 2],
          },
          {
            key: 'is_active',
            operator: 'IN',
            field_type: 'BOOLEAN',
            values: [true, false],
          },
        ],
        incomingKeys: ['number', 'is_active'],
      });

      expect(testFilters7).toStrictEqual({
        filtersArray: [
          {
            key: 'number.code',
            operator: 'IN',
            field_type: 'INTEGER',
            values: [1, 2],
          },
          {
            key: 'is_active.code',
            operator: 'IN',
            field_type: 'BOOLEAN',
            values: [true, false],
          },
        ],
        incomingKeys: ['number.code', 'is_active.code'],
      });

      expect(testFilters8).toStrictEqual({
        filtersArray: [
          {
            key: 'number.code',
            operator: 'EQUAL',
            field_type: 'INTEGER',
            value: 2,
          },
          {
            key: 'is_active.code',
            operator: 'EQUAL',
            field_type: 'BOOLEAN',
            value: true,
          },
        ],
        incomingKeys: ['number.code', 'is_active.code'],
      });

      expect(mokTableFilters).toStrictEqual([
        {
          key: 'code_name',
          operator: 'IN',
          field_type: 'STRING',
          values: ['КОЛ АЭС', 'БЕЛ АЭС'],
        },
        {
          key: 'full_name',
          operator: 'LIKE',
          field_type: 'STRING',
          value: 'Кольская АЭС',
        },
      ]);
    });
  });
});
