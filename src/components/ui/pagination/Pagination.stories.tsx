import { useState } from 'react'

import { Pagination, SelectItemArgs } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  tags: ['autodocs'],
  title: 'components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

const paginationSelectItems: SelectItemArgs[] = [
  { child: '5', value: '5' },
  { child: '10', value: '10' },
  { child: '20', value: '20' },
  { child: '50', value: '50' },
]

const PaginationWithLocalState = () => {
  const [itemsPerPage, setItemsPerPage] = useState(Number(paginationSelectItems[1].value))
  const [currentPage, setCurrentPage] = useState(1)

  const onChangeItemsPerPage = (value: string) => {
    setCurrentPage(1)
    setItemsPerPage(Number(value))
  }

  console.log(currentPage)

  return (
    <Pagination
      currentPage={currentPage}
      itemsCount={111}
      itemsPerPage={itemsPerPage}
      onValueChange={onChangeItemsPerPage}
      placeholder={paginationSelectItems[1].child}
      selectItems={paginationSelectItems}
      setCurrentPage={setCurrentPage}
      variant={'pagination'}
    />
  )
}

export const Default: Story = {
  args: {
    currentPage: 1,
    itemsCount: 100,
    itemsPerPage: 10,
    placeholder: paginationSelectItems[3].child,
    selectItems: paginationSelectItems,
    variant: 'pagination',
  },
}

export const Controlled: Story = {
  render: () => <PaginationWithLocalState />,
}
