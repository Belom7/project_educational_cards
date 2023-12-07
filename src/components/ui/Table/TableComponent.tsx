import { useState } from 'react'

import { ButtonOption } from '@/common/enums'
import { ButtonPlay, EditTablePencil, Trash } from '@/components/assets'
import { Button } from '@/components/ui/Button'
import {
  Sort,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '@/components/ui/Table/Table'

import s from './Table.module.scss'

type item = {
  cardsCount: number
  createdBy: string
  title: string
  updated: string
}
type TableComponentPropsType = {
  data: item[]
}
const columns = [
  {
    key: 'name',
    sortable: true,
    title: 'Name',
  },
  {
    key: 'cardsCount',
    title: 'Cards',
  },
  {
    key: 'updated',
    sortable: true,
    title: 'Last Updated',
  },
  {
    key: 'createdBy',
    title: 'Created by',
  },
]

export const TableComponent: React.FC<TableComponentPropsType> = ({ data }) => {
  const [sort, setSort] = useState<Sort>(null)
  const onSort = (sort: Sort) => {
    setSort(sort)
  }

  return (
    <div className={s.cardWrapper}>
      <Table className={s.tableWrapper}>
        <TableHeader
          className={s.tableHeader}
          columns={columns}
          onSort={onSort}
          sort={sort}
        ></TableHeader>
        <TableBody>
          {data?.map(el => {
            return (
              <TableRow className={s.tableRow} key={el.title}>
                <TableCell>{el.title}</TableCell>
                <TableCell>{el.cardsCount}</TableCell>
                <TableCell>{el.updated}</TableCell>
                <TableCell className={s.tableCreatedBy}>
                  <span>{el.createdBy}</span>
                  <span>
                    <Button variant={ButtonOption.Icon}>
                      <ButtonPlay />
                    </Button>
                    <Button variant={ButtonOption.Icon}>
                      <EditTablePencil />
                    </Button>
                    <Button variant={ButtonOption.Icon}>
                      <Trash />
                    </Button>
                  </span>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
