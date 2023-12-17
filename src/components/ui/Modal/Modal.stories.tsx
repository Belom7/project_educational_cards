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

const ModalControlled = (props: ModalProps) => {
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
  render: props => <ModalControlled {...props} />,
}

export const TextWithScrollbarModal: Story = {
  args: {
    children: (
      <Typography variant={TypographyOption.Body1}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniamdsa. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Aspernatur consectetur, dolorem et fugiat molestiae
        reprehenderit tenetur. A ab, alias amet atque beatae cum dicta eligendi fuga hic libero
        mollitia omnis quia repudiandae tempore totam unde velit. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Dignissimos doloremque doloribus iure neque nihil nostrum
        numquam quia sint tenetur! Autem dolores ex fugiat ipsa laborum odit optio, porro quia rem
        rerum saepe similique tenetur vitae. Ab amet blanditiis commodi consequatur delectus
        dignissimos ducimus esse est expedita explicabo facilis fugiat illo, ipsa iure iusto libero
        magnam modi molestias nihil nisi non odio officiis pariatur provident quasi reiciendis
        repellendus repudiandae saepe sed tempore tenetur vel vitae, voluptates! Commodi delectus
        dignissimos eligendi molestiae nemo nisi perferendis, quaerat reprehenderit suscipit
        tenetur. Atque deserunt dolorum earum, fugiat harum impedit iure nemo totam ut. Adipisci
        animi aperiam at beatae blanditiis consectetur consequatur corporis distinctio dolorem
        doloribus dolorum eaque eligendi eum, hic impedit in incidunt ipsam iste itaque libero
        maiores modi nisi odio officiis perferendis quae quam qui quia quo rem sequi, similique
        soluta temporibus totam vel veritatis voluptatem? Dolore doloremque illo in quae
        reprehenderit sed. At commodi corporis, debitis delectus dicta eligendi, nisi numquam
        officiis porro provident, reiciendis voluptatem!
      </Typography>
    ),
    isOpen: false,
    title: 'Title',
  },
  render: props => <ModalControlled {...props} />,
}
