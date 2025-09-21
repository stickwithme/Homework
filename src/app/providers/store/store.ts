// src/app/providers/store/store.ts
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { baseApi } from '../../../shared/api/baseApi'
import postsReducer from '../../../entities/post/model/slice/postSlice'
import usersReducer from '../../../entities/user/model/slice/userSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    // Register **one** RTK Query slice: the baseApi used for all injected endpoints
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefault) =>
    getDefault().concat(baseApi.middleware), // include middleware only once
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
