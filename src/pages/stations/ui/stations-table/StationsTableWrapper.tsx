import { ReusedTable } from '@shared/components';
import { stationsColumns } from '../../configs/stations-columns';
import { TableProps } from 'antd';

export const StationsTableWapper: React.FC<{
  dataSource: TableProps['dataSource'];
}> = (props) => {
  return (
    <ReusedTable
      keyTable='eventsTable'
      rowKey='id'
      columns={stationsColumns}
      dataSource={props.dataSource}
      scroll={{ x: 'max-content' }}
    />
  );
};
