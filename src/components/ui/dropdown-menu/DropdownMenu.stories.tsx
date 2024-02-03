import type { Meta, StoryObj } from '@storybook/react'

import { DropdownMenu } from '@/components'

const meta = {
  component: DropdownMenu,
  tags: ['autoocs'],
  title: 'Components/DropdownMenu',
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <img alt={''} />
      // <DropdownMenu />
    ),
  },
}
