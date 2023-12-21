import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { ButtonOption, Routes, TypographyOption } from '@/common/enums'
import { ControlledTextField } from '@/components/controlled/controlled-text-field/controlled-text-field'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Cards'
import { Typography } from '@/components/ui/Typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './singUpForm.module.scss'

const loginSchema = z
  .object({
    confirmPassword: z.string().min(3, 'Too short password'),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(3, 'Too short password'),
  })
  .partial() // делает поля не обязательными

type FormValues = z.infer<typeof loginSchema>
export const SingUpForm = ({ onSubmit }: { onSubmit: (data: FormValues) => void }) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(loginSchema),
  })

  return (
    <Card className={s.singInCard}>
      <Typography variant={TypographyOption.H1}>Sign Up</Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField
          control={control}
          errorMessage={errors.email?.message}
          label={'Email'}
          name={'email'}
        />
        <ControlledTextField
          className={s.formTextField}
          control={control}
          errorMessage={errors.password?.message}
          label={'Password'}
          name={'password'}
          type={'password'}
        />
        <ControlledTextField
          className={s.formTextField}
          control={control}
          errorMessage={errors.password?.message}
          label={'Confirm Password'}
          name={'confirmPassword'}
          type={'password'}
        />
        <Button className={s.formButton} type={'submit'}>
          <Typography variant={TypographyOption.Subtitle2}>Sign Up</Typography>
        </Button>
      </form>
      <Typography className={s.formHaveAccount} variant={TypographyOption.Body2}>
        Already have an account?
      </Typography>
      {/*  необхогдимо доьавить  as={Link} из реакт дом и to={PATH}*/}
      <Button as={Link} className={s.singInButton} to={Routes.Login} variant={ButtonOption.Link}>
        <Typography variant={TypographyOption.Subtitle1}> Sign In</Typography>
      </Button>
    </Card>
  )
}
