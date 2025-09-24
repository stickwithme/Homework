import type { FC, ChangeEvent } from 'react'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUsers } from '../../features/Users/model/hooks/useUsers'

export const UsersPage: FC = () => {
  const { users, loading } = useUsers()
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const filtered = useMemo(() => {
    const s = query.trim().toLowerCase()
    if (!s) return users
    return users.filter(u => u.name.toLowerCase().includes(s) || u.username.toLowerCase().includes(s))
  }, [query, users])

  if (loading) return <p>Загрузка…</p>

  return (
    <div>
      <h2>Пользователи</h2>
      <input
        value={query}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
        placeholder="Поиск по имени/нику"
      />
      <ul>
        {filtered.map(u => (
          <li key={u.id}>
            <button onClick={() => navigate(`/users/${u.id}/posts`)}>{u.name} (@{u.username})</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
