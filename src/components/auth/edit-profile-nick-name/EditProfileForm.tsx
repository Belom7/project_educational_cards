import { useForm } from 'react-hook-form'

import { TypographyOption } from '@/common/enums'
import { ControlledTextField } from '@/components/controlled/controlled-text-field/ControlledTextField'
import { Button } from '../../ui/button'
import { Card } from '../../ui/cards'
import { Typography } from '../../ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { string, z } from 'zod'

import s from './EditProfileForm.module.scss'

const editSchema = z
  .object({
    nickName: string().min(3, 'Too short name'),
  })
  .partial() // делает поля не обязательными

type FormValues = z.infer<typeof editSchema>
type EditProfileFormProps = {
  avatar: any
  onSubmit: (data: FormValues) => void
  profileName: string
}
export const EditProfileForm = ({ avatar, onSubmit }: EditProfileFormProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      nickName: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(editSchema),
  })

  return (
    <Card className={s.EditProfileCard}>
      <Typography variant={TypographyOption.H1}>Personal Information</Typography>
      <img alt={''} className={s.avatar} src={avatar ? avatar : ''} />
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField
          control={control}
          errorMessage={errors.nickName?.message}
          label={'Nick Name'}
          name={'nickName'}
        />
        <Button className={s.formButton} type={'submit'}>
          <Typography variant={TypographyOption.Subtitle2}>Save Changes</Typography>
        </Button>
      </form>
    </Card>
  )
}
