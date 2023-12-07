import { SingInForm } from '@/components/auth/singIn/singInForm'
import { Header } from '@/components/ui/Header'
import { Page } from '@/components/ui/Page'
export const LoginPage = () => {
  return (
    <>
      <Header authorized={false} />
      <Page>
        <SingInForm onSubmit={() => {}} />
      </Page>
    </>
  )
}
