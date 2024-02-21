import { FC } from 'react'

import { EditTablePencilIcon, TrashIcon } from '@/assets'
import { ButtonOption, formatDate } from '@/common'
import { Button, Rating, Table, TableBody, TableCell, TableHeader, TableRow } from '@/components'
import { Card, Sort } from '@/features'

import s from './CardsTable.module.scss'

type Props = {
  cards: Card[]
  onSort: (value: Sort) => void
  sort?: Sort
}

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

export const CardsTable: FC<Props> = ({ cards, onSort, sort }) => {
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
          {cards?.map((el: any, index: number) => {
            return (
              <TableRow className={s.tableRow} key={index}>
                <TableCell>{el.question}</TableCell>
                <TableCell>{el.answer}</TableCell>
                <TableCell>{formatDate(el.updated)}</TableCell>
                <TableCell className={s.tableCreatedBy}>
                  <Rating rating={parseInt(el.shots ? el.shots : '0')} />
                  <span>
                    <Button className={s.icon} variant={ButtonOption.Icon}>
                      <EditTablePencilIcon />
                    </Button>
                    <Button className={s.icon} variant={ButtonOption.Icon}>
                      <TrashIcon />
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
