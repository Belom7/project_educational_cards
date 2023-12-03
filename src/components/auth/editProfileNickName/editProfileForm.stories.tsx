import type { Meta, StoryObj } from '@storybook/react'

import { EditProfileForm } from '@/components/auth/editProfileNickName/editProfileForm'

const meta = {
  component: EditProfileForm,
  tags: ['autodocs'],
  title: 'Auth/EditProfile Form',
} satisfies Meta<typeof EditProfileForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    avatar: '123',
    onSubmit: data => {
      console.log(data)
    },
    profileName: 'Ivan',
  },
}
