import { baseApi } from '@/common'
import { GetCardsParams, GetCardsResponse } from '@/features/decks/api/cards-api.types'

export const cardsService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCards: builder.query<GetCardsResponse, GetCardsParams>({
      providesTags: ['Cards'],
      query: ({ id }) => ({
        url: `decks/${id}/cards`,
      }),
    }),
  }),
})

export const { useGetCardsQuery } = cardsService
