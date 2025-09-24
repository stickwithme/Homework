import type { FC } from 'react'
import { useState } from 'react'
import { useGetTodosQuery } from '../../entities/todo/api/todosApi'

export const TodosPage: FC = () => {
  const [query, setQuery] = useState('')
  const [userId, setUserId] = useState<number | ''>('')
  const { data: todos = [], isLoading } = useGetTodosQuery()

  const visible = todos.filter((t) => {
    const okUser = userId === '' ? true : t.userId === userId
    const okQuery = query
      ? t.title.toLowerCase().includes(query.trim().toLowerCase())
      : true
    return okUser && okQuery
  })

  if (isLoading) return <p>Загрузка…</p>

  return (
    <div>
      <h2>Задачи</h2>
      <div
        style={{
          display: 'flex',
          gap: 8,
          alignItems: 'center',
          marginBottom: 8,
        }}
      >
        <label>
          Поиск:&nbsp;
          <input
            value={query}
            onChange={(e) => setQuery((e.target as HTMLInputElement).value)}
          />
        </label>
        <label>
          userId:&nbsp;
          <input
            type="number"
            value={userId}
            onChange={(e) =>
              setUserId(e.target.value ? Number(e.target.value) : '')
            }
          />
        </label>
      </div>
      <ul>
        {visible.map((t) => (
          <li key={t.id}>
            #{t.userId} — {t.title} {t.completed ? '✓' : ''}
          </li>
        ))}
      </ul>
    </div>
  )
}
