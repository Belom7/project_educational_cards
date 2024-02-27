import { FC, ReactNode, useState } from 'react'

import { ButtonOption, TypographyOption } from '@/common'
import { Button, Modal, Typography } from '@/components'
import { useDeleteCardMutation } from '@/features'

import s from './DeleteCard.module.scss'

type DeleteCardProps = {
  cardId: string
  trigger: ReactNode
}

export const DeleteCard: FC<DeleteCardProps> = ({ cardId, trigger }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const [deleteCard] = useDeleteCardMutation()

  const onDeleteCard = () => {
    deleteCard(cardId)
    setIsOpen(!isOpen)
  }

  const onSetOpen = () => setIsOpen(!isOpen)

  return (
    <Modal isOpen={isOpen} setIsOpen={onSetOpen} title={'Delete card'} trigger={trigger}>
      <div className={s.root}>
        <div className={s.text}>
          <Typography variant={TypographyOption.Body1}>
            Do you really want to remove this card?
          </Typography>
        </div>
        <div className={s.buttons}>
          <Button onClick={onSetOpen} variant={ButtonOption.Secondary}>
            Cancel
          </Button>
          <Button onClick={onDeleteCard}>Delete card</Button>
        </div>
      </div>
    </Modal>
  )
}
