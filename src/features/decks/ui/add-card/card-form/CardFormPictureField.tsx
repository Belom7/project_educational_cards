import { FC } from 'react'

import { ImageIcon } from '@/assets'
import { ButtonOption, TypographyOption } from '@/common'
import { Button, Typography, Uploader } from '@/components'

import s from './CardForm.module.scss'

type CardFormPictureFieldProps = {
  imageUrl: null | string | undefined
  onLoadCover: (data: File) => void
  onLoadError: (error: string) => void
  title: string
}

export const CardFormPictureField: FC<CardFormPictureFieldProps> = ({
  imageUrl,
  onLoadCover,
  onLoadError,
  title,
}) => {
  const buttonUploadText = imageUrl ? 'Change Cover' : ' Add Cover'

  return (
    <>
      <div className={s.row}>
        <Typography variant={TypographyOption.Subtitle2}>{title}</Typography>
        {imageUrl && (
          <div className={s.imageBlock}>
            <img alt={'Card cover'} className={s.image} src={imageUrl} />
          </div>
        )}
      </div>
      <div className={s.row}>
        <Uploader onLoadCover={onLoadCover} onLoadError={onLoadError}>
          <Button
            className={s.fieldItem}
            fullWidth
            type={'button'}
            variant={ButtonOption.Secondary}
          >
            <ImageIcon />
            <Typography as={'span'} variant={TypographyOption.Subtitle2}>
              {buttonUploadText}
            </Typography>
          </Button>
        </Uploader>
      </div>
    </>
  )
}
