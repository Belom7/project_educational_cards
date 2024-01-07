import { useState } from 'react'

import { ButtonOption } from '@/common/enums'
import { Button, Rating, Table, TableBody, TableCell, TableHeader, TableRow } from '@/components'
import { ButtonPlay, EditTablePencil, Trash } from '@/components/assets'
import { Sort } from '@/features'

import s from './deckTable.module.scss'
const columns = [
  {
    key: 'Question',
    title: 'Question',
  },
  {
    key: 'Answer',
    title: 'Answer',
  },
  {
    key: 'Last Updated',
    sortable: true,
    title: 'Last Updated',
  },
  {
    key: 'Grade',
    title: 'Grade',
  },
]

export const DeckTable = () => {
  const data: any = [
    {
      answer: 'HELLOW',
      question: 'asdasd',
      shots: '4',
      updated: 'asdasdsad',
    },
  ]
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
          {data?.map((el: any, index: number) => {
            return (
              <TableRow className={s.tableRow} key={index}>
                <TableCell>{el.question}</TableCell>
                <TableCell>{el.answer}</TableCell>
                <TableCell>{el.updated}</TableCell>
                <TableCell className={s.tableCreatedBy}>
                  <Rating rating={parseInt(el.shots ? el.shots : '0')} />
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
