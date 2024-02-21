import { formatSortedString, useAppDispatch, useAppSelector } from '@/common'
import { Sort } from '@/components'
import {
  cardsActions,
  selectCardsCurrentPage,
  selectCardsPageSize,
  selectCardsSearchPhrase,
  selectCardsSort,
} from '@/features'

export const useCardsOptions = () => {
  const currentPage = useAppSelector(selectCardsCurrentPage)
  const pageSize = useAppSelector(selectCardsPageSize)
  const searchPhrase = useAppSelector(selectCardsSearchPhrase)
  const sort = useAppSelector(selectCardsSort)
  const sortBy = formatSortedString(sort)

  const dispatch = useAppDispatch()

  const onResetState = () => {
    dispatch(cardsActions.setStateReset())
  }
  const onChangeSearchPhrase = (searchPhrase: string) => {
    dispatch(cardsActions.setSearchPhrase({ searchPhrase }))
  }
  const onChangeCurrentPage = (currentPage: number) => {
    dispatch(cardsActions.setCurrentPage({ currentPage }))
  }
  const onChangePageSize = (pageSize: string) => {
    dispatch(cardsActions.setPageSize({ pageSize: +pageSize }))
  }
  const onChangeSort = (sort: Sort) => {
    dispatch(cardsActions.setSortBy({ sort }))
  }

  return {
    currentPage,
    onChangeCurrentPage,
    onChangePageSize,
    onChangeSearchPhrase,
    onChangeSort,
    onResetState,
    pageSize,
    searchPhrase,
    sort,
    sortBy,
  }
}
