import { baseApi } from '@/common'
import { BaseDeckResponseType, GetDecksParamsType } from '@/features'

export const packListService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getDecks: builder.query<BaseDeckResponseType | null, GetDecksParamsType | void>({
      providesTags: ['Decks'],
      query: params => ({
        params: params ?? {},
        url: 'decks',
      }),
    }),
  }),
})
export const { useGetDecksQuery } = packListService
