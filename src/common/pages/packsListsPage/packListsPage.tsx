import { useState } from 'react'
import { ButtonOption, TypographyOption } from '@/common/enums'
import { Pagination, SelectItemArgs } from '@/components'
import { Trash } from '@/components/assets'
import { Button } from '@/components/ui/Button'
import { Slider } from '@/components/ui/Slider'
import { TabSwitcher } from '@/components/ui/Tab-Switcher'
import { TextField } from '@/components/ui/Text-field'
import { Typography } from '@/components/ui/Typography'
import { PackTable, useGetDecksQuery } from '@/features'

import s from './packListsPage.module.scss'

const paginationSelectItems: SelectItemArgs[] = [
  { child: '5', value: '5' },
  { child: '10', value: '10' },
  { child: '20', value: '20' },
]

export const PackListsPage = () => {
  const { data } = useGetDecksQuery({})

  console.log(data)
  const [itemsPerPage, setItemsPerPage] = useState(Number(paginationSelectItems[1].value))
  const [currentPage, setCurrentPage] = useState(1)
  // const onChangeCurrentPage = () => {}
  const onChangeItemsPerPage = (value: string) => {
    setCurrentPage(1)
    setItemsPerPage(Number(value))
  }
  const [value, setValue] = useState([0, 10])

  const handleOnValueChange = (value: number[]) => {
    setValue(value)
  }

  return (
    <>
      <div className={s.main}>
        <div className={s.wrapper}>
          <div className={s.packsList}>
            <Typography variant={TypographyOption.H1}>Decks list</Typography>
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
          <PackTable data={data || null} />
          <Pagination
            currentPage={currentPage}
            itemsCount={data?.pagination?.totalPages}
            itemsPerPage={itemsPerPage}
            onValueChange={onChangeItemsPerPage}
            placeholder={paginationSelectItems[1].child}
            selectItems={paginationSelectItems}
            setCurrentPage={setCurrentPage}
            variant={'pagination'}
          />
        </div>
      </div>
    </>
  )
}
