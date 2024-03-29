import type { Meta, StoryObj } from '@storybook/react'

import { LoginForm } from '@/components'

const meta = {
  component: LoginForm,
  tags: ['autodocs'],
  title: 'auth/LoginForm',
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    onSubmit: data => {
      console.log(data)
    },
  },
}
