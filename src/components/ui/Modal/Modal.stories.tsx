import { useState } from 'react'

import { TypographyOption } from '@/common/enums'
import { ModalProps, Typography } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

const ModalTextControlled = (props: ModalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(props.isOpen)

  return (
    <Modal isOpen={isOpen} onOpen={setIsOpen} title={props.title}>
      {props.children}
    </Modal>
  )
}

export const TextModal: Story = {
  args: {
    children: (
      <Typography variant={TypographyOption.Body1}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniamdsa. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Aspernatur consectetur, dolorem et fugiat molestiae
        reprehenderit tenetur. A ab, alias amet atque beatae cum dicta eligendi fuga hic libero
        mollitia omnis quia repudiandae tempore totam unde velit.
      </Typography>
    ),
    isOpen: false,
    title: 'Title',
  },
  render: props => <ModalTextControlled {...props} />,
}
