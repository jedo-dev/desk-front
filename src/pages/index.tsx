import { SideMenu } from '@features';
import { AppLayout } from '@shared/components';
import { createBrowserRouter } from 'react-router-dom';

import { TlDrawPage } from './draw-page';
import { MainPage } from './main-page';

const routerConfig = [
  {
    path: '/',
    element: <AppLayout sidebarMenu={<SideMenu />} projectName='Имя проекта' />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/reestr-example-1',
        element: <TlDrawPage />,
      },
    ],
  },
];

export default createBrowserRouter(routerConfig);
