import { useState } from 'react'

import { ButtonOption } from '@/common/enums'
import { ButtonPlay, EditTablePencil, Trash } from '@/components/assets'
import { Button } from '@/components/ui/Button'
import { Rating } from '@/components/ui/Rating'
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
  answer?: string
  cardsCount?: number
  createdBy?: string
  question?: string
  shots?: string
  title?: string
  updated?: string
}
type column = {
  key: string
  sortable?: boolean
  title: string
}
type TableComponentPropsType = {
  data: item[]
  me?: boolean
  packList?: boolean
  tableHeaderData?: column[]
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

export const TableComponent: React.FC<TableComponentPropsType> = ({
  data,
  me,
  packList = true,
  tableHeaderData = columns,
}) => {
  const [sort, setSort] = useState<Sort>(null)

  const onSort = (sort: Sort) => {
    setSort(sort)
  }

  return (
    <div className={s.cardWrapper}>
      <Table className={s.tableWrapper}>
        <TableHeader
          className={s.tableHeader}
          columns={tableHeaderData}
          onSort={onSort}
          sort={sort}
        ></TableHeader>
        {packList ? <PackList data={data} /> : <Pack data={data} me={me} />}
      </Table>
    </div>
  )
}
const PackList: React.FC<Omit<TableComponentPropsType, 'tableHeaderData'>> = ({ data }) => {
  return (
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
  )
}
const Pack: React.FC<Omit<TableComponentPropsType, 'tableHeaderData'>> = ({ data }) => {
  return (
    <TableBody>
      {data?.map((el, index) => {
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
  )
}
