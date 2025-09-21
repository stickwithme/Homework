import type { FC } from 'react'
import { useParams } from 'react-router-dom'

const AlbumPhotosPage: FC = () => {
  const { id } = useParams()
  return <h2>Фотографии альбома #{id}</h2>
}

export default AlbumPhotosPage
