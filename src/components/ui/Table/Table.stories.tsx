import { DeckTable } from '@/features'
import { Meta, StoryObj } from '@storybook/react'



const meta = {
  component: DeckTable,
  tags: ['autodocs'],
  title: 'Components/Table',
} satisfies Meta<typeof DeckTable>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
