import { useForm } from 'react-hook-form'

import { ButtonOption, TypographyOption } from '@/common/enums'
import ControlledCheckbox from '@/components/controlled/controlled-checkbox/controlled-checkbox'
import { ControlledTextField } from '@/components/controlled/controlled-text-field/controlled-text-field'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Cards'
import { Typography } from '@/components/ui/Typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './singInForm.module.scss'

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

  console.log(s.SingInCard)

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
        <Typography className={s.forgotPass} variant={TypographyOption.Body2}>
          Forgot Password?
        </Typography>
        <Button className={s.formButton} type={'submit'}>
          <Typography variant={TypographyOption.Subtitle2}>Sign In</Typography>
        </Button>
      </form>
      <Typography className={s.forgotPass} variant={TypographyOption.Body2}>
        {`Don't have an account?`}
      </Typography>
      {/*  необхогдимо доьавить  as={Link} из реакт дом и to={PATH}*/}
      <Button className={s.singUpButton} variant={ButtonOption.Link}>
        <Typography variant={TypographyOption.Subtitle1}> Sign Up</Typography>
      </Button>
    </Card>
  )
}
