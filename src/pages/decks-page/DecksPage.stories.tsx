import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from '@/app'
import { DecksPage } from '@/pages'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof DecksPage> = {
  component: DecksPage,
  tags: ['autodocs'],
  title: 'Pages/DecksPage',
}

export default meta
type Story = StoryObj<typeof meta>

const DecksPageWithBrowserRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <DecksPage />
      </BrowserRouter>
    </Provider>
  )
}

export const Default: Story = {
  render: () => <DecksPageWithBrowserRouter />,
}
