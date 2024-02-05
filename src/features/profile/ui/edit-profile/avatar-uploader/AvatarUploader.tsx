import { JSX } from 'react'

import { EditTablePencilIcon } from '@/assets'
import { Button, Uploader } from '@/components'
import { useUpdateProfileMutation } from '@/features'
import cn from 'clsx'

import s from './AvatarUploader.module.scss'

type Props = {
  avatar?: string
  className?: string

  name: string
}

export const AvatarUploader = ({
  avatar,
  className,

  name,
}: Props): JSX.Element => {
  const [updateProfile] = useUpdateProfileMutation()

  const avatarUploaderClasses = cn(s.root, className)

  const onLoadCover = async (data: File) => {
    const formData = new FormData()

    await formData.append('avatar', data)

    updateProfile(formData)
  }

  return (
    <div className={avatarUploaderClasses}>
      {avatar ? (
        <>
          <img alt={'avatar'} className={s.avatar} src={avatar} />
          <Uploader className={s.uploader} onLoadCover={onLoadCover} onLoadError={() => {}}>
            <Button className={s.buttonEditProfile}>
              <EditTablePencilIcon />
            </Button>
          </Uploader>
        </>
      ) : (
        <>
          <div className={s.avatar}>{name.substring(0, 1)}</div>
          <Uploader className={s.uploader} onLoadCover={onLoadCover} onLoadError={() => {}}>
            <Button className={s.buttonEditProfile}>
              <EditTablePencilIcon />
            </Button>
          </Uploader>
        </>
      )}
    </div>
  )
}
