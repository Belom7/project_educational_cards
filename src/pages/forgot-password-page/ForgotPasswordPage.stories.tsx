import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from '@/app'
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
    <Provider store={store}>
      <BrowserRouter>
        <ForgotPasswordPage />
      </BrowserRouter>
    </Provider>
  )
}

export const Default: Story = {
  render: () => <ForgotPasswordPageWithBrowserRouter />,
}
