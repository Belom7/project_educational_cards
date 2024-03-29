import { FC } from 'react'

import { TrashIcon } from '@/assets'
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
import { Card, DeleteCard, EditCard } from '@/features'
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
          {cards?.map((card: Card, index: number) => {
            return (
              <TableRow className={s.tableRow} key={index}>
                <TableCell>
                  <div className={s.tableCell}>
                    {card.questionImg && <img className={s.img} src={card.questionImg} />}
                    {card.question}
                  </div>
                </TableCell>
                <TableCell>
                  <div className={s.tableCell}>
                    {card.answerImg && <img className={s.img} src={card.answerImg} />}
                    {card.answer}
                  </div>
                </TableCell>
                <TableCell>{formatDate(card.updated)}</TableCell>
                <TableCell className={s.tableCreatedBy}>
                  <Rating rating={card.grade} />
                </TableCell>
                {isCurrentUser && (
                  <TableCell>
                    <EditCard card={card} />
                    <DeleteCard
                      cardId={card.id}
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
