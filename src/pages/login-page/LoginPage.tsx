import { useNavigate } from 'react-router-dom'

import { Page } from '@/components'
import { LoginArgs, SingInForm, useLoginMutation } from '@/features'

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
