import type { Meta, StoryObj } from '@storybook/react'

import { SingUpForm } from '@/components'

const meta = {
  component: SingUpForm,
  tags: ['autodocs'],
  title: 'auth/SingUpForm',
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
