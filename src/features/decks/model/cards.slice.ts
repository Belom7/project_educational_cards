import { Sort } from '@/components'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentPage: 1,
  pageSize: 10,
  sort: null as Sort,
}

export const cardsSlice = createSlice({
  initialState,
  name: 'cards',
  reducers: {
    setCurrentPage: (state, action: PayloadAction<{ currentPage: number }>) => {
      state.currentPage = action.payload.currentPage
    },
    setOrderBy: (state, action: PayloadAction<{ sortParams: Sort }>) => {
      state.sort = action.payload.sortParams
    },
    setPageSize: (state, action: PayloadAction<{ pageSize: number }>) => {
      state.pageSize = action.payload.pageSize
    },
    setStateReset: () => initialState,
  },
})

export const cardsActions = cardsSlice.actions
