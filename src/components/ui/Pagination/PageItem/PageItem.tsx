import { FC, JSX, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from '../Pagination.module.scss'

export type PageItemProps = {
  active?: boolean
  children: ReactNode
  disabled?: boolean
}

export const PageItem: FC<PageItemProps> = ({
  active = false,
  children,
  disabled = false,
}): JSX.Element => {
  const pageItemClassNames = clsx(s.pageItem, active && s.active, disabled && s.disabled)

  if (disabled) {
    return <span className={pageItemClassNames}>{children}</span>
  }

  return <a className={pageItemClassNames}>{children}</a>
}
