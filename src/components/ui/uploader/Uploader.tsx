import { ChangeEvent, ComponentPropsWithoutRef, JSX, ReactNode, useRef } from 'react'

import { TypographyOption } from '@/common'
import { Typography } from '@/components'
import cn from 'clsx'
import { ZodError, z } from 'zod'

import s from './Uploader.module.scss'

export const uploaderSchema = z
  .instanceof(File)
  .refine(file => file.size <= 1000000, `Max image size is 1MB.`)
  .refine(
    file => ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(file.type),
    'Only .jpg, .jpeg, .png and .webp formats are supported.'
  )

export type UploaderPayload = z.infer<typeof uploaderSchema>

type Props = {
  children: ReactNode
  onLoadCover: (file: UploaderPayload) => void
  onLoadError: (error: string) => void
} & ComponentPropsWithoutRef<'input'>

export const Uploader = ({
  children,
  className,
  onLoadCover,
  onLoadError,
  ...restProps
}: Props): JSX.Element => {
  const ref = useRef<HTMLInputElement>(null)
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    try {
      uploaderSchema.parse(file)
      if (file) {
        onLoadCover(file)
      }
    } catch (e) {
      const err = e as Error | ZodError

      if (err instanceof ZodError) {
        onLoadError('Zod error: ' + err.errors[0].message)
      } else {
        onLoadError('Native error: ' + err.message)
      }
    }
  }
  const uploaderClassName = cn(s.uploader, className)

  return (
    <Typography
      as={'label'}
      className={uploaderClassName}
      onClick={() => ref.current?.click()}
      variant={TypographyOption.Subtitle2}
    >
      {children}
      <input
        className={s.fileInput}
        onChange={onChangeHandler}
        ref={ref}
        type={'file'}
        {...restProps}
      />
    </Typography>
  )
}
