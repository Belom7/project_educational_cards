import { baseApi } from '@/common'

export const cardsService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCards: builder.query({
      providesTags: ['Cards'],
      query: ({ id }) => ({
        url: `decks/${id}/cards`,
      }),
    }),
  }),
})

export const { useGetCardsQuery } = cardsService
