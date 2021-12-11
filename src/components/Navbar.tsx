import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          Logo
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/users'>
                Users
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/profile'>
                Profile
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/users'>
                Users
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/sign-up'>
                Sign Up
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/login'>
                Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/logout'>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
