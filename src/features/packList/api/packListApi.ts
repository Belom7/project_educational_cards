import { baseApi } from '@/common'
import { BaseDeckResponseType } from '@/features'

export const packListService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getDecks: builder.query<BaseDeckResponseType | null, void>({
      providesTags: ['Decks'],
      query: () => 'decks',
    }),
  }),
})
export const { useGetDecksQuery } = packListService
