import { ComponentPropsWithoutRef, ElementType } from 'react'

import { ButtonOption } from '@/common/enums'
import { clsx } from 'clsx'

import s from './Button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  variant?: ButtonOption
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props
  const cls = clsx(fullWidth && s.fullWidth, s[variant], className)

  return <Component className={cls} {...rest} />
}
