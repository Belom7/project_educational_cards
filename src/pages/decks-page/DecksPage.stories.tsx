import { BrowserRouter } from 'react-router-dom'

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
    <BrowserRouter>
      <DecksPage />
    </BrowserRouter>
  )
}

export const Default: Story = {
  render: () => <DecksPageWithBrowserRouter />,
}
