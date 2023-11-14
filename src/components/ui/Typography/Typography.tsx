import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './Typography.module.scss'

const COMPONENTS = {
  Body1: 'p',
  Body2: 'p',
  Caption: 'span',
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  Large: 'span',
  Link1: 'a',
  Link2: 'a',
  Overline: 'p',
  Subtitle1: 'p',
  Subtitle2: 'p',
  error: 'span',
} as const

type Component = keyof typeof COMPONENTS

export type TypographyProps<T extends ElementType> = {
  children?: ReactNode
  className?: string
  component?: T
  variant?: Component
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType>(
  props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>
) => {
  const { basicName, className, component, variant = 'Body1', ...rest } = props

  const Component = component || COMPONENTS[variant] || 'span'
  const classNames = clsx(s[variant], className)

  return <Component className={classNames} {...rest} />
}

// export const Typography = {
//   Body1: CreateTypography({ variant: 'Body1' }),
//   Body2: CreateTypography({ variant: 'Body2' }),
//   Caption: CreateTypography({ variant: 'Caption' }),
//   H1: CreateTypography({ variant: 'H1' }),
//   H2: CreateTypography({ variant: 'H2' }),
//   H3: CreateTypography({ variant: 'H3' }),
//   Large: CreateTypography({ variant: 'Large' }),
//   Link1: CreateTypography({ variant: 'Link1' }),
//   Link2: CreateTypography({ variant: 'Link2' }),
//   Overline: CreateTypography({ variant: 'Overline' }),
//   Subtitle1: CreateTypography({ variant: 'Subtitle1' }),
//   Subtitle2: CreateTypography({ variant: 'Subtitle2' }),
// }
