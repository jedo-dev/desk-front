import { LoginButton } from '@features';
import { Layout } from 'antd';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AppHeader from '../app-header/AppHeader';
import styles from './AppLayout.module.css';

const { Sider, Content } = Layout;

interface Props {
  sidebarMenu: React.ReactNode;
  projectName: string;
}

export function AppLayout({ sidebarMenu, projectName }: Props) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className={styles.layout}>
      <Layout>
        <AppHeader
          Menu={sidebarMenu}
          collapsed={collapsed}
          onCollapse={() => setCollapsed((prev) => !prev)}
          projectName={projectName}
          Btn={<LoginButton />}
        />
        <Content className={styles.content}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
