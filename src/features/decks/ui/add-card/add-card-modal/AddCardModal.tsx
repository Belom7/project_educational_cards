import { FC, ReactNode, useState } from 'react'

import { Modal } from '@/components'
import { AddCardForm } from '@/features'

type AddCardModalProps = {
  trigger: ReactNode
}

export const AddCardModal: FC<AddCardModalProps> = ({ trigger }) => {
  const [open, setOpen] = useState<boolean>(false)

  const onSubmitForm = () => {
    console.log('111')
  }

  const onSetOpen = () => setOpen(!open)

  return (
    <Modal open={open} setOpen={onSetOpen} title={'Add new card'} trigger={trigger}>
      <AddCardForm onCloseModal={onSetOpen} onSubmit={onSubmitForm} />
    </Modal>
  )
}
