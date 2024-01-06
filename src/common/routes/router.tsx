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
  return <RouterProvider router={router} />
}
function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
