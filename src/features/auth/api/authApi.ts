import { baseApi } from '@/common/api'
import { BaseResponseType, LoginArgs, RecoverPasswordParamsType } from '@/features'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<void, LoginArgs>({
      invalidatesTags: ['Me'],
      query: body => ({
        body,
        method: 'POST',
        url: 'auth/login',
      }),
    }),
    me: builder.query<BaseResponseType | null, void>({
      providesTags: ['Me'],
      query: () => 'auth/me',
    }),
    recoverPassword: builder.mutation<void, RecoverPasswordParamsType>({
      query: data => ({
        body: {
          email: data,
          html: '<h1>Hi, ##name##</h1><p>Click <a href="https://flashcards-learning.vercel.app/create-new-password/##token##">here</a> to recover your password</p>',
          subject: 'Recovery Password',
        },
        method: 'POST',
        url: 'auth/recover-password',
      }),
    }),
  }),
})

export const { useLoginMutation, useMeQuery, useRecoverPasswordMutation } = authService
