import { ButtonOption, TypographyOption } from '@/common/enums'
import { EditPencil, LogOut } from '@/components/assets'

import s from './EditProfile.module.scss'

import { Button } from '../../ui/button'
import { Card } from '../../ui/cards'
import { Typography } from '../../ui/typography'

type EditProfileFormProps = {
  avatar: any
  profileName: string
}
export const EditProfile: React.FC<EditProfileFormProps> = ({ avatar, profileName = 'Ivan' }) => {
  return (
    <Card className={s.EditProfileCard}>
      <Typography variant={TypographyOption.H1}>Personal Information</Typography>
      <div>
        <img alt={''} className={s.avatar} src={avatar ? avatar : ''} />
        <Button className={s.EditFormPencil} variant={ButtonOption.Icon}>
          <EditPencil />
        </Button>
      </div>
      <div className={s.EditFormNickNameWrapper}>
        <Typography variant={TypographyOption.H1}>{profileName}</Typography>
        <Button variant={ButtonOption.Icon}>
          <EditPencil />
        </Button>
      </div>
      <Button variant={ButtonOption.Secondary}>
        <LogOut />
        <Typography variant={TypographyOption.Subtitle2}>Logout</Typography>
      </Button>
    </Card>
  )
}
