import type { FC, ChangeEvent } from 'react'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUsers } from '../../features/Users/model/hooks/useUsers'

const UsersPage: FC = () => {
  const { users, loading } = useUsers()
  const [q, setQ] = useState('')
  const navigate = useNavigate()

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase()
    if (!s) return users
    return users.filter(u => u.name.toLowerCase().includes(s) || u.username.toLowerCase().includes(s))
  }, [q, users])

  if (loading) return <div>Loading users...</div>

  return (
    <div>
      <h2>Пользователи</h2>
      <input
        value={q}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setQ(e.target.value)}
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

export default UsersPage
