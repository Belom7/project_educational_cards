import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './Page.module.scss'

export type PageProps = ComponentPropsWithoutRef<'div'>

export const Page = forwardRef<HTMLDivElement, PageProps>((props, ref) => {
  const { className, ...restProps } = props
  const classNames = clsx(s.root, className)

  return <div className={classNames} ref={ref} {...restProps} />
})
