import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { TypographyOption } from '@/common/enums'
import { clsx } from 'clsx'

import s from './Typography.module.scss'

export type TypographyProps<T extends ElementType> = {
  children?: ReactNode
  className?: string
  component?: T
  variant?: TypographyOption
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType>(
  props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>
) => {
  const { className, component, variant = 'Body1', ...rest } = props

  const Component = component || 'span'
  const classNames = clsx(s[variant], className)

  return <Component className={classNames} {...rest} />
}
