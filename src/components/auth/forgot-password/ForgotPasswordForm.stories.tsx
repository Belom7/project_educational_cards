import type { Meta, StoryObj } from '@storybook/react'

import { ForgotPasswordForm } from '@/components'

const meta = {
  component: ForgotPasswordForm,
  tags: ['autodocs'],
  title: 'Auth/forgotPasswordForm',
} satisfies Meta<typeof ForgotPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    onSubmit: data => {
      console.log(data)
    },
  },
}
