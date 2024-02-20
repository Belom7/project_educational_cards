import { ElementRef, JSX, forwardRef } from 'react'
import { useNavigate } from 'react-router-dom'

import { LeftArrowIcon } from '@/assets'
import { ButtonOption, Routes, TypographyOption } from '@/common'
import { Button, Typography } from '@/components'
import clsx from 'clsx'

import s from './BackToDecksLink.module.scss'

type Props = {
  className?: string
  title: string
  to?: Routes
  type?: 'link' | 'primary'
}

export const BackToDecksLink = forwardRef<ElementRef<typeof Button>, Props>(
  ({ className, title, to, type = 'link' }, ref): JSX.Element => {
    const navigate = useNavigate()

    const onGoBack = () => {
      to ? navigate(to) : navigate(-1)
    }

    const goBackClassName = clsx(s.root, className)

    return type === 'link' ? (
      <Button className={goBackClassName} onClick={onGoBack} ref={ref} variant={ButtonOption.Link}>
        <LeftArrowIcon className={s.arrow} />
        <Typography className={s.textBackColor} variant={TypographyOption.Body2}>
          {title}
        </Typography>
      </Button>
    ) : (
      <Button onClick={onGoBack} ref={ref} variant={ButtonOption.Primary}>
        <LeftArrowIcon className={s.arrow} />
        <Typography className={s.textBackColor} variant={TypographyOption.Body2}>
          {title}
        </Typography>
      </Button>
    )
  }
)
