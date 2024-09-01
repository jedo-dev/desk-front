import { ReusedTable } from '@shared/components';
import { TableProps } from 'antd';
import { reactorTypesColumns } from '../../configs/reactor-types-columns';

export const ReactorTypesTableWrapper: React.FC<{
  dataSource: TableProps['dataSource'];
}> = (props) => {
  return (
    <ReusedTable
      keyTable='eventsTable'
      rowKey='id'
      columns={reactorTypesColumns}
      dataSource={props.dataSource}
      scroll={{ x: 'max-content' }}
    />
  );
};
