import { baseApi } from '@/common'
import {
  CreateCardParams,
  CreateCardResponse,
  GetCardsParams,
  GetCardsResponse,
} from '@/features/decks/api/cards-api.types'

export const cardsService = baseApi.injectEndpoints({
  endpoints: builder => ({
    createCard: builder.mutation<CreateCardResponse, CreateCardParams>({
      invalidatesTags: ['Cards'],
      query: ({ body, id }) => ({
        body,
        method: 'POST',
        url: `decks/${id}/cards`,
      }),
    }),
    getCards: builder.query<GetCardsResponse, GetCardsParams>({
      providesTags: ['Cards'],
      query: ({ id }) => ({
        url: `decks/${id}/cards`,
      }),
    }),
  }),
})

export const { useGetCardsQuery } = cardsService
