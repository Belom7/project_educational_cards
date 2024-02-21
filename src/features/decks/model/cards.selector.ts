import { RootState } from '@/app'

export const selectCardsCurrentPage = (state: RootState) => state.cards.currentPage
export const selectCardsPageSize = (state: RootState) => state.cards.pageSize
export const selectCardsSearchPhrase = (state: RootState) => state.cards.searchPhrase
export const selectCardsSort = (state: RootState) => state.cards.sort
