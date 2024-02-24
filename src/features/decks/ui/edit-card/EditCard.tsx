import { FC } from 'react'

import { EditTablePencilIcon } from '@/assets'
import { ButtonOption } from '@/common'
import { Button } from '@/components'
import { Card, EditCardModal } from '@/features'

import s from '@/features/decks/ui/cards-table/CardsTable.module.scss'

type EditCardProps = {
  card: Card
}

export const EditCard: FC<EditCardProps> = ({ card }) => {
  return (
    <EditCardModal
      card={card}
      trigger={
        <Button className={s.icon} variant={ButtonOption.Icon}>
          <EditTablePencilIcon />
        </Button>
      }
    />
  )
}
