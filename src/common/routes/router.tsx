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
import {
  CardsPage,
  DeckPage,
  DecksListPage,
  ForgotPasswordPage,
  LoginPage,
  ProfilePage,
  SignUpPage,
} from '@/pages'

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
    element: <CardsPage />,
    path: `${Routes.Decks}/:id/cards`,
  },
  {
    element: <ProfilePage />,
    path: Routes.Profile,
  },
  {
    element: <DeckPage />,
    path: `${Routes.Decks}/:id/learn`,
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
