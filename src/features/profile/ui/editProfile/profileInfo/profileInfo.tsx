import { ButtonOption, TypographyOption } from '@/common'
import { Button, Typography } from '@/components'
import { EditTablePencil, LogOut } from '@/components/assets'
import { useLogoutMutation } from '@/features'

import s from './profileInfo.module.scss'
type ProfileInfoProps = {
  email: string
  name: string
  onEditProfile: () => void
}
export const ProfileInfo = ({ email, name, onEditProfile }: ProfileInfoProps) => {
  const [logout] = useLogoutMutation()

  const onLogout = () => {
    logout()
  }

  return (
    <>
      <Typography variant={TypographyOption.H2}>
        {name} <EditTablePencil className={s.iconProfileEdit} onClick={onEditProfile} />
      </Typography>
      <Typography className={s.profileMailColor} variant={TypographyOption.Caption}>
        {email}
      </Typography>
      <Button onClick={onLogout} variant={ButtonOption.Secondary}>
        <LogOut />
        <Typography variant={TypographyOption.Subtitle2}>Logout</Typography>
      </Button>
    </>
  )
}
