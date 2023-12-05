import { FC, JSX } from 'react'

import { TypographyOption } from '@/common/enums'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@/components/assets/icons'
import { PageItem } from '@/components/ui/Pagination/PageItem'
import { Select, SelectProps } from '@/components/ui/Select'
import { Typography } from '@/components/ui/Typography'

import s from './Pagination.module.scss'

export type PaginationProps = {
  currentPage: number
  itemsCount: number
  itemsPerPage: number
  setPage: (pageNumber: number) => void
} & SelectProps

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  itemsCount,
  itemsPerPage,
  placeholder = itemsCount,
  selectItems,
  variant = 'pagination',
}): JSX.Element => {
  const pagesCount = Math.ceil(itemsCount / itemsPerPage)
  const pagesArr = [...Array(pagesCount).keys()].map(i => i + 1)

  return (
    <div aria-label={'Pagination'} className={s.pagination}>
      <div className={s.pages}>
        <PageItem>
          <KeyboardArrowLeft />
        </PageItem>
        {pagesArr.map((p, idx) => {
          return (
            <PageItem active={p === currentPage} key={idx}>
              <Typography variant={TypographyOption.Body2}>{p}</Typography>
            </PageItem>
          )
        })}
        <PageItem>
          <KeyboardArrowRight />
        </PageItem>
      </div>
      <div className={s.select}>
        <Typography variant={TypographyOption.Body2}>Показать</Typography>
        <Select placeholder={placeholder} selectItems={selectItems} variant={variant} />
        <Typography variant={TypographyOption.Body2}>на странице</Typography>
      </div>
    </div>
  )
}
