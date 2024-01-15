import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type authorIdType = string | undefined
const initialState = {
  authorId: undefined as authorIdType,
  currentPage: 1,
  pageSize: '10',
}

export const packListSlice = createSlice({
  initialState,
  name: 'pack',
  reducers: {
    setAuthorId: (state, action: PayloadAction<{ authorId: authorIdType }>) => {
      state.authorId = action.payload.authorId
    },
    setCurrentPage: (state, action: PayloadAction<{ currentPage: number }>) => {
      state.currentPage = action.payload.currentPage
    },
    setPageSize: (state, action: PayloadAction<{ pageSize: string }>) => {
      state.pageSize = action.payload.pageSize
    },
  },
})
export const packListAtion = packListSlice.actions
