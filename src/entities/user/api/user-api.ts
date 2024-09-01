import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@shared/api';

export const userApi = createApi({
  baseQuery: axiosBaseQuery(),
  endpoints(build) {
    return {
      getCurrentUser: build.query({ query: () => ({ url: '/current-user', method: 'get' }) }),
      createUser: build.mutation({
        query: () => ({ url: '/current-user', method: 'post', data: { username: 'yaroslav' } }),
      }),
    };
  },
});
export const { useGetCurrentUserQuery } = userApi;
