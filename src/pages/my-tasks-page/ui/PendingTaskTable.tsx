import { useGetPendingTasksQuery } from '@entities';
import { ReusedTable } from '@shared/components';
import { useEffect } from 'react';
import { columns, dataDefault } from '../configs/my-task-table-columns';

export const PendingTaskTable = ({ refetchTrigger }: { refetchTrigger: false | (() => void) }) => {
  const { data, isLoading, refetch } = useGetPendingTasksQuery({});

  useEffect(() => {
    if (refetchTrigger) {
      refetch();
    }
  }, [refetchTrigger, refetch]);

  return (
    <ReusedTable
      key='pendingTaskTable'
      rowKey='id'
      loadingTable={isLoading}
      columns={columns}
      dataSource={data || dataDefault.content}
      scroll={{ x: 'max-content' }}
    />
  );
};
