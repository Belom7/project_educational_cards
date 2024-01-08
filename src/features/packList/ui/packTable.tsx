import React, { useState } from 'react'

import { ButtonOption } from '@/common/enums'
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components'
import { ButtonPlay, EditTablePencil, Trash } from '@/components/assets'
import { Button } from '@/components/ui/Button'
import { useGetDecksQuery } from '@/features'

import s from './packTable.module.scss'
export type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null
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

export const PackTable: React.FC<{}> = () => {
  const { data } = useGetDecksQuery()

  console.log(data)
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
          {data?.items?.map((el: any) => {
            return (
              <TableRow className={s.tableRow} key={el.id}>
                <TableCell>{el.name}</TableCell>
                <TableCell>{el.cardsCount}</TableCell>
                <TableCell>{el.updated}</TableCell>
                <TableCell className={s.tableCreatedBy}>
                  <span>{el.author.name}</span>
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
