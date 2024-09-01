import { IReusedTable } from './model/reused-table.model';
import {
  setPaginationConfig,
  setTableFiltersConfig,
  setTableSortsConfig,
} from './slice/reused-table';
import { Table } from 'antd';
import { createFiltersArray, createSorstArray } from './lib/filter-sort-func';
import { CaretDownOutlined, CaretRightOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@app/store/hooks/redux';

type onChangeTableProps = {
  props: IReusedTable;
  pagination?: any;
  filters?: any;
  sorts?: any;
  dispatch?: any;
};

export const onChangeTable = ({
  props,
  pagination,
  filters,
  sorts,
  dispatch,
}: onChangeTableProps) => {
  if (props.nonServerPagination) {
    dispatch(
      setPaginationConfig({
        current: pagination.current,
      }),
    );
  } else {
    dispatch(setPaginationConfig(pagination));
    dispatch(setTableFiltersConfig(createFiltersArray({ filters: filters })));
    dispatch(
      setTableSortsConfig(
        createSorstArray({
          sorts: {
            order: (sorts && 'order' in sorts && sorts['order']) || undefined,
            field: (sorts && 'field' in sorts && sorts['field']?.toString()) || '',
          },
        }),
      ),
    );
  }
};

export const ReusedTable: React.FC<IReusedTable> = (props) => {
  const dispatch = useAppDispatch();
  const { pagination } = useAppSelector((state) => state.reusedTableReducer);

  return (
    <Table
      style={{ overflowX: 'auto' }}
      key={props.keyTable}
      columns={props.columns}
      dataSource={props.dataSource}
      scroll={props.scroll}
      rowKey={props.rowKey}
      sticky={props.sticky || false}
      bordered={props.bordered || true}
      loading={props.loadingTable || false}
      pagination={pagination}
      onChange={
        (pagination, filters, sorts) =>
          onChangeTable({
            props: props,
            pagination: pagination,
            filters: filters,
            sorts: sorts,
            dispatch: dispatch,
          })
        //   {
        //   if (props.nonServerPagination) {
        //     dispatch(
        //       setPaginationConfig({
        //         current: pagination.current,
        //       }),
        //     );
        //   } else {
        //     dispatch(setPaginationConfig(pagination));
        //     dispatch(setTableFiltersConfig(createFiltersArray({ filters: filters })));
        //     dispatch(
        //       setTableSortsConfig(
        //         createSorstArray({
        //           sorts: {
        //             order: ('order' in sorts && sorts['order']) || undefined,
        //             field: ('field' in sorts && sorts['field']?.toString()) || '',
        //           },
        //         }),
        //       ),
        //     );
        //   }
        // }
      }
      expandable={
        (props.expandableConfig?.expandable && {
          expandedRowRender: (record) => {
            if (props.expandableConfig?.expandableRender) {
              return props.expandableConfig?.expandableRender(
                record,
                props.expandableConfig.expandableColumns,
              );
            }
          },
          columnWidth: props.expandableConfig?.columnWidth ?? 30,
          expandIcon: ({ expanded, onExpand, record }) =>
            expanded ? (
              <CaretDownOutlined onClick={(e) => onExpand(record, e)} />
            ) : (
              <CaretRightOutlined onClick={(e) => onExpand(record, e)} />
            ),
        }) ||
        undefined
      }
    />
  );
};
