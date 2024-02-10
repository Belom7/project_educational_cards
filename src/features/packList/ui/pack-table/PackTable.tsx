import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { ButtonPlayIcon, EditTablePencilIcon, TrashIcon } from '@/assets'
import { ButtonOption, Routes, TypographyOption, formatDate } from '@/common'
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Typography,
} from '@/components'
import { BaseDeckResponseType, DeletePackModal, EditPackModal, columns } from '@/features'

import s from './PackTable.module.scss'

export type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null
type Props = {
  data: BaseDeckResponseType | null
  onSort: (sort: Sort) => void
  sort: Sort | undefined
  userId: string | undefined
}

export const PackTable: React.FC<Props> = ({ data, onSort, sort, userId }) => {
  const navigate = useNavigate()
  const learnCallback = () => {
    navigate(Routes.Deck)
  }

  return (
    <>
      <div className={s.cardWrapper}>
        <Table className={s.tableWrapper}>
          <TableHeader className={s.tableHeader} columns={columns} onSort={onSort} sort={sort} />
          <TableBody>
            {data?.items?.map((el: any) => {
              const isMyDeck = el?.author.id === userId

              const values = {
                cover: el.cover,
                isPrivate: el.isPrivate,
                name: el.name,
              }

              return (
                <TableRow className={s.tableRow} key={el.id}>
                  <TableCell className={s.cellName}>
                    <Link className={s.deckLinkText} to={`${Routes.Decks}/${el.id}/cards`}>
                      <div className={s.cellImage}>
                        {el.cover && <img alt={'deck-cover'} className={s.image} src={el.cover} />}
                        <Typography variant={TypographyOption.Body2}>{el.name}</Typography>
                      </div>
                    </Link>
                  </TableCell>
                  <TableCell>{el.cardsCount}</TableCell>
                  <TableCell>{formatDate(el.updated)}</TableCell>
                  <TableCell>{el.author.name}</TableCell>
                  <TableCell>
                    <span>
                      <Button onClick={learnCallback} variant={ButtonOption.Icon}>
                        <ButtonPlayIcon />
                      </Button>
                      {isMyDeck && (
                        <>
                          <EditPackModal
                            trigger={
                              <Button variant={ButtonOption.Icon}>
                                <EditTablePencilIcon />
                              </Button>
                            }
                            values={values}
                          />
                          <DeletePackModal
                            id={el.id}
                            packName={el.name}
                            trigger={
                              <Button variant={ButtonOption.Icon}>
                                <TrashIcon />
                              </Button>
                            }
                          />
                        </>
                      )}
                    </span>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </>
  )
}
