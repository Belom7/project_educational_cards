import { JSX, ReactNode, useState } from 'react'

import { Modal } from '@/components'
import { PackFormIcon, useCreatePackMutation } from '@/features'

export type AddPackModalProps = {
  trigger: ReactNode
}

export const AddPackModal = ({ trigger }: AddPackModalProps): JSX.Element => {
  const [open, setOpen] = useState(false)
  const [createPack, { error }] = useCreatePackMutation()

  console.log(error)
  const closeModal = () => {
    setOpen(false)
  }
  const createPackCallback = (data: any) => {
    createPack(data)
    closeModal()
  }

  return (
    <Modal open={open} setOpen={setOpen} title={'Add New Deck'} trigger={trigger}>
      <PackFormIcon buttonTitle={'Add New Pack'} onSubmit={createPackCallback} />
    </Modal>
  )
}
