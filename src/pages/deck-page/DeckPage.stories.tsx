import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from '@/app'
import { DeckPage } from '@/pages'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof DeckPage> = {
  component: DeckPage,
  tags: ['autodocs'],
  title: 'Pages/DeckPage',
}

export default meta
type Story = StoryObj<typeof meta>

const DeckPageWithBrowserRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <DeckPage />
      </BrowserRouter>
    </Provider>
  )
}

export const Default: Story = {
  render: () => <DeckPageWithBrowserRouter />,
}
