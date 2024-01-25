import { Link } from 'react-router-dom'

import { ButtonOption, TypographyOption } from '@/common/enums'
import { Table, TableBody, TableCell, TableHeader, TableRow, Typography } from '@/components'
import { ButtonPlay, EditTablePencil, Trash } from '@/components/assets'
import { Button } from '@/components/ui/Button'
import { BaseDeckResponseType, columns } from '@/features'

import s from './packTable.module.scss'

export type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null
type Props = {
  data: BaseDeckResponseType | null
  onSort: (sort: Sort) => void
  sort: Sort | undefined
}

export const PackTable: React.FC<Props> = ({ data, onSort, sort }) => {
  return (
    <>
      <div className={s.cardWrapper}>
        <Table className={s.tableWrapper}>
          <TableHeader className={s.tableHeader} columns={columns} onSort={onSort} sort={sort} />
          <TableBody>
            {data?.items?.map((el: any) => {
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
    </>
  )
}
