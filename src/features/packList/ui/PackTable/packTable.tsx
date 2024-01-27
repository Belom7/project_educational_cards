import { Link } from 'react-router-dom'

import { ButtonOption, TypographyOption } from '@/common/enums'
import { Table, TableBody, TableCell, TableHeader, TableRow, Typography } from '@/components'
import { ButtonPlay, EditTablePencil, Trash } from '@/components/assets'
import { Button } from '@/components/ui/Button'
import { BaseDeckResponseType, DeletePackModal, columns } from '@/features'
import { EditPackModal } from '@/features/packList/ui'

import s from './packTable.module.scss'

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
                    <Link className={s.deckLinkText} to={`/`}>
                      <div className={s.cellImage}>
                        {el.cover && <img alt={'deck-cover'} className={s.image} src={el.cover} />}
                        <Typography variant={TypographyOption.Body2}>{el.name}</Typography>
                      </div>
                    </Link>
                  </TableCell>
                  <TableCell>{el.cardsCount}</TableCell>
                  <TableCell>{el.updated}</TableCell>
                  <TableCell>{el.author.name}</TableCell>
                  <TableCell>
                    <span>
                      <Button variant={ButtonOption.Icon}>
                        <ButtonPlay />
                      </Button>
                      {isMyDeck && (
                        <>
                          <EditPackModal
                            trigger={
                              <Button variant={ButtonOption.Icon}>
                                <EditTablePencil />
                              </Button>
                            }
                            values={values}
                          />
                          <DeletePackModal
                            id={el.id}
                            packName={el.name}
                            trigger={
                              <Button variant={ButtonOption.Icon}>
                                <Trash />
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
