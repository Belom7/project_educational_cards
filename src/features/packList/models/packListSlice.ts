import { PayloadAction, createSlice } from '@reduxjs/toolkit'
const initialState = {
  currentPage: 1,
  pageSize: '10',
}

export const packListSlice = createSlice({
  initialState,
  name: 'pack',
  reducers: {
    setCurrentPage: (state, action: PayloadAction<{ currentPage: number }>) => {
      state.currentPage = action.payload.currentPage
    },
    setPageSize: (state, action: PayloadAction<{ pageSize: string }>) => {
      state.pageSize = action.payload.pageSize
    },
  },
})
export const packListAtion = packListSlice.actions
