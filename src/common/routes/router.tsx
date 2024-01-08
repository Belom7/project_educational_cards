import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Routes } from '@/common/enums'
import { DeckPage } from '@/common/pages/DeckPage'
import { ForgotPasswordPage } from '@/common/pages/forgotPasswordPage'
import { LoginPage } from '@/common/pages/loginPage'
import { SignUpPage } from '@/common/pages/singUpPage'
import { Header } from '@/components/ui/Header'
import { useMeQuery } from '@/features'

const publicRoutes: RouteObject[] = [
  {
    element: <LoginPage />,
    path: Routes.Login,
  },
  {
    element: <SignUpPage />,
    path: Routes.SignUp,
  },
  {
    element: <ForgotPasswordPage />,
    path: Routes.ForgotPassword,
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <DeckPage />,
    path: Routes.Main,
  },
]

const AppСomponent = () => {
  const { isError, isLoading } = useMeQuery()

  if (isLoading) {
    return <div>...Loading</div>
  }

  return (
    <>
      <Header authorized={!isError} />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
      },
      ...publicRoutes,
    ],
    element: <AppСomponent />,
    errorElement: <Navigate to={Routes.NotFound} />,
  },
])

function PrivateRoutes() {
  const { isError, isLoading } = useMeQuery()

  if (isLoading) {
    return <div>...Loading</div>
  }
  const isAuthenticated = !isError

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

export const Router = () => <RouterProvider router={router} />
