import { useNavigate } from 'react-router-dom'

import { LoginArgs, SingInForm, useLoginMutation } from '@/features'

import { Page } from '../../components/ui/page'
export const LoginPage = () => {
  const [signIn] = useLoginMutation()
  const navigate = useNavigate()
  const handleSignIn = async (data: LoginArgs) => {
    try {
      await signIn(data).unwrap() // чтобы попасть в catch
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Page>
        <SingInForm onSubmit={handleSignIn} />
      </Page>
    </>
  )
}
