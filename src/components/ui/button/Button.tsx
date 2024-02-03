import { ComponentPropsWithoutRef, ElementType, ReactNode, forwardRef } from 'react'

import { ButtonOption } from '@/common/enums'
import { clsx } from 'clsx'

import s from './Button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  fullWidth?: boolean
  variant?: ButtonOption
} & ComponentPropsWithoutRef<T>

const ButtonBase = <T extends ElementType = 'button'>(props: ButtonProps<T>, ref: any) => {
  const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props
  const cls = clsx(fullWidth && s.fullWidth, s[variant], className)

  return <Component className={cls} {...rest} ref={ref} />
}

export const Button = forwardRef(ButtonBase)
