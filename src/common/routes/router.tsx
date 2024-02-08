import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Routes } from '@/common'
import { Header, Preloader } from '@/components'
import { useMeQuery } from '@/features'
import { DecksListPage, DecksPage, ForgotPasswordPage, LoginPage, SignUpPage } from '@/pages'
import { ProfilePage } from '@/pages/profile-page/ProfilePage'

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
    element: <DecksListPage />,
    path: Routes.Main,
  },
  {
    element: <DecksPage />,
    path: `${Routes.Decks}/:id/cards`,
  },
  {
    element: <ProfilePage />,
    path: Routes.Profile,
  },
]

const AppComponent = () => {
  const { data, isError, isLoading } = useMeQuery()

  return (
    <>
      {isLoading && <Preloader />}
      <Header authorized={!isError} avatar={data?.avatar} email={data?.email} name={data?.name} />
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
    element: <AppComponent />,
    errorElement: <Navigate to={Routes.NotFound} />,
  },
])

function PrivateRoutes() {
  const { isError } = useMeQuery()

  const isAuthenticated = !isError

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

export const Router = () => <RouterProvider router={router} />
