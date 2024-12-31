import React from 'react'
import useAuth from '../hooks/useAuth'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

export const ProtectedRoutes = () => {
  const { authed } = useAuth()
  const location = useLocation()

  return authed ? <Outlet /> : <Navigate to='/log-in' replace state={{ path: location.pathname }} />
}
