import type { Meta, StoryObj } from '@storybook/react'

import {EditProfileComponent} from '@/components/auth/editProfile/editProfileComponent'

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
