import type { FC } from 'react'
import { useState } from 'react'
import { useGetAlbumsQuery } from '../../entities/album/api/albumsApi'

export const AlbumsPage: FC = () => {
  const [query, setQuery] = useState('')
  const { data: albums = [], isLoading } = useGetAlbumsQuery()

  const visible = query
    ? albums.filter((a) =>
        a.title.toLowerCase().includes(query.trim().toLowerCase())
      )
    : albums

  if (isLoading) return <p>Загрузка…</p>

  return (
    <div>
      <h2>Альбомы</h2>
      <input
        placeholder="Поиск альбомов"
        value={query}
        onChange={(e) => setQuery((e.target as HTMLInputElement).value)}
        style={{ margin: '8px 0' }}
      />
      <ul>
        {visible.map((a) => (
          <li key={a.id}>
            #{a.userId} — {a.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
