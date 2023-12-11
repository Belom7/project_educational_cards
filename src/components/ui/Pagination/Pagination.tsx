import { FC, JSX } from 'react'

import { TypographyOption } from '@/common/enums'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@/components/assets/icons'
import { PageItem } from '@/components/ui/Pagination/PageItem'
import { usePagination } from '@/components/ui/Pagination/usePagination'
import { Select, SelectProps } from '@/components/ui/Select'
import { Typography } from '@/components/ui/Typography'

import s from './Pagination.module.scss'

export type PaginationProps = {
  currentPage: number
  itemsCount: number
  itemsPerPage: number
  maxLength?: 5 | 7 | 9
  setCurrentPage: (pageNumber: number) => void
} & SelectProps

export const ELLIPSIS = '...'

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  itemsCount,
  itemsPerPage,
  maxLength = 7,
  onValueChange,
  placeholder = itemsCount,
  selectItems,
  setCurrentPage,
  variant = 'pagination',
}): JSX.Element => {
  const pagesCount = Math.ceil(itemsCount / itemsPerPage)
  const pageArr = usePagination(currentPage, pagesCount, maxLength)

  return (
    <div aria-label={'Pagination'} className={s.pagination}>
      <div className={s.pages}>
        <PageItem
          disabled={currentPage === 1}
          page={currentPage - 1}
          setCurrentPage={setCurrentPage}
        >
          <KeyboardArrowLeft />
        </PageItem>
        {pageArr.map((p, idx) => {
          return (
            <PageItem
              active={p === currentPage}
              disabled={isNaN(p)}
              key={idx}
              page={p}
              setCurrentPage={setCurrentPage}
            >
              <Typography variant={TypographyOption.Body2}>{!isNaN(p) ? p : ELLIPSIS}</Typography>
            </PageItem>
          )
        })}
        <PageItem
          disabled={currentPage === pagesCount}
          page={currentPage + 1}
          setCurrentPage={setCurrentPage}
        >
          <KeyboardArrowRight />
        </PageItem>
      </div>
      <div className={s.select}>
        <Typography variant={TypographyOption.Body2}>Показать</Typography>
        <Select
          onValueChange={onValueChange}
          placeholder={placeholder}
          selectItems={selectItems}
          variant={variant}
        />
        <Typography variant={TypographyOption.Body2}>на странице</Typography>
      </div>
    </div>
  )
}
