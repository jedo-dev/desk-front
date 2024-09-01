import { Layout } from 'antd';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AppHeader from '../app-header/AppHeader';
import Logo from '../app-logo/Logo';
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
      <Sider
        className={styles.sider}
        theme='light'
        trigger={null}
        collapsible
        width={300}
        collapsed={collapsed}>
        <Logo collapsed={collapsed} />
        {sidebarMenu}
      </Sider>
      <Layout>
        <AppHeader
          collapsed={collapsed}
          onCollapse={() => setCollapsed((prev) => !prev)}
          projectName={projectName}
        />
        <Content className={styles.content}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
