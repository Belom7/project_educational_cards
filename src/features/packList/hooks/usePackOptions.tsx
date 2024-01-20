import { useAppDispatch, useAppSelector } from '@/common'
import {
  packListAtion,
  selectAuthorId,
  selectCardsCount,
  selectCurrentPage,
  selectPageSize,
  selectSearchDeckName,
  useMeQuery,
} from '@/features'

export const usePackOptions = () => {
  const { data: user } = useMeQuery()
  const currentPage = useAppSelector(selectCurrentPage)
  const pageSize = Number(useAppSelector(selectPageSize))
  const authorId = useAppSelector(selectAuthorId)
  const cardsCount = useAppSelector(selectCardsCount)
  const searchDeckName = useAppSelector(selectSearchDeckName)
  const dispatch = useAppDispatch()
  const {
    clearFilter,
    resetCurrentPage,
    setAuthorId,
    setCardsCount,
    setCurrentPage,
    setDeckSearchByName,
    setPageSize,
  } = packListAtion
  const onChangeCurrentPageCallback = (currentPage: number) => {
    dispatch(setCurrentPage({ currentPage }))
  }
  const onChangePageSizeCallback = (pageSize: string) => {
    dispatch(setPageSize({ pageSize }))
  }
  const onChangeSwitcherCardsCallback = (mySwitch: string) => {
    if (mySwitch === 'my') {
      dispatch(setAuthorId({ authorId: user?.id }))
    } else {
      dispatch(setAuthorId({ authorId: undefined }))
    }
  }
  const onChangeSliderValueCallback = (sliderValues: number[]) => {
    dispatch(setCurrentPage({ currentPage: 1 }))
    dispatch(
      setCardsCount({
        cardsCount: { maxCardsCount: sliderValues[1], minCardsCount: sliderValues[0] },
      })
    )
  }
  const onSearchCallback = (name: string) => {
    dispatch(setDeckSearchByName({ searchDeckName: name }))
    dispatch(resetCurrentPage())
  }
  const clearFilterCallback = () => {
    dispatch(clearFilter())
    dispatch(
      setCardsCount({
        cardsCount: { maxCardsCount: 0, minCardsCount: 0 },
      })
    )
  }

  return {
    authorId,
    cardsCount,
    clearFilterCallback,
    currentPage,
    onChangeCurrentPageCallback,
    onChangePageSizeCallback,
    onChangeSliderValueCallback,
    onChangeSwitcherCardsCallback,
    onSearchCallback,
    pageSize,
    searchDeckName,
  }
}
