import { Header } from '@/components/ui/Header'
import { Page } from '@/components/ui/Page'
import { SingInForm } from '@/features'
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
