import { FC, ReactNode, useState } from 'react'

import { Modal } from '@/components'
import { AddCardForm, useCreateCardMutation } from '@/features'

type AddCardModalProps = {
  id: string
  trigger: ReactNode
}

export const AddCardModal: FC<AddCardModalProps> = ({ id, trigger }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [createCard] = useCreateCardMutation()

  const onSubmitForm = (body: FormData) => {
    createCard({ body, id })
    setOpen(false)
  }

  const onSetOpen = () => setOpen(!open)

  return (
    <Modal open={open} setOpen={onSetOpen} title={'Add new card'} trigger={trigger}>
      <AddCardForm onCloseModal={onSetOpen} onSubmit={onSubmitForm} />
    </Modal>
  )
}
