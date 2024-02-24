import { baseApi } from '@/common'
import {
  DeckRateRequest,
  DeckResponse,
  GetDeckResponseType,
  RandomDeckRequest,
} from '@/features/deck/api/deckApi.types'

export const deckApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getRandomDeck: builder.query<DeckResponse & { name?: string }, RandomDeckRequest>({
      queryFn: async (arg, _api, _extraOptions, fetchWithBQ) => {
        const deckResponse = await fetchWithBQ(`decks/${arg.id}`)

        const cardsResponse = await fetchWithBQ({
          method: 'GET',
          params: { previousCardId: arg.previousCardId },
          url: `decks/${arg.id}/learn`,
        })

        const deckData = deckResponse.data as GetDeckResponseType
        const DeckData = cardsResponse.data as DeckResponse

        return { data: { ...DeckData, name: deckData.name } }
      },
    }),
    rateDeck: builder.mutation<DeckResponse, DeckRateRequest>({
      async onQueryStarted({ deckId }, { dispatch, queryFulfilled }) {
        const { data: newCard } = await queryFulfilled

        dispatch(
          deckApi.util.updateQueryData('getRandomDeck', { id: deckId }, () => {
            return newCard
          })
        )
      },

      query: ({ deckId, ...rest }) => ({
        body: rest,
        method: 'POST',
        url: `decks/${deckId}/learn`,
      }),
    }),
  }),
})
export const { useGetRandomDeckQuery, useRateDeckMutation } = deckApi
