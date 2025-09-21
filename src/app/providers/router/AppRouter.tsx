import type { FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '../../../shared/layouts/MainLayout'
import { UsersPage } from '../../../pages/UsersPage/UsersPage'
import { UserPage } from '../../../pages/UserPage/UserPage'
import { AlbumPage } from '../../../pages/AlbumPage/AlbumPage'
import { AlbumsPage } from '../../../pages/AlbumsPage/AlbumsPage'
import { TodosPage } from '../../../pages/TodosPage/TodosPage'
import PostsPage from '../../../pages/PostsPage/PostsPage'
import PostDetailsPage from '../../../pages/PostDetailsPage/PostDetailsPage'
import { UserAlbumsPage } from '../../../pages/UserAlbumsPage/UserAlbumsPage'
import AlbumPhotosPage from '../../../pages/AlbumPhotosPage/AlbumPhotosPage'
import { UserTodosPage } from '../../../pages/UserTodosPage/UserTodosPage'
import { UserPostsPage } from '../../../pages/UserPostsPage/UserPostsPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <PostsPage /> },
      { path: 'posts', element: <PostsPage /> },
      { path: 'posts/:id', element: <PostDetailsPage /> },

      { path: 'users', element: <UsersPage /> },
      {
        path: 'users/:id',
        element: <UserPage />,
        children: [
          { path: 'posts', element: <UserPostsPage /> },
          { path: 'albums', element: <UserAlbumsPage /> },
          { path: 'todos', element: <UserTodosPage /> },
        ],
      },

      { path: 'albums', element: <AlbumsPage /> },
      { path: 'albums/:id/photos', element: <AlbumPhotosPage /> },

      { path: 'todos', element: <TodosPage /> },
    ],
  },
])

const AppRouter: FC = () => <RouterProvider router={router} />

export default AppRouter
