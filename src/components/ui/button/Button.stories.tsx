import type { Meta, StoryObj } from '@storybook/react'

import { EditPencilIcon, LogOutIcon } from '@/assets'
import { ButtonOption } from '@/common'

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
  title: 'components/button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'button Primary',
    disabled: false,
    variant: ButtonOption.Primary,
  },
}

export const PrimaryIcon: Story = {
  args: {
    children: (
      <>
        <LogOutIcon /> Button Primary Icon
      </>
    ),
    disabled: false,
    variant: ButtonOption.Primary,
  },
}

export const Secondary: Story = {
  args: {
    children: 'button Secondary ',
    disabled: false,
    variant: ButtonOption.Secondary,
  },
}

export const SecondaryIcon: Story = {
  args: {
    children: (
      <>
        <LogOutIcon /> Button Secondary Icon
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
    children: 'Full Width button',
    disabled: false,
    fullWidth: true,
    variant: ButtonOption.Primary,
  },
}

export const AsLink: Story = {
  args: {
    as: 'a',
    children: 'Link that looks like a button',
    variant: ButtonOption.Link,
  },
}
export const WithIcon: Story = {
  args: {
    children: <EditPencilIcon />,
    variant: ButtonOption.Icon,
  },
}
