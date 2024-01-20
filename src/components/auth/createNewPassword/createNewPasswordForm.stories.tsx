import type { Meta, StoryObj } from '@storybook/react'

import { CreateNewPasswordForm } from '@/components/auth/createNewPassword/createNewPasswordForm'

const meta = {
  component: CreateNewPasswordForm,
  tags: ['autodocs'],
  title: 'Auth/createNewPasswordForm',
} satisfies Meta<typeof CreateNewPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    onSubmit: data => {
      console.log(data)
    },
  },
}
