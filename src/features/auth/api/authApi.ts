import { baseApi, getTextFromFormData } from '@/common'
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
    logout: builder.mutation<void, void>({
      invalidatesTags: ['Me'],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(authService.util.updateQueryData('me', undefined, () => null))

        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },

      query: () => ({
        method: 'POST',
        url: 'auth/logout',
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
    updateProfile: builder.mutation<BaseResponseType, FormData>({
      async onQueryStarted(body, { dispatch, queryFulfilled }) {
        let avatar = ''

        const patchResult = dispatch(
          authService.util.updateQueryData('me', undefined, draft => {
            const name = getTextFromFormData(body.get('name'))
            const avatarBlob = body.get('avatar')

            if (avatarBlob instanceof Blob) {
              avatar = URL.createObjectURL(avatarBlob)
            }

            if (draft && avatar) {
              draft.avatar = avatar
            }

            if (draft && name) {
              draft.name = name
            }
          })
        )

        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        } finally {
          URL.revokeObjectURL(avatar)
        }
      },
      query: body => ({
        body,
        method: 'PATCH',
        url: 'auth/me',
      }),
    }),
  }),
})

export const { useLoginMutation, useMeQuery, useRecoverPasswordMutation, useLogoutMutation, useUpdateProfileMutation } = authService
