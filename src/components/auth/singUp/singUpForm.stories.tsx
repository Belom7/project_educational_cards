import type { Meta, StoryObj } from '@storybook/react'
import {SingUpForm} from "@/components/auth/singUp/singUpForm";


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
