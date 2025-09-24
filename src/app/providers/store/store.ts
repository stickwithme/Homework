import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { baseApi } from '../../../shared/api/baseApi'
import postsReducer from '../../../entities/post/model/slice/postSlice'
import usersReducer from '../../../entities/user/model/slice/userSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,

    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(baseApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
