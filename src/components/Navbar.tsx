import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { logOut, selectLoggedIn } from '../features/auth/authSlice'
import UserBadge from '../features/auth/UserBadge'

export default function Navbar() {
  const isLoggedIn = useAppSelector(selectLoggedIn)
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(logOut())
  }

  return (
    <nav className='navbar navbar-light bg-light'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          Logo
        </Link>

        <ul className='navbar-nav me-auto flex-row'>
          <li className='nav-item mx-2'>
            <Link className='nav-link' to='/'>
              Home
            </Link>
          </li>
          <li className='nav-item mx-2'>
            <Link className='nav-link' to='/users'>
              Users
            </Link>
          </li>
          {!isLoggedIn && (
            <li className='nav-item mx-2'>
              <Link className='nav-link' to='/sign-up'>
                Sign Up
              </Link>
            </li>
          )}
          {!isLoggedIn && (
            <li className='nav-item mx-2'>
              <Link className='nav-link' to='/login'>
                Login
              </Link>
            </li>
          )}
          {isLoggedIn && (
            <li className='nav-item mx-2'>
              <Link className='nav-link' to='/profile'>
                Profile
              </Link>
            </li>
          )}
          {isLoggedIn && (
            <li className='nav-item mx-2'>
              <Link className='nav-link' to='/' onClick={handleLogout}>
                Logout
              </Link>
            </li>
          )}
        </ul>
        <UserBadge />
      </div>
    </nav>
  )
}
