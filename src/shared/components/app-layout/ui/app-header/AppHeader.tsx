import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Header } from 'antd/es/layout/layout';
import Title from 'antd/es/typography/Title';
import { ReactNode } from 'react';
import style from './AppHeader.module.css';
interface Props {
  collapsed: boolean;
  onCollapse: () => void;
  projectName: string;
  Menu: ReactNode;
  Btn: ReactNode;
}

function AppHeader({ collapsed, onCollapse, projectName, Menu, Btn }: Props) {
  return (
    <Header className={style.header}>
      <Button
        type='text'
        data-testid='btn'
        icon={
          collapsed ? (
            <MenuUnfoldOutlined data-testid='unfold-icon' />
          ) : (
            <MenuFoldOutlined data-testid='fold-icon' />
          )
        }
        onClick={onCollapse}
        className={style.button}
      />
      <Title className={style.title} level={4}>
        {projectName}
      </Title>

      {Menu}
      {Btn}
    </Header>
  );
}

export default AppHeader;
