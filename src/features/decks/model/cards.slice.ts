import { SelectItemArgs, Sort } from '@/components'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentPage: 1,
  itemsPerPage: 10,
  paginationSelectItems: [
    { child: '5', value: '5' },
    { child: '10', value: '10' },
    { child: '20', value: '20' },
  ] as SelectItemArgs[],
  question: '',
  sort: null as Sort | null,
}

export const cardsSlice = createSlice({
  initialState,
  name: 'cards',
  reducers: {
    setCurrentPage: (state, action: PayloadAction<{ currentPage: number }>) => {
      state.currentPage = action.payload.currentPage
    },
    setItemsPerPage: (state, action: PayloadAction<{ itemsPerPage: number }>) => {
      state.itemsPerPage = action.payload.itemsPerPage
    },
    setQuestion: (state, action: PayloadAction<{ question: string }>) => {
      state.question = action.payload.question
    },
    setSortBy: (state, action: PayloadAction<{ sort: Sort | null }>) => {
      state.sort = action.payload.sort
    },
    setStateReset: () => initialState,
  },
})

export const cardsActions = cardsSlice.actions
