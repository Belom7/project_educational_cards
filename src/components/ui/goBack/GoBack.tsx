import { ElementRef, forwardRef } from 'react'
import { useNavigate } from 'react-router-dom'

import { ButtonOption, Routes, TypographyOption } from '@/common'
import { Button, Typography } from '@/components'
import { LeftArrow } from '@/components/assets'
import clx from 'clsx'

import s from './GoBack.module.scss'

type Props = {
  className?: string
  title: string
  to?: Routes
}

export const GoBack = forwardRef<ElementRef<typeof Button>, Props>(
  ({ className, title, to }, ref): JSX.Element => {
    const navigate = useNavigate()

    const onBack = () => {
      to ? navigate(to) : navigate(-1)
    }

    const goBackClassName = clx(s.root, className)

    return (
      <Button className={goBackClassName} onClick={onBack} ref={ref} variant={ButtonOption.Link}>
        <LeftArrow className={s.arrow} />
        <Typography variant={TypographyOption.Body2}>{title}</Typography>
      </Button>
    )
  }
)
