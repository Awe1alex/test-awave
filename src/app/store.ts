import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import authSlice from '../features/auth/authSlice'
import usersSlice from '../features/users/usersSlice'

export const store = configureStore({
  reducer: {
    users: usersSlice,
    auth: authSlice
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
