import { SideMenu } from '@features';
import { AppLayout } from '@shared/components';
import { createBrowserRouter } from 'react-router-dom';
import { businessProcessRouter } from './business-process-page';
import { EventsPage } from './events-page';
import { MyTaskPage } from './my-tasks-page';
import { ReactorTypesPage } from './reactor-types';
import { ReportsPage } from './reports';
import { StationsPage } from './stations';

import { TlDrawPage } from './draw-page';

const routerConfig = [
  {
    path: '/',
    element: <AppLayout sidebarMenu={<SideMenu />} projectName='Имя проекта' />,
    children: [
      {
        path: '/reestr-example-1',
        element: <TlDrawPage />,
      },
      {
        path: '/reestr-example-2',
        element: <ReportsPage />,
      },
      {
        path: '/spravochnik-example-1',
        element: <ReactorTypesPage />,
      },
      {
        path: '/spravochnik-example-2',
        element: <StationsPage />,
      },
      {
        path: '/my-tasks',
        element: <MyTaskPage />,
      },
      ...businessProcessRouter,
    ],
  },
];

export default createBrowserRouter(routerConfig);
