import { useAppDispatch, useAppSelector } from '@/common'
import { packListAtion, selectCurrentPage, selectPageSize } from '@/features'

export const usePackOptions = () => {
  const currentPage = useAppSelector(selectCurrentPage)
  const pageSize = Number(useAppSelector(selectPageSize))
  const dispatch = useAppDispatch()
  const { setCurrentPage, setPageSize } = packListAtion
  const onChangeCurrentPageCallback = (currentPage: number) => {
    dispatch(setCurrentPage({ currentPage }))
  }
  const onChangePageSizeCallback = (pageSize: string) => {
    dispatch(setPageSize({ pageSize }))
  }

  return {
    currentPage,
    onChangeCurrentPageCallback,
    onChangePageSizeCallback,
    pageSize,
  }
}
