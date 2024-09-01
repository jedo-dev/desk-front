import routerConfig from '@pages';
import React from 'react';
import { RouterProvider } from 'react-router-dom';

export const withRouter = (component: () => React.ReactNode) => () =>
  <RouterProvider router={routerConfig} />;
