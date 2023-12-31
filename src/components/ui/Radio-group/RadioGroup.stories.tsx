import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from '@/components/ui/Radio-group/RadioGroup'

const meta = {
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const NoAuthorized: Story = {
  args: {
    items: [
      {
        title: 'RadioGroup1',
      },
      {
        title: 'RadioGroup2',
      },
      {
        title: 'RadioGroup3',
      },
      {
        title: 'RadioGroup4',
      },
    ],
  },
}
