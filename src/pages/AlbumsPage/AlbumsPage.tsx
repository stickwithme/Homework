// src/pages/AlbumsPage/AlbumsPage.tsx
import type { FC } from 'react'
import { useMemo, useState } from 'react'
import { useGetAlbumsQuery } from '../../entities/album/api/albumsApi'

const AlbumsPage: FC = () => {
  const [q, setQ] = useState('')
  const { data: albums = [], isFetching } = useGetAlbumsQuery()

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase()
    return s ? albums.filter(a => a.title.toLowerCase().includes(s)) : albums
  }, [q])

  return (
    <div>
      <h2>Альбомы</h2>
      <input
        placeholder="Поиск альбомов"
        value={q}
        onChange={(e) => setQ((e.target as HTMLInputElement).value)}
        style={{ margin: '8px 0' }}
      />
      {isFetching && <p>Загрузка...</p>}
      <ul>
        {filtered.map(a => <li key={a.id}>#{a.userId} — {a.title}</li>)}
      </ul>
    </div>
  )
}

export default AlbumsPage
