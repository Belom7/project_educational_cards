import { Pagination } from '@/components/ui/Pagination/Pagination'
import { SelectItemArgs } from '@/components/ui/Select'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

const paginationSelectItems: SelectItemArgs[] = [
  { child: '10', value: '10' },
  { child: '25', value: '25' },
  { child: '50', value: '50' },
  { child: '100', value: '100' },
]

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
