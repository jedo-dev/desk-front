import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@shared/api';
import { controller } from '../../../shared/api/restClient';

type serverFilters = {
  filters: { [key: string]: string | number | boolean }[];
  sorts: { [key: string]: string }[];
  page: number;
  size: number;
};

type eventPostData = {
  endPoint: string;
  entity: serverFilters;
  controller: typeof controller;
};

export const eventsApi = createApi({
  reducerPath: 'eventsApi',
  tagTypes: ['Events'],
  baseQuery: axiosBaseQuery(),
  endpoints(build) {
    return {
      getDictItems: build.query({
        query: (params) => ({
          url: '/history-event/filter-with-relations',
          method: 'post',
          data: params,
        }),
      }),
    };
  },
});

export const { useGetDictItemsQuery } = eventsApi;
