import { useAppDispatch, useAppSelector } from '@/common'
import {
  packListAtion,
  selectAuthorId,
  selectCardsCount,
  selectCurrentPage,
  selectPageSize,
  useMeQuery,
} from '@/features'

export const usePackOptions = () => {
  const { data: user } = useMeQuery()
  const currentPage = useAppSelector(selectCurrentPage)
  const pageSize = Number(useAppSelector(selectPageSize))
  const authorId = useAppSelector(selectAuthorId)
  const cardsCount = useAppSelector(selectCardsCount)

  const dispatch = useAppDispatch()
  const { setAuthorId, setCardsCount, setCurrentPage, setPageSize } = packListAtion
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

  return {
    authorId,
    cardsCount,
    currentPage,
    onChangeCurrentPageCallback,
    onChangePageSizeCallback,
    onChangeSliderValueCallback,
    onChangeSwitcherCardsCallback,
    pageSize,
  }
}
