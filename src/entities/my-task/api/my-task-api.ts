import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery, controller } from '@shared/api';

type serverFilters = {
  filters: { [key: string]: string | number | boolean }[];
  sorts: { [key: string]: string }[];
  page: number;
  size: number;
};

type myTaskPostData = {
  endPoint: string;
  entity: serverFilters;
  controller: typeof controller;
};

export const myTaskApi = createApi({
  reducerPath: 'myTaskApi',
  tagTypes: ['myTask'],
  baseQuery: axiosBaseQuery({ baseUrl: 'pabp-camunda-service' }),
  endpoints(build) {
    return {
      getIncomingTasks: build.query({
        query: () => ({
          url: '/task/incoming-tasks',
          method: 'get',
        }),
      }),
      getPendingTasks: build.query({
        query: () => ({
          url: '/task/pending-tasks',
          method: 'get',
        }),
      }),
      getAllTasks: build.query({
        query: () => ({
          url: '/task/pending-tasks-all',
          method: 'get',
        }),
      }),
      getTaskById: build.query({
        query: (processId) => ({
          url: `/task/incoming-task?taskId=${processId}`,
          method: 'get',
        }),
      }),
    };
  },
});

export const {
  useGetAllTasksQuery,
  useGetIncomingTasksQuery,
  useGetPendingTasksQuery,
  useGetTaskByIdQuery,
} = myTaskApi;
