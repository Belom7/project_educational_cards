import { ComponentPropsWithoutRef, ElementRef, JSX, forwardRef } from 'react'

import { ArrowUpIcon } from '@/assets'
import { TypographyOption } from '@/common'
import { Typography } from '@/components'
import { clsx } from 'clsx'

import s from './Table.module.scss'

export const Table = forwardRef<HTMLTableElement, ComponentPropsWithoutRef<'table'>>(
  ({ className, ...rest }, ref) => {
    const classNames = {
      table: clsx(className, s.table),
    }

    return <table className={classNames.table} {...rest} ref={ref} />
  }
)
export const TableHead = forwardRef<ElementRef<'thead'>, ComponentPropsWithoutRef<'thead'>>(
  ({ ...rest }, ref) => {
    return <thead {...rest} ref={ref} />
  }
)
export type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null

export type Column = {
  key: string
  sortable?: boolean
  title: string
}
type WithoutTableProps = {
  mb?: string
  mt?: string
  text?: string
} & ComponentPropsWithoutRef<'div'>
type Props = Omit<
  ComponentPropsWithoutRef<typeof TableHead> & {
    columns: Column[]
    onSort?: (sort: Sort) => void
    sort?: Sort
  },
  'children'
>
export const TableHeader = forwardRef<ElementRef<typeof TableHead>, Props>(
  ({ columns, onSort, sort, ...restProps }, ref): JSX.Element => {
    console.log(sort)
    const handleSort = (key: string, sortable?: boolean) => () => {
      if (!onSort || !sortable) {
        return
      }
      if (sort?.key !== key) {
        return onSort({ direction: 'asc', key })
      }
      if (sort.direction === 'desc') {
        return onSort(null)
      }

      return onSort({
        direction: sort?.direction === 'asc' ? 'desc' : 'asc',
        key,
      })
    }

    return (
      <TableHead ref={ref} {...restProps}>
        <TableRow>
          {columns.map(({ key, sortable, title }) => (
            <TableHeadCell key={key} onClick={handleSort(key, sortable)}>
              <Typography className={s.tableHeaderTypography} variant={TypographyOption.Subtitle2}>
                {title}
                {sort && sort.key === key && (
                  <>
                    {sort.direction === 'asc' && <ArrowUpIcon />}
                    {sort.direction !== 'asc' && <ArrowUpIcon className={s.sortIcon} />}
                  </>
                )}
              </Typography>
            </TableHeadCell>
          ))}
        </TableRow>
      </TableHead>
    )
  }
)
export const TableBody = forwardRef<ElementRef<'tbody'>, ComponentPropsWithoutRef<'tbody'>>(
  ({ ...rest }, ref) => {
    return <tbody {...rest} ref={ref} />
  }
)
export const TableRow = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ ...rest }, ref) => {
    return <tr {...rest} ref={ref} />
  }
)
export const TableHeadCell = forwardRef<ElementRef<'th'>, ComponentPropsWithoutRef<'th'>>(
  ({ className, ...restProps }, ref) => {
    const classNames = {
      headCell: clsx(className, s.headCell),
    }

    return <th className={classNames.headCell} {...restProps} ref={ref} />
  }
)
export const TableCell = forwardRef<ElementRef<'td'>, ComponentPropsWithoutRef<'td'>>(
  ({ className, ...rest }, ref) => {
    const classNames = {
      cell: clsx(className, s.tableCell),
    }

    return (
      <td className={classNames.cell} {...rest} ref={ref}>
        <Typography variant={TypographyOption.Body2}>{rest.children}</Typography>
      </td>
    )
  }
)
export const WithoutTable = forwardRef<ElementRef<'div'>, WithoutTableProps>(
  (
    { children, className, mb, mt = '89px', text = 'There is no data here yet!', ...restProps },
    ref
  ): JSX.Element => {
    const classNames = {
      withoutTable: clsx(className, s.withoutTable),
      withoutTableText: clsx(className, s.withoutTableText),
    }

    return (
      <div className={classNames.withoutTable} ref={ref} {...restProps}>
        <Typography
          className={classNames.withoutTableText}
          style={{ marginBottom: mb, marginTop: mt }}
          variant={TypographyOption.H2}
        >
          {text}
        </Typography>
        {children}
      </div>
    )
  }
)
