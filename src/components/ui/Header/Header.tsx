import { TypographyOption } from '@/common/enums'
import { Logo } from '@/components/assets'
import { Button } from '@/components/ui/Button'
import { Typography } from '@/components/ui/Typography'

import s from './Header.module.scss'
type HeaderProps = {
  authorized: boolean
  avatar: any
  name?: string
}
export const Header = ({ authorized = false, avatar, name = 'Ivan' }: HeaderProps) => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <Logo />
      </div>
      {authorized ? (
        <Button className={s.other}>Sing In</Button>
      ) : (
        <div className={s.other}>
          <Typography className={s.name} variant={TypographyOption.Subtitle1}>
            {name}
          </Typography>
          <img alt={''} className={s.avatar} src={avatar ? avatar : ''} />
        </div>
      )}
    </header>
  )
}
