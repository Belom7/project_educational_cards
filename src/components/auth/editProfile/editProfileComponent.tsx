import { ButtonOption, TypographyOption } from '@/common/enums'
import { EditPencil } from '@/components/assets'
import { LogOut } from '@/components/assets/icons/LogOut'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Cards'
import { Typography } from '@/components/ui/Typography'

import s from './editProfileComponent.module.scss'

type EditProfileFormProps = {
  avatar: any
  profileName: string
}
export const EditProfileComponent: React.FC<EditProfileFormProps> = ({
  avatar,
  profileName = 'Ivan',
}) => {
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
