import type { Meta, StoryObj } from '@storybook/react'

import { EditProfileComponent } from '@/components/auth/edit-profile/EditProfileComponent'

const meta = {
  component: EditProfileComponent,
  tags: ['autodocs'],
  title: 'Auth/EditProfile',
} satisfies Meta<typeof EditProfileComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    avatar: '123',
    profileName: 'Ivan',
  },
}
