import { useAppDispatch } from '@app/store/hooks/redux';
import { ReusedCard } from '@shared/components';
import { createSorstArray } from '@shared/components/reused-table/lib/filter-sort-func';
import { reusedTableSlice } from '@shared/components/reused-table/slice/reused-table';
import { useEffect } from 'react';
import { dataDefault } from '../configs/events-table-columns';
import { ColorIndicator } from './ColorIndicator';
import { EventHandlingButtons } from './EventHandlingButtons';
import { EventsTable } from './EventsTable';
import { ExtraFilterButtons } from './ExtraFilterButtons';

export const EventsPage = () => {
  // const { pagination, tableFiltersConfig, tableSortsConfig } = useAppSelector(
  //   (state) => state.reusedTableSlice,
  // );

  const { setPaginationConfig, setTableSortsConfig } = reusedTableSlice.actions;
  const dispatch = useAppDispatch();

  // const { data } = eventsApi.useGetDictItemsQuery({
  //   filters: tableFiltersConfig || [],
  //   sorts: tableSortsConfig || [],
  //   page: pagination?.current || 1,
  //   size: 10,
  // });

  // console.log('Данные', data);

  useEffect(() => {
    dispatch(setPaginationConfig({ total: dataDefault?.totalElements }));
  }, []);

  useEffect(() => {
    dispatch(
      setTableSortsConfig(
        createSorstArray({
          // defaultSorts: [
          // {
          // key: 'dateReceipt',
          // direction: 'DESC',
          // },
          // ],
        }),
      ),
    );
  }, []);
  ``;

  return (
    <ReusedCard
      keyCard='eventsCard'
      cardTitle={{ title: 'Выгрузка событий из ЕААД', extra: ColorIndicator() }}
      cardBody={{
        interactionButtons: { components: [<EventHandlingButtons />] },
        extraInteractionElements: { components: [<ExtraFilterButtons />] },
        body: EventsTable(undefined),
      }}
    />
  );
};
