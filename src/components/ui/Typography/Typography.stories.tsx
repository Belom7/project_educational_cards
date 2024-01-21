import type { Meta, StoryObj } from '@storybook/react'

import { TypographyOption } from '@/common'
import { Typography } from '@/components'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: Object.values(TypographyOption),
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

const child = 'Component'

export const Body1: Story = {
  args: {
    children: child,
    variant: TypographyOption.Body1,
  },
}
export const Body2: Story = {
  args: {
    children: child,
    variant: TypographyOption.Body2,
  },
}
export const Caption: Story = {
  args: {
    children: child,
    variant: TypographyOption.Caption,
  },
}
export const Error: Story = {
  args: {
    children: child,
    variant: TypographyOption.Error,
  },
}
export const H1: Story = {
  args: {
    children: child,
    variant: TypographyOption.H1,
  },
}
export const H2: Story = {
  args: {
    children: child,
    variant: TypographyOption.H2,
  },
}
export const H3: Story = {
  args: {
    children: child,
    variant: TypographyOption.H3,
  },
}
export const Large: Story = {
  args: {
    children: child,
    variant: TypographyOption.Large,
  },
}
export const Link1: Story = {
  args: {
    children: child,
    variant: TypographyOption.Link1,
  },
}
export const Link2: Story = {
  args: {
    children: child,
    variant: TypographyOption.Link2,
  },
}
export const Overline: Story = {
  args: {
    children: child,
    variant: TypographyOption.Overline,
  },
}
export const Subtitle1: Story = {
  args: {
    children: child,
    variant: TypographyOption.Subtitle1,
  },
}
export const Subtitle2: Story = {
  args: {
    children: child,
    variant: TypographyOption.Subtitle2,
  },
}
