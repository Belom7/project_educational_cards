import type { Meta, StoryObj } from '@storybook/react'

import { Dayn } from '@/components/ui/Drop-down-menu/dropDayn/dayn'

const meta = {
  component: Dayn,
  tags: ['autoocs'],
  title: 'Components/Dayn',
} satisfies Meta<typeof Dayn>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
