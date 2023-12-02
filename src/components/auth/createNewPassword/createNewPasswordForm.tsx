import { useForm } from 'react-hook-form'

import { TypographyOption } from '@/common/enums'
import { ControlledTextField } from '@/components/controlled/controlled-text-field/controlled-text-field'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Cards'
import { Typography } from '@/components/ui/Typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './createNewPasswordForm.module.scss'

const loginSchema = z
  .object({
    password: z.string().min(3, 'Too short password'),
  })
  .partial() // делает поля не обязательными

type FormValues = z.infer<typeof loginSchema>
export const CreateNewPasswordForm = ({ onSubmit }: { onSubmit: (data: FormValues) => void }) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      password: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(loginSchema),
  })

  return (
    <Card className={s.singInCard}>
      <Typography variant={TypographyOption.H1}>Forgot your password?</Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField
          control={control}
          errorMessage={errors.password?.message}
          label={'Password'}
          name={'password'}
          type={'password'}
        />
        <Typography className={s.formInformation} variant={TypographyOption.Body2}>
          Create new password and we will send you further instructions to email
        </Typography>
        <Button className={s.formButton} type={'submit'}>
          <Typography variant={TypographyOption.Subtitle2}>Create New Password</Typography>
        </Button>
      </form>
    </Card>
  )
}
