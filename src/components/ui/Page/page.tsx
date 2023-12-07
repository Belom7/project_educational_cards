import { ReactNode } from 'react'

import s from './page.module.scss'
type pagePropsType = {
  children: ReactNode
}
export const Page = ({ children }: pagePropsType) => {
  return <div className={s.page}>{children}</div>
}
