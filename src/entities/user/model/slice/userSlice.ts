import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../../../app/providers/store'
import type { User } from '../types'

const usersAdapter = createEntityAdapter<User>({
  selectId: (u) => u.id,
  sortComparer: (a,b) => a.name.localeCompare(b.name),
})

const initialState = usersAdapter.getInitialState()

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    upsertMany: usersAdapter.upsertMany,
    upsertOne: usersAdapter.upsertOne,
    removeOne: usersAdapter.removeOne,
  }
})

export const usersSelectors = usersAdapter.getSelectors<RootState>((state) => state.users)
export const { upsertMany, upsertOne, removeOne } = userSlice.actions
export default userSlice.reducer
