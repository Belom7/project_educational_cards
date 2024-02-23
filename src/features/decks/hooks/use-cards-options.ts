import { formatSortedString, useAppDispatch, useAppSelector } from '@/common'
import { Sort } from '@/components'
import {
  cardsActions,
  selectCardsCurrentPage,
  selectCardsItemsPerPage,
  selectCardsPaginationData,
  selectCardsQuestion,
  selectCardsSort,
} from '@/features'

export const useCardsOptions = () => {
  const currentPage = useAppSelector(selectCardsCurrentPage)
  const itemsPerPage = useAppSelector(selectCardsItemsPerPage)
  const question = useAppSelector(selectCardsQuestion)
  const sort = useAppSelector(selectCardsSort)
  const paginationData = useAppSelector(selectCardsPaginationData)
  const orderBy = formatSortedString(sort)

  const dispatch = useAppDispatch()

  const onResetState = () => {
    dispatch(cardsActions.setStateReset())
  }
  const onChangeSearchPhrase = (question: string) => {
    dispatch(cardsActions.setQuestion({ question }))
  }
  const onChangeCurrentPage = (currentPage: number) => {
    dispatch(cardsActions.setCurrentPage({ currentPage }))
  }
  const onChangeItemsPerPage = (itemsPerPage: string) => {
    dispatch(cardsActions.setItemsPerPage({ itemsPerPage: +itemsPerPage }))
  }
  const onChangeSort = (sort: Sort | null) => {
    dispatch(cardsActions.setSortBy({ sort }))
  }

  return {
    currentPage,
    itemsPerPage,
    onChangeCurrentPage,
    onChangeItemsPerPage,
    onChangeSearchPhrase,
    onChangeSort,
    onResetState,
    orderBy,
    paginationData,
    question,
    sort,
  }
}
