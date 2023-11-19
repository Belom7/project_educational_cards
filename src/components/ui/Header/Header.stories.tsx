import type { Meta, StoryObj } from '@storybook/react'

import { Header } from '@/components/ui/Header/Header'

const meta = {
  component: Header,
  tags: ['autoocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const NoAuthorized: Story = {
  args: {
    authorized: false,
  },
}
export const Authorized: Story = {
  args: {
    authorized: true,
  },
}
