import { ReusedCard } from '@shared/components';
import { useState } from 'react';
import { ExtraFilterButtons } from './ExtraFilterButtons';
import { MyTaskHandlingButtons } from './MyTaskHandlingButtons';
import { MyTaskTabs } from './MyTaskTabs';

export const MyTaskPage = () => {
  // const { pagination, tableFiltersConfig, tableSortsConfig } = useAppSelector(
  //   (state) => state.reusedTableSlice,
  // );
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  // const { setPaginationConfig, setTableSortsConfig } = reusedTableSlice.actions;
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(setPaginationConfig({ total: dataDefault?.totalElements }));
  // }, []);

  // useEffect(() => {
  //   dispatch(
  //     setTableSortsConfig(
  //       createSorstArray({
  //         defaultSorts: [
  //           {
  //             key: 'dateReceipt',
  //             direction: 'DESC',
  //           },
  //         ],
  //       }),
  //     ),
  //   );
  // }, []);
  // ``;

  return (
    <ReusedCard
      keyCard='myTaskCard'
      cardTitle={{ title: 'Мои задачи' }}
      cardBody={{
        interactionButtons: { components: [MyTaskHandlingButtons(handleRefresh)] },
        extraInteractionElements: { components: [<ExtraFilterButtons />] },
        body: MyTaskTabs(handleRefresh),
      }}
    />
  );
};
