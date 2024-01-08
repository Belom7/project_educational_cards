import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Routes } from '@/common/enums'
import { ForgotPasswordPage, LoginPage, PackListsPage, SignUpPage } from '@/common/pages'
import { Header, Preloader } from '@/components'
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
    element: <PackListsPage />,
    path: Routes.Main,
  },
]

const AppСomponent = () => {
  const { isError, isLoading } = useMeQuery()

  return (
    <>
      {isLoading && <Preloader />}
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
  const { isError } = useMeQuery()

  const isAuthenticated = !isError

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

export const Router = () => <RouterProvider router={router} />
