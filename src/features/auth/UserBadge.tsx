import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import { selectLoggedIn, selectUser } from './authSlice'
import avatar from './avatar.png'

export default function Users() {
  const isLoggedIn = useAppSelector(selectLoggedIn)
  const user = useAppSelector(selectUser)

  return isLoggedIn ? (
    <Link to='/profile'>
      <img src={user?.avatar ? user.avatar : avatar} alt='avatar' height={40} />
    </Link>
  ) : null
}
