import { baseQueryWithReauth } from '@/common/api/base-query-api-with-reauth'
import { createApi } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  tagTypes: ['Me', 'Decks', 'Cards'],
})
