import { ButtonOption, TypographyOption } from '@/common'
import { Button, Typography } from '@/components'

import s from './DeletePack.module.scss'

type DeletePackProps = {
  buttonTitle: string
  closeModal: () => void
  deletePackCallback: () => void
  packName: string
}
export const DeletePack = ({
  buttonTitle,
  closeModal,
  deletePackCallback,
  packName,
}: DeletePackProps) => {
  return (
    <div className={s.root}>
      <Typography variant={TypographyOption.Subtitle2}>
        Do you really want to remove {packName} ?
      </Typography>
      <Typography variant={TypographyOption.Subtitle2}>All cards will be deleted.</Typography>
      <div className={s.buttonsContainer}>
        <Button className={s.forgotPass} onClick={closeModal} variant={ButtonOption.Secondary}>
          <Typography variant={TypographyOption.Subtitle2}>Cancel</Typography>
        </Button>
        <Button className={s.formButton} onClick={deletePackCallback} type={'submit'}>
          <Typography variant={TypographyOption.Subtitle2}>{buttonTitle}</Typography>
        </Button>
      </div>
    </div>
  )
}
