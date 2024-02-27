import { JSX, ReactNode, useState } from 'react'

import { Modal } from '@/components'
import { Card, CardForm, useUpdateCardMutation } from '@/features'

type Props = {
  card: Card
  trigger: ReactNode
}

export const EditCardModal = ({ card, trigger }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const [updateCard] = useUpdateCardMutation()
  const { answer, answerImg, deckId, id, question, questionImg } = card
  const cardValues = { answer, answerImg, question, questionImg }

  const onSubmit = (body: FormData) => {
    updateCard({ body, cardId: id, deckId })
    setIsOpen(false)
  }

  const onSetOpen = () => setIsOpen(!isOpen)

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={'Edit Card'} trigger={trigger}>
      <CardForm
        buttonTitle={'Save Changes'}
        cardValues={cardValues}
        onCloseModal={onSetOpen}
        onSubmit={onSubmit}
      />
    </Modal>
  )
}
