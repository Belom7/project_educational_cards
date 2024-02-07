import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from '@/app'
import { ProfilePage } from '@/pages/progile-page/ProfilePage'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ProfilePage> = {
  component: ProfilePage,
  tags: ['autodocs'],
  title: 'Pages/ProfilePage',
}

export default meta
type Story = StoryObj<typeof meta>

const ProfilePageWithBrowserRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ProfilePage />
      </BrowserRouter>
    </Provider>
  )
}

export const Default: Story = {
  render: () => <ProfilePageWithBrowserRouter />,
}
