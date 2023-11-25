import { useForm } from 'react-hook-form'

import ControlledCheckbox from '@/components/controlled/controlled-checkbox/controlled-checkbox'
import { Button } from '@/components/ui/Button'
import { TextField } from '@/components/ui/Text-field'
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
    register,
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
        <TextField {...register('email')} errorMessage={errors.email?.message} label={'email'} />
        <TextField
          {...register('password')}
          errorMessage={errors.password?.message}
          label={'password'}
        />
        <ControlledCheckbox control={control} label={'Remember Me'} name={'rememberMe'} />
        <Button type={'submit'}>Submit</Button>
      </form>
    </>
  )
}
