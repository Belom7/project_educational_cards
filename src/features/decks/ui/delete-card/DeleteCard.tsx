import { FC, ReactNode, useState } from 'react'

import { ButtonOption, TypographyOption } from '@/common'
import { Button, Modal, Typography } from '@/components'

import s from './DeleteCard.module.scss'

type DeleteCardProps = {
  trigger: ReactNode
}

export const DeleteCard: FC<DeleteCardProps> = ({ trigger }) => {
  const [open, setOpen] = useState<boolean>(false)

  const onDeleteCard = () => {
    console.log('111')
  }

  const onSetOpen = () => setOpen(!open)

  return (
    <Modal open={open} setOpen={onSetOpen} title={'Delete card'} trigger={trigger}>
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
