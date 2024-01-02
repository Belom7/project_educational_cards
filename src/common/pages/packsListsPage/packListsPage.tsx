import { useState } from 'react'

import { ButtonOption, TypographyOption } from '@/common/enums'
import { Trash } from '@/components/assets'
import { Button } from '@/components/ui/Button'
import { Header } from '@/components/ui/Header'
import { Slider } from '@/components/ui/Slider'
import { TabSwitcher } from '@/components/ui/Tab-Switcher'
import { TableComponent } from '@/components/ui/Table/TableComponent'
import { TextField } from '@/components/ui/Text-field'
import { Typography } from '@/components/ui/Typography'

import s from './packListsPage.module.scss'
const data = [
  {
    cardsCount: 10,
    createdBy: 'John Doe',
    title: 'Project A',
    updated: '2023-07-07',
  },
  {
    cardsCount: 5,
    createdBy: 'Jane Smith',
    title: 'Project B',
    updated: '2023-07-06',
  },
  {
    cardsCount: 8,
    createdBy: 'Alice Johnson',
    title: 'Project C',
    updated: '2023-07-05',
  },
  {
    cardsCount: 3,
    createdBy: 'Bob Anderson',
    title: 'Project D',
    updated: '2023-07-07',
  },
  {
    cardsCount: 12,
    createdBy: 'Emma Davis',
    title: 'Project E',
    updated: '2023-07-04',
  },
]

export const PackListsPage = () => {
  const [value, setValue] = useState([0, 10])

  const handleOnValueChange = (value: number[]) => {
    setValue(value)
  }

  return (
    <>
      <Header authorized></Header>
      <div className={s.main}>
        <div className={s.wrapper}>
          <div className={s.packsList}>
            <Typography variant={TypographyOption.H1}>Packs list</Typography>
            <Button>
              <Typography variant={TypographyOption.Subtitle2}>Add New Pack</Typography>
            </Button>
          </div>
          <div className={s.underCap}>
            <TextField className={s.searchTextField}></TextField>
            <TabSwitcher />
            <Slider onValueChange={handleOnValueChange} title={'Number of cards'} value={value} />
            <Button variant={ButtonOption.Secondary}>
              <>
                <Trash />
                <Typography variant={TypographyOption.Subtitle2}>Clear Filter</Typography>
              </>
            </Button>
          </div>
          <TableComponent data={data} />
        </div>
      </div>
    </>
  )
}
