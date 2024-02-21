import { Sort } from '@/components'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentPage: 1,
  pageSize: 10,
  searchPhrase: '',
  sort: null as Sort,
}

export const cardsSlice = createSlice({
  initialState,
  name: 'cards',
  reducers: {
    setCurrentPage: (state, action: PayloadAction<{ currentPage: number }>) => {
      state.currentPage = action.payload.currentPage
    },
    setPageSize: (state, action: PayloadAction<{ pageSize: number }>) => {
      state.pageSize = action.payload.pageSize
    },
    setSearchPhrase: (state, action: PayloadAction<{ searchPhrase: string }>) => {
      state.searchPhrase = action.payload.searchPhrase
    },
    setSortBy: (state, action: PayloadAction<{ sort: Sort }>) => {
      state.sort = action.payload.sort
    },
    setStateReset: () => initialState,
  },
})

export const cardsActions = cardsSlice.actions
