import type { Meta, StoryObj } from '@storybook/react'

import { CreateNewPasswordForm } from '@/components'

const meta = {
  component: CreateNewPasswordForm,
  tags: ['autodocs'],
  title: 'auth/CreateNewPasswordForm',
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
