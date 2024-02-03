import type { Meta, StoryObj } from '@storybook/react'

import { TypographyOption } from '@/common'
import { Button, Modal, Typography } from '@/components'

const meta = {
  component: Modal,
  tags: ['autoocs'],
  title: 'Components/modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    open: true,
    title: 'AddSomething',
    trigger: (
      <Button>
        <Typography as={'span'} variant={TypographyOption.Subtitle2}>
          Add new Deck
        </Typography>
      </Button>
    ),
  },
}
