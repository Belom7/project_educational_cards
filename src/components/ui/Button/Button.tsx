import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  fullWidth?: boolean
  variant?: 'link' | 'primary' | 'secondary' | 'tertiary'
} & ComponentPropsWithoutRef<T>

import { clsx } from 'clsx'

import s from './Button.module.scss'

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props
  const cls = clsx(fullWidth && s.fullWidth, s[variant], className)

  return <Component className={cls} {...rest} />
}
