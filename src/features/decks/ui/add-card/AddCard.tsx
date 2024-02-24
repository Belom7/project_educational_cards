import { FC } from 'react'

import { TypographyOption } from '@/common'
import { Button, Typography } from '@/components'
import { AddCardModal } from '@/features/decks/ui/add-card/add-card-modal'

type AddCardProps = {
  id: string
}

export const AddCard: FC<AddCardProps> = ({ id }) => {
  return (
    <AddCardModal
      id={id}
      trigger={
        <Button>
          <Typography variant={TypographyOption.Subtitle2}>Add New Card</Typography>
        </Button>
      }
    />
  )
}
