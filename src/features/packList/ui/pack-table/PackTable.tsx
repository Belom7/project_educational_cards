import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { ButtonPlayIcon, EditTablePencilIcon, TrashIcon } from '@/assets'
import { ButtonOption, Routes, TypographyOption, formatDate } from '@/common'
import {
  Button,
  Sort,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Typography,
} from '@/components'
import { BaseDeckResponseType, DeletePackModal, EditPackModal, columns } from '@/features'

import s from './PackTable.module.scss'

type Props = {
  data: BaseDeckResponseType | null
  onSort: (sort: Sort) => void
  sort: Sort | undefined
  userId: string | undefined
}

export const PackTable: React.FC<Props> = ({ data, onSort, sort, userId }) => {
  const navigate = useNavigate()
  const learnCallback = (id: string) => {
    navigate(`${Routes.Decks}/:${id}/learn`)
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
                    <span className={s.buttons}>
                      <Button onClick={() => learnCallback(el.id)} variant={ButtonOption.Icon}>
                        <ButtonPlayIcon height={16} width={16} />
                      </Button>
                      {isMyDeck && (
                        <>
                          <EditPackModal
                            packId={el.id}
                            trigger={
                              <Button variant={ButtonOption.Icon}>
                                <EditTablePencilIcon />
                              </Button>
                            }
                            values={values}
                          />
                          <DeletePackModal
                            deckId={el.id}
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
