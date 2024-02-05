import { Button } from '@/components'
import { ControlledTextField } from '@/components/controlled'
import { EditProfileValues, useEditProfile } from '@/features/profile/ui'

import s from './editProfile.module.scss'

type Props = {
  initialValues?: EditProfileValues
  onSubmit: (data: EditProfileValues) => void
}

export const EditProfileInfo = ({ initialValues, onSubmit }: Props): JSX.Element => {
  const { control, handleSubmit } = useEditProfile(initialValues)

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <ControlledTextField className={s.input} control={control} label={'Nickname'} name={'name'} />
      <Button className={s.buttonEditProfile} fullWidth type={'submit'}>
        Save Changes
      </Button>
    </form>
  )
}
