import type { Meta, StoryObj } from '@storybook/react'

import { Rating } from '@/components'

const meta = {
  component: Rating,
  tags: ['autodocs'],
  title: 'Components/rating',
} satisfies Meta<typeof Rating>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    rating: 0,
  },
}
export const Normal: Story = {
  args: {
    rating: 3,
  },
}
export const Full: Story = {
  args: {
    rating: 5,
  },
}
