import React from 'react'

import { CheckEmailIcon } from '@/assets'
import { TypographyOption } from '@/common'
import { Button, Card, Typography } from '@/components'

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
