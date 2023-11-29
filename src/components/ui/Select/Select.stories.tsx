import { Meta, StoryObj } from '@storybook/react'

import { Select, SelectItemArgs } from './Select'

const meta: Meta<typeof Select> = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const defaultSelectItems: SelectItemArgs[] = [
  { child: 'Select-box', value: 'Select-box1' },
  { child: 'Select-box', value: 'Select-box2' },
  { child: 'Select-box', value: 'Select-box3' },
]

export const Default: Story = {
  args: {
    className: 'default',
    disabled: false,
    placeholder: defaultSelectItems[0].child,
    selectItems: defaultSelectItems,
    title: 'Select-box',
    variant: 'default',
  },
}

const paginationSelectItems: SelectItemArgs[] = [
  { child: '10', value: '10' },
  { child: '25', value: '25' },
  { child: '50', value: '50' },
  { child: '100', value: '100' },
]

export const Pagination: Story = {
  args: {
    className: 'pagination',
    disabled: false,
    placeholder: paginationSelectItems[3].child,
    selectItems: paginationSelectItems,
    title: 'Select-box',
    variant: 'pagination',
  },
}
