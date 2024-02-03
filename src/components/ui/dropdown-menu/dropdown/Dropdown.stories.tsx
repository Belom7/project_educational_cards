import type { Meta, StoryObj } from '@storybook/react'

import { Dropdown } from '@/components/ui/Drop-down-menu/dropdown/Dropdown'

const meta = {
  component: Dropdown,
  tags: ['autoocs'],
  title: 'Components/Dropdown',
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
