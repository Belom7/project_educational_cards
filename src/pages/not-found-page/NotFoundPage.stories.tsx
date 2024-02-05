import { BrowserRouter } from 'react-router-dom'

import { NotFoundPage } from '@/pages'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof NotFoundPage> = {
  component: NotFoundPage,
  tags: ['autodocs'],
  title: 'Pages/NotFoundPage',
}

export default meta
type Story = StoryObj<typeof meta>

const NotFoundPageWithBrowserRouter = () => {
  return (
    <BrowserRouter>
      <NotFoundPage />
    </BrowserRouter>
  )
}

export const Default: Story = {
  render: () => <NotFoundPageWithBrowserRouter />,
}
