import type { Meta, StoryObj } from '@storybook/react'

import { EditProfile } from '@/components'

const meta = {
  component: EditProfile,
  tags: ['autodocs'],
  title: 'auth/EditProfile',
} satisfies Meta<typeof EditProfile>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    avatar: '123',
    profileName: 'Ivan',
  },
}
