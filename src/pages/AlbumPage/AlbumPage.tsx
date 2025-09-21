import type { FC } from 'react'
import { Outlet } from 'react-router-dom'

const AlbumPage: FC = () => {
  return (
    <div>
      <h2>Альбомы</h2>
      <Outlet />
    </div>
  )
}

export default AlbumPage
