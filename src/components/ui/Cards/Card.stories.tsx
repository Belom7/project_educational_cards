import type { Meta, StoryObj } from '@storybook/react'

import { TypographyOption } from '@/common/enums'
import { Typography } from '@/components/ui/Typography/Typography'

import { Card } from './Card'

const meta = {
  component: Card,
  tags: ['autoocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <Typography variant={TypographyOption.H1}>Card</Typography>,
    style: {
      height: '300px',
      padding: '24px',
      width: '300px',
    },
  },
}
