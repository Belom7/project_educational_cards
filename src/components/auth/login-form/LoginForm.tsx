import { useForm } from 'react-hook-form'

import { ControlledCheckbox } from '@/components/controlled/controlled-checkbox/ControlledCheckbox'
import { ControlledTextField } from '@/components/controlled/controlled-text-field/ControlledTextField'
import { Button } from '../../ui/button'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const loginSchema = z
  .object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(3, 'Too short password'),
    rememberMe: z.boolean().optional(),
  })
  .partial() // делает поля не обязательными

type FormValues = z.infer<typeof loginSchema>
export const LoginForm = ({ onSubmit }: { onSubmit: (data: FormValues) => void }) => {
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
    <>
      <DevTool control={control} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField
          control={control}
          errorMessage={errors.email?.message}
          label={'email'}
          name={'email'}
        />
        <ControlledTextField
          control={control}
          errorMessage={errors.password?.message}
          label={'password'}
          name={'password'}
          type={'password'}
        />
        <ControlledCheckbox control={control} label={'Remember Me'} name={'rememberMe'} />
        <Button type={'submit'}>Submit</Button>
      </form>
    </>
  )
}
