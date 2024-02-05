import { Sort } from '@/features'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type CardsCountType = {
  maxCardsCount: number | undefined
  minCardsCount: number
}
type authorIdType = string | undefined

const initialState = {
  authorId: undefined as authorIdType,
  cardsCount: {
    maxCardsCount: undefined,
    minCardsCount: 0,
  } as CardsCountType,
  currentPage: 1,
  pageSize: '10',
  searchDeckName: '',
  sortOptions: undefined as Sort | undefined,
}

export const packListSlice = createSlice({
  initialState,
  name: 'pack',
  reducers: {
    clearFilter: state => {
      state.searchDeckName = ''
      state.authorId = undefined
    },
    resetCurrentPage: state => {
      state.currentPage = 1
    },
    setAuthorId: (state, action: PayloadAction<{ authorId: authorIdType }>) => {
      state.authorId = action.payload.authorId
    },
    setCardsCount: (state, action: PayloadAction<{ cardsCount: CardsCountType }>) => {
      state.cardsCount = action.payload.cardsCount
    },
    setCurrentPage: (state, action: PayloadAction<{ currentPage: number }>) => {
      state.currentPage = action.payload.currentPage
    },
    setDeckSearchByName: (state, action: PayloadAction<{ searchDeckName: string }>) => {
      state.searchDeckName = action.payload.searchDeckName
    },
    setPageSize: (state, action: PayloadAction<{ pageSize: string }>) => {
      state.pageSize = action.payload.pageSize
    },
    setSortOptions: (state, action: PayloadAction<{ sortOptions: Sort | undefined }>) => {
      state.sortOptions = action.payload.sortOptions
    },
  },
})

export const packListAction = packListSlice.actions
