import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from '@/app'
import { LoginPage } from '@/pages'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof LoginPage> = {
  component: LoginPage,
  tags: ['autodocs'],
  title: 'Pages/LoginPage',
}

export default meta
type Story = StoryObj<typeof meta>

const LoginPageWithBrowserRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    </Provider>
  )
}

export const Default: Story = {
  render: () => <LoginPageWithBrowserRouter />,
}
