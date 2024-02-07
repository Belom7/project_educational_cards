import { BrowserRouter } from 'react-router-dom'

import { ForgotPasswordPage } from '@/pages'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ForgotPasswordPage> = {
  component: ForgotPasswordPage,
  tags: ['autodocs'],
  title: 'Pages/ForgotPasswordPage',
}

export default meta
type Story = StoryObj<typeof meta>

const ForgotPasswordPageWithBrowserRouter = () => {
  return (
    <BrowserRouter>
      <ForgotPasswordPage />
    </BrowserRouter>
  )
}

export const Default: Story = {
  render: () => <ForgotPasswordPageWithBrowserRouter />,
}
