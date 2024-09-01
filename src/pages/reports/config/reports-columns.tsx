import { TableProps } from 'antd';

export const reportsColumns: TableProps['columns'] = [
  {
    key: 'report',
    title: 'Отчеты для выбора',
    dataIndex: 'report',
    align: 'start',
    render: (_, record) => `объект для запроса: ${JSON.stringify(record)}`,
  },
  // {
  //   key: 'actions',
  //   title: 'Действия',
  //   dataIndex: 'id',
  //   align: 'center',
  //   render: (_, record) => {
  //     const dispatch = useAppDispatch();
  //     const { setActualRecord } = reusedTableSlice.actions;
  //     const { setOpen } = reusedModalWithFormSlice.actions;

  //     return (
  //       <Flex gap='small' justify='center'>
  //         <EditButton
  //           onClick={() => {
  //             console.log('Запись', record);
  //             dispatch(setActualRecord(record));
  //             dispatch(setOpen(true));
  //           }}
  //           showButton={true}
  //         />
  //       </Flex>
  //     );
  //   },
  // },
];
