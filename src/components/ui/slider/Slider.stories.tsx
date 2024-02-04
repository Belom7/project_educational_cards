import { useState } from 'react'

import { Slider, SliderProps } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Slider> = {
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

const SliderControlled = (props: SliderProps) => {
  const [value, setValue] = useState(props.value)

  const handleOnValueChange = (value: number[]) => {
    setValue(value)
  }

  return <Slider {...props} onValueChange={handleOnValueChange} value={value} />
}

export const Default: Story = {
  args: {
    max: 10,
    min: 0,
    step: 1,
    value: [0, 10],
  },
  render: props => <SliderControlled {...props} />,
}
