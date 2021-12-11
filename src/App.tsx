import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Layout from './components/Layout'
import RequireAuth from './components/RequireAuth'
import RequireNoAuth from './components/RequireNoAuth'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import Users from './pages/Users'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/users' element={<Users />} />

        <Route
          path='/profile'
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />

        <Route
          path='/login'
          element={
            <RequireNoAuth>
              <Login />
            </RequireNoAuth>
          }
        />
        <Route
          path='/sign-up'
          element={
            <RequireNoAuth>
              <SignUp />
            </RequireNoAuth>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
