import { useState } from 'react'

import { TypographyOption } from '@/common'
import { Card, Typography } from '@/components'
import {
  AvatarUploader,
  BaseResponseType,
  EditProfileInfo,
  EditProfileValues,
  ProfileInfo,
} from '@/features'

import s from './EditProfile.module.scss'

type editProfileProps = {
  data: BaseResponseType
  update: (data: EditProfileValues) => void
}
export const EditProfile = ({ data, update }: editProfileProps) => {
  const { avatar, email, name } = data
  const [editMode, setEditMode] = useState(false)
  const onEditProfile = () => {
    setEditMode(true)
  }

  const onSubmit = (data: EditProfileValues) => {
    update(data)
    setEditMode(false)
  }

  return (
    <Card className={s.cardProfileContainer}>
      <Typography variant={TypographyOption.H1}>Personal Information</Typography>
      <div>
        <AvatarUploader avatar={avatar} name={name} />
      </div>
      {editMode ? (
        <EditProfileInfo initialValues={{ name }} onSubmit={onSubmit} />
      ) : (
        <ProfileInfo email={email} name={name} onEditProfile={onEditProfile} />
      )}
    </Card>
  )
}
