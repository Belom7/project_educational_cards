import { FC } from 'react'

import { EditTablePencilIcon, TrashIcon } from '@/assets'
import { ButtonOption, formatDate } from '@/common'
import {
  Button,
  Rating,
  Sort,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '@/components'
import { Card, DeleteCard } from '@/features'
import { getCardsFieldsHeaders } from '@/features/decks/ui/cards-table/cards-fields-headers'

import s from './CardsTable.module.scss'

type Props = {
  cards: Card[]
  isCurrentUser: boolean
  onSort: (value: Sort) => void
  sort?: Sort
}

export const CardsTable: FC<Props> = ({ cards, isCurrentUser, onSort, sort }) => {
  return (
    <div className={s.cardWrapper}>
      <Table className={s.tableWrapper}>
        <TableHeader
          className={s.tableHeader}
          columns={getCardsFieldsHeaders(isCurrentUser)}
          onSort={onSort}
          sort={sort}
        ></TableHeader>
        <TableBody>
          {cards?.map((el: Card, index: number) => {
            return (
              <TableRow className={s.tableRow} key={index}>
                <TableCell>{el.question}</TableCell>
                <TableCell>{el.answer}</TableCell>
                <TableCell>{formatDate(el.updated)}</TableCell>
                <TableCell className={s.tableCreatedBy}>
                  <Rating rating={el.grade} />
                </TableCell>
                {isCurrentUser && (
                  <TableCell>
                    <Button className={s.icon} variant={ButtonOption.Icon}>
                      <EditTablePencilIcon />
                    </Button>
                    <DeleteCard
                      cardId={el.id}
                      trigger={
                        <Button className={s.icon} variant={ButtonOption.Icon}>
                          <TrashIcon />
                        </Button>
                      }
                    />
                  </TableCell>
                )}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
