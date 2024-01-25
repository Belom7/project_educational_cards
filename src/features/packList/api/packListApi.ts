import { RootState, baseApi, updateDecksQueryData } from '@/common'
import { BaseDeckResponseType, GetDecksParamsType, PackType } from '@/features'

export const packListService = baseApi.injectEndpoints({
  endpoints: builder => ({
    createPack: builder.mutation<PackType, FormData>({
      invalidatesTags: ['Decks'],
      async onQueryStarted(_, { dispatch, getState, queryFulfilled }) {
        const state = getState() as RootState

        const response = await queryFulfilled

        dispatch(
          packListService.util.updateQueryData('getDecks', updateDecksQueryData(state), draft => {
            draft?.items.unshift(response.data)
          })
        )
      },
      query: body => ({
        body,
        method: 'POST',
        url: 'decks',
      }),
    }),
    getDecks: builder.query<BaseDeckResponseType | null, GetDecksParamsType | void>({
      providesTags: ['Decks'],
      query: params => ({
        params: params ?? {},
        url: 'decks',
      }),
    }),
  }),
})
export const { useCreatePackMutation, useGetDecksQuery } = packListService
