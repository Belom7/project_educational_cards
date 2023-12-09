import { ForgotPasswordForm } from '@/components/auth/forgotPassword/forgotPasswordForm'
import { Header } from '@/components/ui/Header'
import { Page } from '@/components/ui/Page'

export const ForgotPasswordPage = () => {
  return (
    <>
      <Header authorized={false} />
      <Page>
        <ForgotPasswordForm onSubmit={() => {}} />
      </Page>
    </>
  )
}
