import type { Meta, StoryObj } from '@storybook/react'

import { CheckEmailForm } from '@/components'

const meta = {
  component: CheckEmailForm,
  tags: ['autodocs'],
  title: 'Auth/checkEmailForm',
} satisfies Meta<typeof CheckEmailForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    email: 'example@mail.com',
  },
}
