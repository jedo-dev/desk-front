import {
  menuApi,
  myTaskApi,
  powerUnitsApi,
  reportsApi,
  reportSliceReducer,
  stationsApi,
  userApi,
} from '@entities';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  reusedFormReducer,
  reusedModalWithFormReducer,
  reusedTableReducer,
} from '@shared/components';

const rootReducer = combineReducers({
  reusedTableReducer,
  reusedFormReducer,
  reusedModalWithFormReducer,
  reportSliceReducer,
  [userApi.reducerPath]: userApi.reducer,
  [menuApi.reducerPath]: menuApi.reducer,
  [reportsApi.reducerPath]: reportsApi.reducer,
  [stationsApi.reducerPath]: stationsApi.reducer,
  [powerUnitsApi.reducerPath]: powerUnitsApi.reducer,
  [myTaskApi.reducerPath]: myTaskApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        userApi.middleware,
        menuApi.middleware,
        reportsApi.middleware,
        stationsApi.middleware,
        powerUnitsApi.middleware,
        myTaskApi.middleware,
      ]),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
