import { RootState } from '@/app'
import { formatSortedString } from '@/common'

export const updateDecksQueryData = (state: RootState) => {
  const { authorId, cardsCount, currentPage, pageSize, searchDeckName, sortOptions } = state.pack

  const sortedString = formatSortedString(sortOptions)

  return {
    authorId,
    currentPage,
    itemsPerPage: Number(pageSize),
    maxCardsCount: cardsCount.minCardsCount,
    minCardsCount: cardsCount.maxCardsCount,
    name: searchDeckName,
    orderBy: sortedString,
  }
}
