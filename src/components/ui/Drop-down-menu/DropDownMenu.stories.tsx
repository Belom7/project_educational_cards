import type { Meta, StoryObj } from '@storybook/react'

import { ButtonOption } from '@/common/enums'
import { Button } from '@/components/ui/Button'
import { DropDownMenuFix } from '@/components/ui/Drop-down-menu/DropDownMenufFix'

const meta = {
  component: DropDownMenuFix,
  tags: ['autoocs'],
  title: 'Components/DropDownMenu',
} satisfies Meta<typeof DropDownMenuFix>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <Button variant={ButtonOption.Link}>DropDownMenu</Button>
      // <DropDownMenu />
    ),
  },
}
