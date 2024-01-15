import { useAppDispatch, useAppSelector } from '@/common'
import {
  packListAtion,
  selectAuthorId,
  selectCurrentPage,
  selectPageSize,
  useMeQuery,
} from '@/features'

export const usePackOptions = () => {
  const { data: user } = useMeQuery()
  const currentPage = useAppSelector(selectCurrentPage)
  const pageSize = Number(useAppSelector(selectPageSize))
  const authorId = useAppSelector(selectAuthorId)

  const dispatch = useAppDispatch()
  const { setAuthorId, setCurrentPage, setPageSize } = packListAtion
  const onChangeCurrentPageCallback = (currentPage: number) => {
    dispatch(setCurrentPage({ currentPage }))
  }
  const onChangePageSizeCallback = (pageSize: string) => {
    dispatch(setPageSize({ pageSize }))
  }
  const onChangeSwitcherCardsCallback = (mySwitch = null) => {
    if (mySwitch === 'my') {
      dispatch(setAuthorId({ authorId: user?.id }))
    } else {
      dispatch(setAuthorId({ authorId: undefined }))
    }
  }

  return {
    authorId,
    currentPage,
    onChangeCurrentPageCallback,
    onChangePageSizeCallback,
    onChangeSwitcherCardsCallback,
    pageSize,
  }
}
