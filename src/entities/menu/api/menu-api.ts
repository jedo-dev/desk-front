import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@shared/api';
import { menuItems } from '../mocks/mock-menu-api';

export const menuApi = createApi({
  reducerPath: 'menuApi',
  baseQuery: axiosBaseQuery(),
  endpoints(build) {
    return {
      //? Ждем бекендеров, пока мокаю возвращаемые данные
      // getMenu: build.query({ query: () => ({ url: '/menu', method: 'get' }) }),
      getMenu: build.query({ query: () => ({ url: '/menu', mockResponse: menuItems }) }),
    };
  },
});
export const { useGetMenuQuery } = menuApi;
