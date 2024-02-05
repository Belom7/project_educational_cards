import { RootState } from '@/app'
import { baseApi, updateDecksQueryData } from '@/common'
import {
  BaseDeckResponseType,
  DeletePackParamsType,
  DeletePackResponseType,
  GetDecksParamsType,
  PackType,
  UpdatePackParamsType,
} from '@/features'

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
    deletePack: builder.mutation<DeletePackResponseType, DeletePackParamsType>({
      invalidatesTags: ['Decks'],
      async onQueryStarted({ id }, { dispatch, getState, queryFulfilled }) {
        const state = getState() as RootState

        const patchResult = dispatch(
          packListService.util.updateQueryData('getDecks', updateDecksQueryData(state), draft => {
            const index = draft?.items?.findIndex(deck => deck.id === id)

            if (typeof index === 'number') {
              draft?.items?.splice(index, 1)
            }
          })
        )

        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
      query: ({ id }) => ({
        method: 'DELETE',
        url: `decks/${id}`,
      }),
    }),
    getDecks: builder.query<BaseDeckResponseType | null, GetDecksParamsType | void>({
      providesTags: ['Decks', { id: 'List', type: 'Decks' }],
      query: params => ({
        params: params ?? {},
        url: 'decks',
      }),
    }),
    updatePack: builder.mutation<PackType, UpdatePackParamsType>({
      invalidatesTags: ['Decks'],
      async onQueryStarted({ body, id }, { dispatch, getState, queryFulfilled }) {
        const state = getState() as RootState
        let cover = ''
        const patchResult = dispatch(
          packListService.util.updateQueryData('getDecks', updateDecksQueryData(state), draft => {
            const index = draft?.items.findIndex(deck => deck.id === id)
            const name = body.get('name')
            const isPrivate = body.get('isPrivate')
            const coverBlob = body.get('cover')

            if (coverBlob instanceof Blob) {
              cover = URL.createObjectURL(coverBlob)
            }

            if (index !== undefined && draft && draft.items && index !== -1) {
              draft.items[index] = {
                ...draft.items[index],
                cover: cover,
                isPrivate: !!isPrivate,
                name: typeof name === 'string' ? name : '',
              }
            }
          })
        )

        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        } finally {
          URL.revokeObjectURL(cover)
        }
      },
      query: ({ body, id }) => ({
        body,
        method: 'PATCH',
        url: `decks/${id}`,
      }),
    }),
  }),
})
export const {
  useCreatePackMutation,
  useDeletePackMutation,
  useGetDecksQuery,
  useUpdatePackMutation,
} = packListService
