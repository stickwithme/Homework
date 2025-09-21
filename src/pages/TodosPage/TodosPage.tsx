// src/pages/TodosPage/TodosPage.tsx
import type { FC } from 'react'
import { useMemo, useState } from 'react'
import { mockTodos } from '../../lib/mocks/todos.mock'

export const TodosPage: FC = () => {
  const [user, setUser] = useState<number | ''>('')
  const filtered = useMemo(() => {
    return user ? mockTodos.filter(t => t.userId === user) : mockTodos
  }, [user])

  return (
    <div>
      <h2>Задачи</h2>
      <label>
        Фильтр по пользователю:&nbsp;
        <input
          type="number"
          value={user as any}
          onChange={(e) => setUser(Number((e.target as HTMLInputElement).value) || '')}
          style={{ width: 80 }}
        />
      </label>
      <ul>
        {filtered.map(t => (
          <li key={t.id}>
            #{t.userId}&nbsp;—&nbsp;{t.title}&nbsp;{t.completed ? '✓' : ''}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodosPage
