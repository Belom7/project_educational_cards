import { JSX } from 'react'

import { Routes } from '@/common'
import { GoBack, Page } from '@/components'
import { BaseResponseType, EditProfile, useMeQuery, useUpdateProfileMutation } from '@/features'
import { EditProfileValues } from '@/features/profile/ui/edit-profile/useEditProfile'

import s from './ProfilePage.module.scss'

// EditProfileValues,
// PersonalInformation,
// ProfileDataType,
// useMeQuery,
// useUpdateProfileMutation,

export const ProfilePage = (): JSX.Element => {
  const { data } = useMeQuery()
  const [updateProfile] = useUpdateProfileMutation()

  const onUpdate = (data: EditProfileValues) => {
    const form = new FormData()

    Object.keys(data).forEach(key => {
      form.append(key, data[key as keyof EditProfileValues])
    })
    updateProfile(form)
  }

  return (
    <Page className={s.pageProfileContainer}>
      <GoBack className={s.buttonBackPosition} title={'Back to Decks List'} to={Routes.Main} />

      <EditProfile data={data as BaseResponseType} update={onUpdate} />
    </Page>
  )
}
