import { TypographyOption } from '@/common/enums'
import { CheckEmailIcon } from '@/components/assets'
import { Button } from '../../ui/button'
import { Card } from '../../ui/cards'
import { Typography } from '../../ui/typography'

import s from './CheckEmailForm.module.scss'
type CheckEmailFormProps = {
  email: string
}

export const CheckEmailForm: React.FC<CheckEmailFormProps> = ({ email }) => {
  return (
    <Card className={s.singInCard}>
      <Typography variant={TypographyOption.H1}>Check Email</Typography>
      <CheckEmailIcon />
      <div className={s.formWrapper}>
        <Typography className={s.formTextInformation} variant={TypographyOption.Body2}>
          {`We’ve sent an Email with instructions to`}
        </Typography>
        <Typography className={s.formTextInformation} variant={TypographyOption.Body2}>
          {email}
        </Typography>
      </div>
      <Button className={s.formButton}>
        <Typography variant={TypographyOption.Subtitle2}>Back to Sign In</Typography>
      </Button>
    </Card>
  )
}
