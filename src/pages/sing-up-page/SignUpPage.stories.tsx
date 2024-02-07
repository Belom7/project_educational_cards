import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from '@/app'
import { SignUpPage } from '@/pages'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SignUpPage> = {
  component: SignUpPage,
  tags: ['autodocs'],
  title: 'Pages/SignUpPage',
}

export default meta
type Story = StoryObj<typeof meta>

const SignUpPageWithBrowserRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <SignUpPage />
      </BrowserRouter>
    </Provider>
  )
}

export const Default: Story = {
  render: () => <SignUpPageWithBrowserRouter />,
}
