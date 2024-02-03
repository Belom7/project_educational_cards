import { useState } from 'react'

import { TypographyOption } from '@/common'
import { Card, Typography } from '@/components'
import { EditTablePencil } from '@/components/assets'
import { BaseResponseType } from '@/features'
import {EditProfileInfo, EditProfileValues, ProfileInfo} from '@/features/profile/ui'

import s from './editProfile.module.scss'

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
        {avatar ? (
          <div>
            <img alt={'avatar'} className={s.avatar} src={avatar} />
            <div className={s.iconEditWrapper}>
              <EditTablePencil />
            </div>
          </div>
        ) : (
          <div>
            <div className={s.avatar}>{name.substring(0, 1)}</div>
            <div className={s.iconEditWrapper}>
              <EditTablePencil />
            </div>
          </div>
        )}
      </div>
      {editMode ? (
        <EditProfileInfo initialValues={{ name }} onSubmit={onSubmit} />
      ) : (
        <ProfileInfo email={email} name={name} onEditProfile={onEditProfile} />
      )}
    </Card>
  )
}
