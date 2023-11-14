import { useState } from 'react'

import { Checkbox } from '@/components/ui/Check-box/CheckBox'
import { Meta } from '@storybook/react'

export default {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'components/Checkbox',
} satisfies Meta<typeof Checkbox>

export const Uncontrolled = {
  args: {
    disabled: false,
    label: 'Click here',
  },
}
export const DefaultControlled = {
  args: {
    disabled: true,
  },
  render: (args: any) => {
    const [checked, setChecked] = useState(false)

    return (
      <Checkbox
        label={'hellow'}
        {...args}
        checked={checked}
        disabled={false}
        onValueChange={setChecked}
      />
    )
  },
}
export const Default = {
  args: {
    disabled: true,
    label: 'Check-box',
  },
  render: (args: any) => {
    const [checked, setChecked] = useState(false)

    return <Checkbox {...args} checked={checked} disabled={false} onValueChange={setChecked} />
  },
}
export const DefaultTrue = {
  args: {
    disabled: true,
    label: 'Check-box',
  },
  render: (args: any) => {
    const [setChecked] = useState(false)

    return <Checkbox {...args} checked disabled={false} onValueChange={setChecked} />
  },
}
export const DefaultFalse = {
  args: {
    disabled: true,
    label: 'Check-box',
  },
  render: (args: any) => {
    const [setChecked] = useState(false)

    return <Checkbox {...args} checked={false} disabled={false} onValueChange={setChecked} />
  },
}
export const DefaultFalseDizabledTrue = {
  args: {
    disabled: true,
    label: 'Check-box',
  },
  render: (args: any) => {
    const [setChecked] = useState(false)

    return <Checkbox {...args} checked disabled onValueChange={setChecked} />
  },
}

export const DefaultFalseDizabledFalse = {
  args: {
    disabled: true,
    label: 'Check-box',
  },
  render: (args: any) => {
    const [setChecked] = useState(false)

    return <Checkbox {...args} checked={false} disabled onValueChange={setChecked} />
  },
}
