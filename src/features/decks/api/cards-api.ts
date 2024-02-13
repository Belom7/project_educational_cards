import { baseApi } from '@/common'

export const cardsService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCards: builder.query({
      providesTags: ['Cards'],
      query: ({ id }) => ({
        url: `cards/${id}`,
      }),
    }),
  }),
})
