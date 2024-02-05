import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from '@/components'

const meta = {
  component: TextField,
  tags: ['autodocs'],
  title: 'components/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultTextField: Story = {
  args: {
    label: 'Default text-field',
    placeholder: 'write something',
  },
}

export const WithPassword: Story = {
  args: {
    label: 'text-field with type password',
    placeholder: '*****',
    type: 'password',
  },
}

export const WithErrors: Story = {
  args: {
    errorMessage: 'Error message',
    label: 'text-field error',
    value: 'No valid text',
  },
}
