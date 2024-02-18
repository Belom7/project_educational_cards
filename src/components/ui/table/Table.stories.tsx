import { CardsTable } from '@/features'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: CardsTable,
  tags: ['autodocs'],
  title: 'components/Table',
} satisfies Meta<typeof CardsTable>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
