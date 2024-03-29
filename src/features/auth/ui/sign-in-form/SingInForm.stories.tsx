import type { Meta, StoryObj } from '@storybook/react'

import { SingInForm } from '@/features'

const meta = {
  component: SingInForm,
  tags: ['autodocs'],
  title: 'Auth/SingInForm',
} satisfies Meta<typeof SingInForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    onSubmit: data => {
      console.log(data)
    },
  },
}
