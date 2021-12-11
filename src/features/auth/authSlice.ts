import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { fetchLogin, fetchRegister, fetchUser } from './authApi'

type User = any

export interface AuthState {
  isLoggedIn: boolean
  error: string | null | undefined
  user: User | null
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  error: null
}

export const getUser = createAsyncThunk('auth/getUser', async (id: number) => {
  const response = await fetchUser(id)

  return response
})

export const login = createAsyncThunk('auth/login', async ({ password, email }: { password: string; email: string }) => {
  const response = await fetchLogin(email, password)

  return response
})

export const register = createAsyncThunk('auth/register', async ({ password, email }: { password: string; email: string }) => {
  const response = await fetchRegister(email, password)

  return response
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: state => {
      state.isLoggedIn = false
      localStorage.removeItem('token')
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getUser.pending, state => {
        state.error = null
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.error = null
        state.user = action.payload
      })
      .addCase(getUser.rejected, (state, action) => {
        state.error = 'error while fetching user'
      })
      .addCase(login.pending, state => {
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.error = null
        state.isLoggedIn = true
        state.user = { email: action.payload.email, id: action.payload.id }
        localStorage.setItem('token', action.payload.token)
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.error.message
      })
      .addCase(register.pending, state => {
        state.error = null
      })
      .addCase(register.fulfilled, (state, action) => {
        state.error = null
        state.isLoggedIn = true
        state.user = { id: action.payload.id }
        localStorage.setItem('token', action.payload.token)
      })
      .addCase(register.rejected, (state, action) => {
        console.log(action.payload)
        state.error = 'error while registering'
      })
  }
})

export const { logOut } = authSlice.actions

export const selectLoggedIn = (state: RootState) => state.auth.isLoggedIn
export const selectUser = (state: RootState) => state.auth.user

export default authSlice.reducer
