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
import { DeckPage, ForgotPasswordPage, LoginPage, PackListsPage, SignUpPage } from '@/pages'
import { ProfilePage } from '@/pages/progile-page/ProfilePage'

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
  {
    element: <DeckPage />,
    path: `${Routes.Decks}/:id/cards`,
  },
  {
    element: <ProfilePage />,
    path: Routes.Profile,
  },
  {
    element: <DeckPage />,
    path: Routes.Deck,
  },
]

const AppСomponent = () => {
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
