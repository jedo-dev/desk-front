import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@shared/api';

export const reportsApi = createApi({
  reducerPath: 'reportsApi',
  tagTypes: ['REPORTS'],
  baseQuery: axiosBaseQuery(),
  endpoints(build) {
    return {
      //? Ждем бекендеров, пока мокаю возвращаемые данные
      // getMenu: build.query({ query: () => ({ url: '/menu', method: 'get' }) }),
      getReports: build.query({
        query: (requestData) => {
          return { mockResponse: { content: [requestData] }, mockResponseTime: 1000 };
        },
        providesTags: ['REPORTS'],
      }),
      getReportTypes: build.query({
        query: () => {
          return {
            mockResponse: { content: [{ label: 'Тип 1', value: 'type_1' }] },
            mockResponseTime: 1000,
          };
        },
        providesTags: ['REPORTS'],
      }),
    };
  },
});
export const { useGetReportsQuery, useLazyGetReportsQuery, useGetReportTypesQuery } = reportsApi;
