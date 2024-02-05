import { ForgotPasswordForm, Page } from '@/components'
import { useRecoverPasswordMutation } from '@/features'

export const ForgotPasswordPage = () => {
  const [recoverPassword] = useRecoverPasswordMutation()
  const handleSubmit = (data: { email?: string }) => {
    recoverPassword({ email: data.email || undefined }) // Вызов recoverPassword с переданными данными
  }

  return (
    <>
      <Page>
        <ForgotPasswordForm onSubmit={handleSubmit} />
      </Page>
    </>
  )
}
