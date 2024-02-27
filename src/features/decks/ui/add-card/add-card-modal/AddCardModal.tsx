import { FC, ReactNode, useState } from 'react'

import { Modal } from '@/components'
import { CardForm, useCreateCardMutation } from '@/features'

type AddCardModalProps = {
  deckId: string
  trigger: ReactNode
}

export const AddCardModal: FC<AddCardModalProps> = ({ deckId, trigger }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [createCard] = useCreateCardMutation()

  const onSubmitForm = (body: FormData) => {
    createCard({ body, deckId })
    setIsOpen(false)
  }

  const onSetOpen = () => setIsOpen(!isOpen)

  return (
    <Modal isOpen={isOpen} setIsOpen={onSetOpen} title={'Add new card'} trigger={trigger}>
      <CardForm onCloseModal={onSetOpen} onSubmit={onSubmitForm} />
    </Modal>
  )
}
