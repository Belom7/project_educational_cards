import type { Meta, StoryObj } from '@storybook/react'

import { SingUpForm } from '@/components/auth/sing-up/SingUpForm'

const meta = {
  component: SingUpForm,
  tags: ['autodocs'],
  title: 'Auth/SingUpForm',
} satisfies Meta<typeof SingUpForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    onSubmit: data => {
      console.log(data)
    },
  },
}
