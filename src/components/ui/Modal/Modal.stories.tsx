import { Meta, StoryObj } from '@storybook/react'

import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    trigger: <button>{'Click'}</button>,
  },
}
