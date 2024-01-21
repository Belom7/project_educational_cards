import { NotFoundPage } from '@/common'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof NotFoundPage> = {
  component: NotFoundPage,
  tags: ['autodocs'],
  title: 'Pages/NotFoundPage',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
