import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@shared/api';
import { stations } from '../mocks/mock-stations-api';

export const stationsApi = createApi({
  reducerPath: 'stationsApi',
  baseQuery: axiosBaseQuery(),
  endpoints(build) {
    return {
      //? Ждем бекендеров, пока мокаю возвращаемые данные
      // getMenu: build.query({ query: () => ({ url: '/menu', method: 'get' }) }),
      getStations: build.query({ query: () => ({ mockResponse: stations }) }),
    };
  },
});
export const { useGetStationsQuery } = stationsApi;
