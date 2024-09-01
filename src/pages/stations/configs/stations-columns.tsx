import { TableProps, Checkbox } from 'antd';

import { EditButtonRender } from '../lib/EditButtonRender';
import { SearchOutlined } from '@ant-design/icons';

export const stationsColumns: TableProps['columns'] = [
  {
    key: 'code_name',
    title: 'Код станции',
    dataIndex: 'code_name',
    align: 'center',
    filters: [],
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
    ),
  },
  {
    key: 'full_name',
    title: 'Название станции',
    dataIndex: 'full_name',
    align: 'center',
    filters: [],
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
    ),
  },
  {
    key: 'description',
    title: 'Описание',
    dataIndex: 'description',
    align: 'center',
    filters: [],
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
    ),
  },
  {
    key: 'is_active',
    title: 'Активный',
    dataIndex: 'is_active',
    align: 'center',
    filters: [
      {
        text: 'Да',
        value: 'Да',
      },
      {
        text: 'Нет',
        value: 'Нет',
      },
    ],
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
