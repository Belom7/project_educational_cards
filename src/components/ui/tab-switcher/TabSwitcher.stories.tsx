import type { Meta, StoryObj } from '@storybook/react'

import { TabSwitcher } from '@/components'

const meta = {
  component: TabSwitcher,
  tags: ['autodocs'],
  title: 'components/TabSwitcher',
} satisfies Meta<typeof TabSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
