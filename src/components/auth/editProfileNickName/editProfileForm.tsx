import { useForm } from 'react-hook-form'

import { TypographyOption } from '@/common/enums'
import { ControlledTextField } from '@/components/controlled/controlled-text-field/controlled-text-field'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Cards'
import { Typography } from '@/components/ui/Typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { string, z } from 'zod'

import s from './editProfileForm.module.scss'

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
