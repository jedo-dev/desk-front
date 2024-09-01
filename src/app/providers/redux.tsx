import { setupStore } from '@app/store/store';
import React from 'react';
import { Provider } from 'react-redux';

// import store from './providerConfig/store';

export const store = setupStore();

export const withReduxProvider = (component: () => React.ReactNode) => () =>
  <Provider store={store}>{component()}</Provider>;
