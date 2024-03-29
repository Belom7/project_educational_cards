import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { ButtonOption, Routes, TypographyOption } from '@/common'
import { Button, Card, ControlledCheckbox, ControlledTextField, Typography } from '@/components'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './SingInForm.module.scss'

const loginSchema = z
  .object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(3, 'Too short password'),
    rememberMe: z.boolean().optional(),
  })
  .partial() // делает поля не обязательными

type FormValues = z.infer<typeof loginSchema>

export const SingInForm = ({ onSubmit }: { onSubmit: (data: FormValues) => void }) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    mode: 'onSubmit',
    resolver: zodResolver(loginSchema),
  })

  return (
    <Card className={s.singInCard}>
      <Typography variant={TypographyOption.H1}>Sign In</Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField
          control={control}
          errorMessage={errors.email?.message}
          label={'Email'}
          name={'email'}
        />
        <ControlledTextField
          control={control}
          errorMessage={errors.password?.message}
          label={'Password'}
          name={'password'}
          type={'password'}
        />

        <ControlledCheckbox
          className={s.checkbox}
          control={control}
          label={'Remember Me'}
          name={'rememberMe'}
        />
        <Button
          as={Link}
          className={s.forgotPass}
          to={Routes.ForgotPassword}
          variant={ButtonOption.Link}
        >
          <Typography variant={TypographyOption.Body2}>Forgot Password?</Typography>
        </Button>
        <Button className={s.formButton} type={'submit'}>
          <Typography variant={TypographyOption.Subtitle2}>Sign In</Typography>
        </Button>
      </form>
      <Typography className={s.forgotPass} variant={TypographyOption.Body2}>
        {`Don't have an account?`}
      </Typography>
      {/*  необхогдимо доьавить  as={Link} из реакт дом и to={PATH}*/}
      <Button as={Link} className={s.singUpButton} to={Routes.SignUp} variant={ButtonOption.Link}>
        <Typography variant={TypographyOption.Subtitle1}> Sign Up</Typography>
      </Button>
    </Card>
  )
}
