import type { Meta, StoryObj } from '@storybook/react'

import { DropDownMenu } from '@/components/ui/Drop-down-menu/DropDownMenu'


const meta = {
  component: DropDownMenu,
  tags: ['autoocs'],
  title: 'Components/DropDownMenu',
} satisfies Meta<typeof DropDownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <img alt={''} />
      // <DropDownMenu />
    ),
  },
}
