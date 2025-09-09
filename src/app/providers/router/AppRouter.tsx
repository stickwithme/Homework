import type { FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '../../../shared/layouts/MainLayout'
import PostsPage from '../../../pages/PostsPage/PostsPage'
import PostDetailsPage from '../../../pages/PostDetailsPage/PostDetailsPage'
import UserAlbumsPage from '../../../pages/UserAlbumsPage/UserAlbumsPage'
import AlbumPhotosPage from '../../../pages/AlbumPhotosPage/AlbumPhotosPage'
import UserTodosPage from '../../../pages/UserTodosPage/UserTodosPage'
import UserPostsPage from '../../../pages/UserPostsPage/UserPostsPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <PostsPage /> },
      { path: 'posts', element: <PostsPage /> },
      { path: 'posts/:id', element: <PostDetailsPage /> },
      { path: 'users/:id/albums', element: <UserAlbumsPage /> },
      { path: 'albums/:id/photos', element: <AlbumPhotosPage /> },
      { path: 'users/:id/todos', element: <UserTodosPage /> },
      { path: 'users/:id/posts', element: <UserPostsPage /> },
    ],
  },
])

const AppRouter: FC = () => <RouterProvider router={router} />

export default AppRouter
