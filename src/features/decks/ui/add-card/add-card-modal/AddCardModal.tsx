import { FC, ReactNode, useState } from 'react'

import { Modal } from '@/components'
import { CardForm, useCreateCardMutation } from '@/features'

type AddCardModalProps = {
  deckId: string
  trigger: ReactNode
}

export const AddCardModal: FC<AddCardModalProps> = ({ deckId, trigger }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [createCard] = useCreateCardMutation()

  const onSubmitForm = (body: FormData) => {
    createCard({ body, deckId })
    setOpen(false)
  }

  const onSetOpen = () => setOpen(!open)

  return (
    <Modal open={open} setOpen={onSetOpen} title={'Add new card'} trigger={trigger}>
      <CardForm onCloseModal={onSetOpen} onSubmit={onSubmitForm} />
    </Modal>
  )
}
