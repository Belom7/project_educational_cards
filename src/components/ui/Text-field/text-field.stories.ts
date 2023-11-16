import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './'

const meta = {
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
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
    label: 'Text-field with type password',
    placeholder: '*****',
    type: 'password',
  },
}

export const WithError: Story = {
  args: {
    errorMessage: 'Error message',
    label: 'Text-field error',
    value: 'No valid text',
  },
}
