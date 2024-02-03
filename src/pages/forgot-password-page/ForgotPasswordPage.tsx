import { ForgotPasswordForm } from '@/components/auth/forgot-password/ForgotPasswordForm'
import { useRecoverPasswordMutation } from '@/features'

import { Page } from '../../components/ui/page'

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
