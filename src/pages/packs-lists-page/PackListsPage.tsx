import { useState } from 'react'

import { formatSortedString, useDebounce } from '@/common'
import { ButtonOption, TypographyOption } from '@/common/enums'
import { Pagination, SelectItemArgs } from '@/components'
import { Trash } from '@/components/assets'
import { PackTable, useGetDecksQuery, usePackOptions } from '@/features'

import s from './PackListsPage.module.scss'

import { Button } from '../../components/ui/button'
import { Slider } from '../../components/ui/slider'
import { TabSwitcher } from '../../components/ui/tab-switcher'
import { TextField } from '../../components/ui/text-field'
import { Typography } from '../../components/ui/typography'
import { AddPackModal } from '../../features/packList/ui/AddNewPack/add-new-pack-modal'

const paginationSelectItems: SelectItemArgs[] = [
  { child: '5', value: '5' },
  { child: '10', value: '10' },
  { child: '20', value: '20' },
]

export const PackListsPage = () => {
  const {
    authorId,
    cardsCount,
    clearFilterCallback,
    currentPage,
    onChangeCurrentPageCallback,
    onChangePageSizeCallback,
    onChangeSliderValueCallback,
    onChangeSortCallback,
    onChangeSwitcherCardsCallback,
    onSearchCallback,
    pageSize,
    searchDeckName,
    sortOptions,
    userId,
  } = usePackOptions()
  const searchName = useDebounce(searchDeckName)
  const sortedString = formatSortedString(sortOptions)
  const { data } = useGetDecksQuery({
    authorId,
    currentPage,
    itemsPerPage: pageSize,
    maxCardsCount: cardsCount.maxCardsCount,
    minCardsCount: cardsCount.minCardsCount,
    name: searchName,
    orderBy: sortedString,
  })

  const [value, setValue] = useState([0, 61])

  console.log(value)
  const handleSliderOnValueChange = (value: number[]) => {
    setValue(value)
    onChangeSliderValueCallback(value)
  }

  return (
    <>
      <div className={s.main}>
        <div className={s.wrapper}>
          <div className={s.packsList}>
            <Typography variant={TypographyOption.H1}>Decks list</Typography>
            <AddPackModal
              trigger={
                <Button>
                  <Typography variant={TypographyOption.Subtitle2}>Add New Pack</Typography>
                </Button>
              }
            />
          </div>
          <div className={s.underCap}>
            <TextField
              className={s.searchTextField}
              onValueChange={onSearchCallback}
              placeholder={'Input search'}
              value={searchDeckName}
            ></TextField>
            <TabSwitcher onChangeSwitcherCardsCallback={onChangeSwitcherCardsCallback} />
            <Slider
              max={data?.maxCardsCount}
              onValueChange={handleSliderOnValueChange}
              title={'Number of cards'}
              value={value}
            />
            <Button onClick={clearFilterCallback} variant={ButtonOption.Secondary}>
              <>
                <Trash />
                <Typography variant={TypographyOption.Subtitle2}>Clear Filter</Typography>
              </>
            </Button>
          </div>
          <PackTable
            data={data || null}
            onSort={onChangeSortCallback}
            sort={sortOptions}
            userId={userId || undefined}
          />
          <Pagination
            currentPage={currentPage}
            itemsCount={data?.pagination?.totalPages}
            itemsPerPage={Number(pageSize)}
            onValueChange={onChangePageSizeCallback}
            placeholder={paginationSelectItems[1].child}
            selectItems={paginationSelectItems}
            setCurrentPage={onChangeCurrentPageCallback}
            variant={'pagination'}
          />
        </div>
      </div>
    </>
  )
}
