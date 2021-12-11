import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { fetchLogin, fetchRegister, fetchUpdate, fetchUser } from './authApi'

type User = any

export interface AuthState {
  isLoggedIn: boolean
  loginError: string | null | undefined
  registerError: string | null | undefined
  user: User | null
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  loginError: null,
  registerError: null
}

export const getUser = createAsyncThunk('auth/getUser', async (id: number) => {
  const response = await fetchUser(id)

  return response
})

export const login = createAsyncThunk('auth/login', async ({ password, email }: { password: string; email: string }) => {
  const response = await fetchLogin(email, password)

  return response
})

export const register = createAsyncThunk('auth/register', async ({ password, email }: { password: string; email: string }, { dispatch }) => {
  const response = await fetchRegister(email, password)

  if (response.id) {
    dispatch(getUser(response.id))
  }
  return response
})

export const update = createAsyncThunk(
  'auth/update',
  async ({ email, firstName, lastName, id }: { email: string; firstName: string; lastName: string; id: number }) => {
    const response = await fetchUpdate(email, firstName, lastName, id)

    return response
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: state => {
      state.isLoggedIn = false
      state.user = null
      state.registerError = null
      state.loginError = null
      localStorage.removeItem('token')
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload.data
      })
      .addCase(login.pending, state => {
        state.loginError = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loginError = null
        state.isLoggedIn = true
        state.user = { email: action.payload.email, id: action.payload.id }
        localStorage.setItem('token', action.payload.token)
      })
      .addCase(login.rejected, (state, action) => {
        state.loginError = action.error.message
      })
      .addCase(register.pending, state => {
        state.registerError = null
      })
      .addCase(register.fulfilled, (state, action) => {
        state.registerError = null
        state.isLoggedIn = true
        state.user = { id: action.payload.id }
        localStorage.setItem('token', action.payload.token)
      })
      .addCase(register.rejected, (state, action) => {
        state.registerError = action.error.message
      })
      .addCase(update.fulfilled, (state, action) => {
        state.user = action.payload
      })
  }
})

export const { logOut } = authSlice.actions

export const selectLoggedIn = (state: RootState) => state.auth.isLoggedIn
export const selectUser = (state: RootState) => state.auth.user
export const selectLoginError = (state: RootState) => state.auth.loginError
export const selectRegisterError = (state: RootState) => state.auth.registerError

export default authSlice.reducer
