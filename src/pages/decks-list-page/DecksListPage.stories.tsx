import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from '@/app'
import { DecksListPage } from '@/pages'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof DecksListPage> = {
  component: DecksListPage,
  tags: ['autodocs'],
  title: 'Pages/PackListsPage',
}

export default meta
type Story = StoryObj<typeof meta>

const DecksListPageWithBrowserRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <DecksListPage />
      </BrowserRouter>
    </Provider>
  )
}

export const Default: Story = {
  render: () => <DecksListPageWithBrowserRouter />,
}
