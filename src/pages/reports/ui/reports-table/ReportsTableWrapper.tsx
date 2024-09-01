import { useAppSelector } from '@app/store/hooks/redux';
import { useGetReportsQuery } from '@entities';
import { ReusedTable } from '@shared/components';
import { reportsColumns } from '../../config/reports-columns';

export const ReportsTableWrapper = () => {
  //? Не делаем запрос при маунте. Ждем когда форма сама инициирует рефетч при заполнении селекторов
  const { filter } = useAppSelector((state) => state.reportSliceReducer);
  const { data, isLoading, isFetching, error } = useGetReportsQuery(filter, {});

  return (
    <ReusedTable
      keyTable='eventsTable'
      rowKey='id'
      columns={reportsColumns}
      loadingTable={isFetching}
      dataSource={data?.content || []}
      scroll={{ x: 'max-content' }}
    />
  );
};
