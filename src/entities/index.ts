// Экспорт api и хуков
export { eventsApi } from './events-entiti';
export { menuApi, useGetMenuQuery } from './menu';
export {
  myTaskApi,
  useGetAllTasksQuery,
  useGetIncomingTasksQuery,
  useGetPendingTasksQuery,
  useGetTaskByIdQuery,
} from './my-task';
export { useGetCurrentUserQuery, userApi } from './user';
// Экспорт типов
export { powerUnitsApi, useGetPowerUnitsQuery } from './power-units';
export {
  reportSlice,
  reportSliceReducer,
  reportsApi,
  useGetReportTypesQuery,
  useGetReportsQuery,
  useLazyGetReportsQuery,
} from './reports';
export { stationsApi, useGetStationsQuery } from './stations';

export type { IEvents } from './events-entiti';
export type { IMenu, IMenuItem } from './menu';
export type { IUser } from './user';
