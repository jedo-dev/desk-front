import React from 'react';
import { Avatar, List } from 'antd';
import { FileExcelOutlined } from '@ant-design/icons';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

export const SideMenu: React.FC = () => (
  <List
    itemLayout='horizontal'
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={<FileExcelOutlined />} />}
          title={<a href='https://ant.design'>{item.title}</a>}
        />
      </List.Item>
    )}
  />
);
