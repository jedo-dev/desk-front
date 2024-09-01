import { ConfigProvider } from 'antd';
import React from 'react';

export const withAntdProvider = (component: () => React.ReactNode) => () =>
  (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: 'linear-gradient(90deg, rgba(116,207,159,1) 0%, rgba(49,189,185,1) 100%)',
            borderRadius: 50,
          },
        },
      }}>
      {component()}
    </ConfigProvider>
  );
