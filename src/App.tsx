import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import Users from './pages/Users'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/users' element={<Users />} />
        <Route path='/logout' element={<Logout />} />
      </Route>
    </Routes>
  )
}

export default App
