// src/pages/AlbumsPage/AlbumsPage.tsx
import type { FC } from 'react'
import { useMemo, useState } from 'react'
import { mockAlbums } from '../../lib/mocks/albums.mock'

export const AlbumsPage: FC = () => {
  const [q, setQ] = useState('')

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase()
    return s ? mockAlbums.filter(a => a.title.toLowerCase().includes(s)) : mockAlbums
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
      <ul>
        {filtered.map(a => <li key={a.id}>#{a.userId} — {a.title}</li>)}
      </ul>
    </div>
  )
}

export default AlbumsPage
