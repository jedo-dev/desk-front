import { Checkbox, TableProps } from 'antd';

import { EditButtonRender } from '../lib/EditButtonRender';

export const reactorTypesColumns: TableProps['columns'] = [
  {
    key: 'code_name',
    title: 'Код реактора',
    dataIndex: 'code_name',
    align: 'center',
    filters: [
      {
        text: 'КОЛ АЭС',
        value: 'КОЛ АЭС',
      },
      {
        text: 'БЕЛ АЭС',
        value: 'БЕЛ АЭС',
      },
    ],
    onFilter: (value, record) => record.code_name.indexOf(value) === 0,
  },
  {
    key: 'full_name',
    title: 'Наименование',
    dataIndex: 'full_name',
    align: 'center',
    filters: [
      {
        text: 'Кольская АЭС',
        value: 'Кольская АЭС',
      },
      {
        text: 'Белоярская АЭС',
        value: 'Белоярская АЭС',
      },
    ],
    onFilter: (value, record) => record.code_name.indexOf(value) === 0,
    sorter: (a, b) => a.full_name.length - b.full_name.length,
  },
  {
    key: 'description',
    title: 'Описание',
    dataIndex: 'description',
    align: 'center',
    sorter: (a, b) => a.description.length - b.description.length,
  },
  {
    key: 'is_active',
    title: 'Активный',
    dataIndex: 'is_active',
    align: 'center',
    render: (_, record) => {
      return <Checkbox defaultChecked={record.is_active} disabled></Checkbox>;
    },
  },
  {
    key: 'actions',
    title: 'Действия',
    dataIndex: 'id',
    align: 'center',
    render: (_, record) => <EditButtonRender record={record} />,
  },
];
