import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from '@/components'

const meta = {
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const NoAuthorized: Story = {
  args: {
    items: [
      {
        title: 'RadioGroup1',
        value: '1',
      },
    ],
  },
}
function arrange(arr){
  const toNum = (num) => {
    if (num.indexOf("KG") !== -1) {
      return Number(`${num.substring(0, num.length - 2)}000`);
    } else if (num.indexOf("G") !== -1) {
      return Number(`${num.substring(0, num.length - 1)}`);
    } else {
      return Number(`${num.substring(0, num.length - 1)}000000`);
    }
  };
  return  arr.sort((a, b) => {
    return toNum(a) - toNum(b);
  });
}