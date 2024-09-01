import { useGetIncomingTasksQuery } from '@entities';
import { ReusedTable } from '@shared/components';
import { useEffect } from 'react';
import { columns, dataDefault } from '../configs/my-task-table-columns';

export const IncomingTaskTable = ({ refetchTrigger }: { refetchTrigger: false | (() => void) }) => {
  const { data, isLoading, refetch } = useGetIncomingTasksQuery({});

  useEffect(() => {
    if (refetchTrigger) {
      refetch();
    }
  }, [refetchTrigger, refetch]);

  return (
    <ReusedTable
      key='incomingTaskTable'
      rowKey='id'
      loadingTable={isLoading}
      columns={columns}
      dataSource={data || dataDefault.content}
      scroll={{ x: 'max-content' }}
    />
  );
};
