import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@shared/api';
import { powerUnits } from '../mocks/power-units-api';

export const powerUnitsApi = createApi({
  reducerPath: 'powerUnitsApi',
  tagTypes: ['POWER_UNITS'],
  baseQuery: axiosBaseQuery(),
  endpoints(build) {
    return {
      //? Ждем бекендеров, пока мокаю возвращаемые данные
      // getMenu: build.query({ query: () => ({ url: '/menu', method: 'get' }) }),
      getPowerUnits: build.query({
        query: (data) => {
          return { mockResponse: powerUnits };
        },
        providesTags: ['POWER_UNITS'],
      }),
    };
  },
});
export const { useGetPowerUnitsQuery } = powerUnitsApi;
