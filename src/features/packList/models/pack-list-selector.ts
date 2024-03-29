import { RootState } from '@/app'

export const selectCurrentPage = (state: RootState) => state.pack.currentPage
export const selectPageSize = (state: RootState) => state.pack.pageSize
export const selectAuthorId = (state: RootState) => state.pack.authorId
export const selectCardsCount = (state: RootState) => state.pack.cardsCount
export const selectSearchDeckName = (state: RootState) => state.pack.searchDeckName
export const selectSortOptions = (state: RootState) => state.pack.sortOptions
