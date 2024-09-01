import { ReusedTable } from '@shared/components';
import { IEvents } from 'src/entities/events-entiti';
import { columns, dataDefault } from '../configs/events-table-columns';

export const EventsTable = (data: IEvents | undefined) => {
  return (
    <ReusedTable
      key='eventsTable'
      rowKey='id'
      columns={columns}
      dataSource={(data && data.content) || dataDefault.content}
      scroll={{ x: 'max-content' }}
    />
  );
};
