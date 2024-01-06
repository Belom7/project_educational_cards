import { ForgotPasswordForm } from '@/components/auth/forgotPassword/forgotPasswordForm'
import { Header } from '@/components/ui/Header'
import { Page } from '@/components/ui/Page'
import { useRecoverPasswordMutation } from '@/features'

export const ForgotPasswordPage = () => {
  const [recoverPassword] = useRecoverPasswordMutation()
  const handleSubmit = (data: { email?: string }) => {
    recoverPassword({ email: data.email || undefined }) // Вызов recoverPassword с переданными данными
  }

  return (
    <>
      <Header authorized={false} />
      <Page>
        <ForgotPasswordForm onSubmit={handleSubmit} />
      </Page>
    </>
  )
}
