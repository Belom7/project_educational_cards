import { JSX, ReactNode, useState } from 'react'

import { Modal } from '@/components'
import { PackFormIcon, useCreatePackMutation } from '@/features'

export type AddPackModalProps = {
  trigger: ReactNode
}

export const AddPackModal = ({ trigger }: AddPackModalProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const [createPack, { error }] = useCreatePackMutation()

  console.log(error)
  const closeModal = () => {
    setIsOpen(false)
  }
  const createPackCallback = (data: any) => {
    createPack(data)
    closeModal()
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={'Add New Deck'} trigger={trigger}>
      <PackFormIcon buttonTitle={'Add New Pack'} onSubmit={createPackCallback} />
    </Modal>
  )
}
