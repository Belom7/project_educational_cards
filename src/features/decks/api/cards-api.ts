import { baseApi } from '@/common'
import {
  CreateUpdateCardParams,
  CreateUpdateCardResponse,
  GetCardsParams,
  GetCardsResponse,
} from '@/features/decks/api/cards-api.types'

export const cardsService = baseApi.injectEndpoints({
  endpoints: builder => ({
    createCard: builder.mutation<CreateUpdateCardResponse, CreateUpdateCardParams>({
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
    updateCard: builder.mutation<CreateUpdateCardResponse, CreateUpdateCardParams>({
      invalidatesTags: ['Cards'],
      query: ({ body, id }) => ({
        body,
        method: 'PATCH',
        url: `/cards/${id}`,
      }),
    }),
  }),
})

export const { useGetCardsQuery } = cardsService
export const {
  useCreateCardMutation,
  useGetCardsQuery,
  useUpdateCardMutation,
} = cardsService
