import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { PackListPage } from '@/common/pages/PacksListPage'
import { ForgotPasswordPage } from '@/common/pages/forgotPasswordPage'
import { LoginPage } from '@/common/pages/loginPage'
import { PackListsPage } from '@/common/pages/packsListsPage'
import { SignUpPage } from '@/common/pages/singUpPage'
import { useMeQuery } from '@/features'

const publicRoutes: RouteObject[] = [
  {
    element: <LoginPage />,
    path: '/login',
  },
  {
    element: <SignUpPage />,
    path: '/sign-up',
  },
  {
    element: <ForgotPasswordPage />,
    path: '/forgot-password',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <PackListsPage />,
    path: '/my-pack-list',
  },
  {
    element: <PackListPage />,
    path: '/',
  },
]

const router = createBrowserRouter([
  ...publicRoutes,
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
])

export const Router = () => {
  const { isLoading } = useMeQuery()

  if (isLoading) {
    return <div>...Loading</div>
  }

  return <RouterProvider router={router} />
}
function PrivateRoutes() {
  const { isError, isLoading } = useMeQuery()

  if (isLoading) {
    return <div>...Loading</div>
  }
  const isAuthenticated = !isError

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
