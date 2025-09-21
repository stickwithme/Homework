import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../../../app/providers/store'
import type { Post } from '../types'

const postsAdapter = createEntityAdapter<Post>({
  selectId: (p) => p.id,
  sortComparer: (a,b) => a.title.localeCompare(b.title),
})

const initialState = postsAdapter.getInitialState()

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    upsertMany: postsAdapter.upsertMany,
    upsertOne: postsAdapter.upsertOne,
    removeOne: postsAdapter.removeOne,
  }
})

export const postsSelectors = postsAdapter.getSelectors<RootState>((state) => state.posts)
export const { upsertMany, upsertOne, removeOne } = postSlice.actions
export default postSlice.reducer
