import { RootState } from '@/app'

export const selectCardsCurrentPage = (state: RootState) => state.cards.currentPage
export const selectCardsItemsPerPage = (state: RootState) => state.cards.itemsPerPage
export const selectCardsQuestion = (state: RootState) => state.cards.question
export const selectCardsSort = (state: RootState) => state.cards.sort
