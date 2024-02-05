import React from 'react'

import { EditPencilIcon, LogOutIcon } from '@/assets'
import { ButtonOption, TypographyOption } from '@/common'
import { Button, Card, Typography } from '@/components'

import s from './EditProfile.module.scss'

type EditProfileFormProps = {
  avatar: any
  profileName: string
}
export const EditProfile: React.FC<EditProfileFormProps> = ({ avatar, profileName = 'Ivan' }) => {
  return (
    <Card className={s.EditProfileCard}>
      <Typography variant={TypographyOption.H1}>Personal Information</Typography>
      <div>
        <img alt={''} className={s.avatar} src={avatar ? avatar : ''} />
        <Button className={s.EditFormPencil} variant={ButtonOption.Icon}>
          <EditPencilIcon />
        </Button>
      </div>
      <div className={s.EditFormNickNameWrapper}>
        <Typography variant={TypographyOption.H1}>{profileName}</Typography>
        <Button variant={ButtonOption.Icon}>
          <EditPencilIcon />
        </Button>
      </div>
      <Button variant={ButtonOption.Secondary}>
        <LogOutIcon />
        <Typography variant={TypographyOption.Subtitle2}>Logout</Typography>
      </Button>
    </Card>
  )
}
