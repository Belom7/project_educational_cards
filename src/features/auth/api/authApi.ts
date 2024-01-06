import { baseApi } from '@/common/api'
import { LoginArgs } from '@/features'

// @ts-ignore
export const authService = baseApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<void, LoginArgs>({
      query: body => ({
        body,
        method: 'POST',
        url: 'auth/login',
      }),
    }),
  }),
})

export const { useLoginMutation } = authService
