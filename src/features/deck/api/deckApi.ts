import { baseApi } from '@/common'
import {
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
  }),
})
export const { useGetRandomDeckQuery } = deckApi
