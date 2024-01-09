import { useAppDispatch, useAppSelector } from '@/common'
import { packListAtion, selectCurrentPage } from '@/features'

export const usePackOptions = () => {
  const currentPage = useAppSelector(selectCurrentPage)
  const dispatch = useAppDispatch()
  const { setCurrentPage } = packListAtion
  const onChangeCurrentPageCallback = (currentPage: number) => {
    dispatch(setCurrentPage({ currentPage }))
  }

  return {
    currentPage,
    onChangeCurrentPageCallback,
  }
}
