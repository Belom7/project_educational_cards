import { SingUpForm } from '@/components/auth/singUp/singUpForm'
import { Header } from '@/components/ui/Header'
import { Page } from '@/components/ui/Page'

export const SingUpPage = () => {
  return (
    <>
      <Header authorized={false} />
      <Page>
        <SingUpForm onSubmit={() => {}} />
      </Page>
    </>
  )
}
