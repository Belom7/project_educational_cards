import { Select, SelectItemArgs } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Select> = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const defaultSelectItems: SelectItemArgs[] = [
  { child: 'Select-box1', value: 'Select-box1' },
  { child: 'Select-box2', value: 'Select-box2' },
  { child: 'Select-box3', value: 'Select-box3' },
]

export const Default: Story = {
  args: {
    className: 'default',
    disabled: false,
    fullWidth: false,
    placeholder: 'Select value',
    selectItems: defaultSelectItems,
    title: 'Select-box',
    variant: 'default',
  },
}

export const fullWidth: Story = {
  args: {
    className: 'default',
    disabled: false,
    fullWidth: true,
    placeholder: 'Select value',
    selectItems: defaultSelectItems,
    title: 'Select-box',
    variant: 'default',
  },
}

export const Disabled: Story = {
  args: {
    className: 'default',
    disabled: true,
    fullWidth: false,
    placeholder: 'Select value',
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
