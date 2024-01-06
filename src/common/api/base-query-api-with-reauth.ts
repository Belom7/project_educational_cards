import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.flashcards.andrii.es/v1',
  credentials: 'include',
})

export const baseQueryWithReauth: BaseQueryFn<
  FetchArgs | string,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 401) {
    // try to get a new token
    const refreshResult = await baseQuery(
      { method: 'POST', url: 'auth/refresh-token' },
      api,
      extraOptions
    )

    if (refreshResult.meta?.response?.status === 204) {
      // retry the initial query
      result = await baseQuery(args, api, extraOptions)
    }
  }

  return result
}
