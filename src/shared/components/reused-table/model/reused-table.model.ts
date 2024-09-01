import { TableProps } from 'antd';
import { FilterValue } from 'antd/es/table/interface';
import { IStations } from 'src/entities/stations';

export interface IReusedTable {
  keyTable: string;
  rowKey: string;
  columns: TableProps['columns'];
  dataSource: TableProps['dataSource'];
  data_testid?: string | number;
  pagination?: {
    current?: number;
    pageSize?: number;
    showSizeChanger?: boolean;
    hideOnSinglePage?: boolean;
    total?: number;
    showTotal?: (total: number, range: [number, number]) => React.ReactNode;
  };
  tableFiltersConfig?: {
    field_type: string;
    key: string;
    operator: string;
    value?: boolean | React.Key;
    values?: FilterValue;
  }[];
  tableSortsConfig?: {
    key: string;
    direction: string;
  }[];
  nonServerPagination?: boolean;
  sticky?: boolean;
  bordered?: boolean;
  loadingTable?: boolean;
  scroll?: {
    x?: number | true | string;
    y?: number | string;
  };
  expandableConfig?: {
    expandable?: boolean;
    expandableColumns?: TableProps['columns'];
    expandableRender?: (record: unknown, columns: TableProps['columns']) => React.ReactNode;
    columnWidth?: number;
    expandIcon?: (props: TableProps['expandable']) => React.ReactNode;
  };
  actualRecord?: any;
}
