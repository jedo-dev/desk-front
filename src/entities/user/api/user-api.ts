import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@shared/api';
import { IUser } from '../model/user.model';

export const userApi = createApi({
  baseQuery: axiosBaseQuery(),
  endpoints(build) {
    return {
      // Получить всех пользователей
      getUsers: build.query<IUser[], void>({
        query: () => ({
          url: '/users',
          method: 'get',
        }),
      }),

      // Получить текущего пользователя
      getCurrentUser: build.query<IUser, void>({
        query: () => ({
          url: '/users/me',
          method: 'get',
        }),
      }),

      // Создать нового пользователя
      createUser: build.mutation<IUser, Partial<IUser>>({
        query: (newUser) => ({
          url: '/users',
          method: 'post',
          data: newUser,
        }),
      }),

      // Обновить пользователя по ID
      updateUser: build.mutation<IUser, { id: number; data: Partial<IUser> }>({
        query: ({ id, data }) => ({
          url: `/users/${id}`,
          method: 'patch',
          data,
        }),
      }),

      // Удалить пользователя по ID
      deleteUser: build.mutation<{ success: boolean }, number>({
        query: (id) => ({
          url: `/users/${id}`,
          method: 'delete',
        }),
      }),

      // Авторизация пользователя
      loginUser: build.mutation<{ access_token: string }, { email: string; password: string }>({
        query: (credentials) => ({
          url: '/users/login',
          method: 'post',
          data: credentials,
        }),
      }),
    };
  },
});

export const {
  useGetUsersQuery,
  useGetCurrentUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useLoginUserMutation,
} = userApi;
