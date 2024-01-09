import { RootState } from '@/common'

export const selectCurrentPage = (state: RootState) => state.pack.currentPage
export const selectPageSize = (state: RootState) => state.pack.pageSize
