export type LoginArgs = {
  email?: string | undefined
  password?: string | undefined
  rememberMe?: boolean | undefined
}
export type BaseResponseType = {
  avatar: string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}

export type SignUpParamsType = {
  email: string | undefined
  html?: string
  name?: string
  password: string
  sendConfirmationEmail?: boolean
  subject?: string
}
export type RecoverPasswordParamsType = Pick<SignUpParamsType, 'email'>
