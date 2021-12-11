import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import { selectLoggedIn } from '../features/auth/authSlice'

type RequireAuthProps = {
  children: JSX.Element
}

export default function RequireAuth({ children }: RequireAuthProps) {
  const isLoggedIn = useAppSelector(selectLoggedIn)

  return !isLoggedIn ? children : <Navigate to='/profile' />
}
