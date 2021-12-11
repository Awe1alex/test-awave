import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { fetchUsers } from './usersApi'

export interface UsersState {
  users: any
  status: 'loading' | 'error' | 'ready'
}

const initialState: UsersState = {
  users: {},
  status: 'loading'
}

export const getUsers = createAsyncThunk('users/getUsers', async (page: number) => {
  const response = await fetchUsers(page)

  return response
})

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUsers.pending, state => {
        state.status = 'loading'
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = 'ready'
        state.users = action.payload
      })
      .addCase(getUsers.rejected, state => {
        state.status = 'error'
      })
  }
})

export const selectCurrentUsers = (state: RootState) => state.users.users

export default usersSlice.reducer
