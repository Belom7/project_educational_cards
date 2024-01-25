import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { ButtonOption, TypographyOption } from '@/common'
import { Button, Typography } from '@/components'
import { ImageIcon } from '@/components/assets'
import { ControlledCheckbox, ControlledTextField } from '@/components/controlled'
import { Uploader } from '@/components/ui/uploader/Uploader'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './PackForm.module.scss'

const packSchema = z
  .object({
    isPrivate: z.boolean().optional(),
    namePack: z.string().min(3, 'Too short name'),
  })
  .partial() // делает поля не обязательными

type FormValues = z.infer<typeof packSchema>
type Props = {
  onSubmit: (data: FormData) => void
}
export const PackForm = ({ onSubmit }: Props) => {
  const {
    control,
    formState: {},
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      isPrivate: false,
      namePack: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(packSchema),
  })
  const [cover, setCover] = useState<File | null>(null)
  const imageUrl = cover ? URL.createObjectURL(cover) : null

  const onLoadCover = (data: File) => {
    setCover(data)
  }
  const onSubmitHandler = (data: FormValues) => {
    const formData = new FormData()

    formData.append('name', data.namePack ? data.namePack : '')
    formData.append('isPrivate', `${data.isPrivate}`)
    cover && formData.append('cover', cover)

    onSubmit(formData)
  }

  const onLoadCoverError = () => {
    // setCoverError(error)
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmitHandler)}>
      {imageUrl && (
        <div className={s.imageBlock}>
          <img alt={'Pack cover'} src={imageUrl} />
        </div>
      )}
      <Uploader className={s.uploader} onLoadCover={onLoadCover} onLoadError={onLoadCoverError}>
        <div className={s.uploaderContent}>
          <ImageIcon />
          <Typography as={'span'} variant={TypographyOption.Subtitle2}>
            Upload Image
          </Typography>
        </div>
      </Uploader>
      <ControlledTextField
        className={s.input}
        control={control}
        label={'Pack name'}
        name={'namePack'}
      />
      <ControlledCheckbox
        className={s.checkbox}
        control={control}
        label={'is Private'}
        name={'isPrivate'}
      />
      <div className={s.buttonsContainer}>
        <Button className={s.forgotPass} variant={ButtonOption.Secondary}>
          <Typography variant={TypographyOption.Subtitle2}>Cancel</Typography>
        </Button>
        <Button className={s.formButton} type={'submit'}>
          <Typography variant={TypographyOption.Subtitle2}>Add New Pack</Typography>
        </Button>
      </div>
    </form>
  )
}
