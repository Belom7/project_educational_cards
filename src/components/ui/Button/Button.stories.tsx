import type { Meta, StoryObj } from '@storybook/react'

import { ButtonOption } from '@/common/enums'
import { EditPencil, LogOut } from '@/components/assets'

import { Button } from './Button'

const meta = {
  argTypes: {
    title: {},
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary', 'link'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Button Primary',
    disabled: false,
    variant: ButtonOption.Primary,
  },
}

export const PrimaryIcon: Story = {
  args: {
    children: (
      <>
        <LogOut /> Button Primary Icon
      </>
    ),
    disabled: false,
    variant: ButtonOption.Primary,
  },
}

export const Secondary: Story = {
  args: {
    children: 'Button Secondary ',
    disabled: false,
    variant: ButtonOption.Secondary,
  },
}

export const SecondaryIcon: Story = {
  args: {
    children: (
      <>
        <LogOut /> Button Secondary Icon
      </>
    ),
    disabled: false,
    variant: ButtonOption.Secondary,
  },
}
export const Tertiary: Story = {
  args: {
    children: 'Tertiary',
    disabled: false,
    variant: ButtonOption.Tertiary,
  },
}
export const Link: Story = {
  args: {
    children: 'Link-button',
    disabled: false,
    variant: ButtonOption.Link,
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    disabled: false,
    fullWidth: true,
    variant: ButtonOption.Primary,
  },
}

export const AsLink: Story = {
  args: {
    as: 'a',
    children: 'Link that looks like a Button',
    variant: ButtonOption.Link,
  },
}
export const WithIcon: Story = {
  args: {
    children: <EditPencil />,
    variant: ButtonOption.Icon,
  },
}
