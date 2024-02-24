import { baseApi } from '@/common'
import {
  CreateUpdateCardParams,
  CreateUpdateCardResponse,
  GetCardsParams,
  GetCardsResponse,
} from '@/features/decks/api/cards-api.types'

export const cardsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    createCard: builder.mutation<CreateUpdateCardResponse, CreateUpdateCardParams>({
      invalidatesTags: ['Cards'],
      query: ({ body, deckId }) => ({
        body,
        method: 'POST',
        url: `decks/${deckId}/cards`,
      }),
    }),
    deleteCard: builder.mutation<void, string>({
      invalidatesTags: ['Cards'],
      query: id => ({
        method: 'DELETE',
        url: `/cards/${id}`,
      }),
    }),
    getCards: builder.query<GetCardsResponse, GetCardsParams>({
      providesTags: ['Cards'],
      query: ({ id, params }) => ({
        params,
        url: `decks/${id}/cards`,
      }),
    }),
    updateCard: builder.mutation<CreateUpdateCardResponse, CreateUpdateCardParams>({
      invalidatesTags: ['Cards'],
      query: ({ body, cardId }) => ({
        body,
        method: 'PATCH',
        url: `/cards/${cardId}`,
      }),
    }),
  }),
})

export const {
  useCreateCardMutation,
  useDeleteCardMutation,
  useGetCardsQuery,
  useUpdateCardMutation,
} = cardsApi
