import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        'Large',
        'H1',
        'H2',
        'H3',
        'Body1',
        'Subtitle1',
        'Body2',
        'Subtitle2',
        'Caption',
        'Overline',
        'Link1',
        'Link2',
      ],
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'comp/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

const child = 'Componenta'

export const Body1: Story = {
  args: {
    children: child,
    variant: 'Body1',
  },
}
export const Body2: Story = {
  args: {
    children: child,
    variant: 'Body2',
  },
}
export const Caption: Story = {
  args: {
    children: child,
    variant: 'Caption',
  },
}
export const H1: Story = {
  args: {
    children: child,
    variant: 'H1',
  },
}
export const H2: Story = {
  args: {
    children: child,
    variant: 'H2',
  },
}
export const H3: Story = {
  args: {
    children: child,
    variant: 'H3',
  },
}
export const Large: Story = {
  args: {
    children: child,
    variant: 'Large',
  },
}
export const Link1: Story = {
  args: {
    children: child,
    variant: 'Link1',
  },
}
export const Link2: Story = {
  args: {
    children: child,
    variant: 'Link2',
  },
}
export const Overline: Story = {
  args: {
    children: child,
    variant: 'Overline',
  },
}
export const Subtitle1: Story = {
  args: {
    children: child,
    variant: 'Subtitle1',
  },
}
export const Subtitle2: Story = {
  args: {
    children: child,
    variant: 'Subtitle2',
  },
}
