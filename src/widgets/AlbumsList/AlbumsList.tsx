import type { FC } from 'react'
import type { Album } from '../../entities/album/model/types'
import styles from './AlbumsList.module.css'

interface AlbumsListProps {
  albums: Album[]
  onOpen: (albumId: number) => void
}

export const AlbumsList: FC<AlbumsListProps> = ({ albums, onOpen }) => {
  return (
    <div className={styles.list}>
      {albums.map(a => (
        <div key={a.id} className={styles.item}>
          <div className={styles.title}>{a.title}</div>
          <button className={styles.button} onClick={() => onOpen(a.id)}>Открыть</button>
        </div>
      ))}
    </div>
  )
}

export default AlbumsList
