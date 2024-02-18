import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from '@/app'
import { CardsPage } from '@/pages'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof CardsPage> = {
  component: CardsPage,
  tags: ['autodocs'],
  title: 'Pages/CardsPage',
}

export default meta
type Story = StoryObj<typeof meta>

const CardsPageWithBrowserRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CardsPage />
      </BrowserRouter>
    </Provider>
  )
}

export const Default: Story = {
  render: () => <CardsPageWithBrowserRouter />,
}
