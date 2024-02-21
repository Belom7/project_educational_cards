import { TypographyOption } from '@/common'
import { Button, Typography } from '@/components'
import { AddCardModal } from '@/features/decks/ui/add-card/add-card-modal'

export const AddCard = () => {
  return (
    <AddCardModal
      trigger={
        <Button>
          <Typography variant={TypographyOption.Subtitle2}>Add New Card</Typography>
        </Button>
      }
    />
  )
}
