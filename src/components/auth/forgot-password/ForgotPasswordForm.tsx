import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { ButtonOption, Routes, TypographyOption } from '@/common/enums'
import { ControlledTextField } from '@/components/controlled/controlled-text-field/ControlledTextField'
import { Button } from '../../ui/button'
import { Card } from '../../ui/cards'
import { Typography } from '../../ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './ForgotPasswordForm.module.scss'

const loginSchema = z
  .object({
    email: z.string().email({ message: 'Invalid email address' }),
  })
  .partial() // делает поля не обязательными

type FormValues = z.infer<typeof loginSchema>
export const ForgotPasswordForm = ({ onSubmit }: { onSubmit: (data: FormValues) => void }) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
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
          errorMessage={errors.email?.message}
          label={'Email'}
          name={'email'}
        />
        <Typography className={s.formInformation} variant={TypographyOption.Body2}>
          Enter your email address and we will send you further instructions
        </Typography>
        <Button className={s.formButton} type={'submit'}>
          <Typography variant={TypographyOption.Subtitle2}>Send Instructions</Typography>
        </Button>
      </form>
      <Typography className={s.formLink} variant={TypographyOption.Body2}>
        Did you remember your password?
      </Typography>
      {/*  необхогдимо доьавить  as={Link} из реакт дом и to={PATH}*/}
      <Button as={Link} className={s.tryLoginButton} to={Routes.Login} variant={ButtonOption.Link}>
        <Typography variant={TypographyOption.Subtitle1}>Try logging in</Typography>
      </Button>
    </Card>
  )
}
