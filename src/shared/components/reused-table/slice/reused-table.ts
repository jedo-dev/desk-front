import { TableProps } from 'antd';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IReusedTable } from '../model/reused-table.model';

const initialState: IReusedTable = {
  columns: [],
  dataSource: [],
  keyTable: 'initial',
  rowKey: 'initial',
  pagination: {
    current: 1,
    pageSize: 10,
    showSizeChanger: false,
    hideOnSinglePage: true,
  },
  tableFiltersConfig: [],
  tableSortsConfig: [],
};

export const reusedTableSlice = createSlice({
  name: 'reusedTable',
  initialState,
  reducers: {
    setLoadingTable(state, action: PayloadAction<boolean>) {
      state.loadingTable = action.payload;
    },
    setTableFiltersConfig(
      state,
      action: PayloadAction<{
        filtersArray: {
          key: string;
          operator: string;
          field_type: string;
          value?: string | number | boolean | bigint;
          values?: string[] | number[] | boolean[] | bigint[];
        }[];
        incomingKeys: string[];
      }>,
    ) {
      if (action.payload) {
        state.tableFiltersConfig = state.tableFiltersConfig?.filter(
          (elem) => !action.payload.incomingKeys.includes(elem.key),
        );

        state.tableFiltersConfig?.push(...action.payload.filtersArray);
      }
    },
    setTableSortsConfig(
      state,
      action: PayloadAction<
        | {
            key: string;
            direction: string;
          }
        | { key: string }
        | undefined
      >,
    ) {
      if (action.payload) {
        if ('direction' in action.payload) {
          state.tableSortsConfig = state.tableSortsConfig?.filter(
            (element) => element.key !== action.payload?.key,
          );
          state.tableSortsConfig?.push(action.payload);
        } else {
          state.tableSortsConfig = state.tableSortsConfig?.filter(
            (element) => element.key !== action.payload?.key,
          );
        }
      }
    },
    setPaginationConfig(state, action: PayloadAction<TableProps['pagination']>) {
      state.pagination = {
        showTotal: (total, range) => `${range[0]}-${range[1]} из ${total} записей`,
        ...state.pagination,
        ...action.payload,
      };
    },
    setActualRecord(state, action) {
      state.actualRecord = action.payload;
    },
  },
});

export const {
  setLoadingTable,
  setTableFiltersConfig,
  setTableSortsConfig,
  setPaginationConfig,
  setActualRecord,
} = reusedTableSlice.actions;

export const reusedTableReducer = reusedTableSlice.reducer;
