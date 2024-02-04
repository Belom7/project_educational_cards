import { Link } from 'react-router-dom'

import { LogoIcon } from '@/assets'
import { Routes, TypographyOption } from '@/common'
import { Button, DropdownMenu, Typography } from '@/components'

import s from './Header.module.scss'
type HeaderProps = {
  authorized: boolean
  avatar?: any
  email?: string
  name?: string
}
export const Header = ({ authorized = false, avatar, email, name }: HeaderProps) => {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <LogoIcon />
        </div>
        {!authorized ? (
          <Button as={Link} className={s.other} to={Routes.Login}>
            Sing In
          </Button>
        ) : (
          <div className={s.other}>
            <Typography className={s.name} variant={TypographyOption.Subtitle1}>
              {name}
            </Typography>
            <DropdownMenu email={email} name={name}>
              {avatar ? (
                <img alt={''} className={s.avatar} src={avatar ? avatar : ''} />
              ) : (
                <div className={s.avatar}>{name?.substring(0, 1)}</div>
              )}
            </DropdownMenu>
          </div>
        )}
      </div>
    </header>
  )
}
