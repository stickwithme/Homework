// src/pages/TodosPage/TodosPage.tsx
import type { FC } from 'react'
import { useMemo, useState } from 'react'
import { useGetTodosQuery } from '../../entities/todo/api/todosApi'

const TodosPage: FC = () => {
  const [user, setUser] = useState<number | ''>('')
  const { data: todos = [], isFetching } = useGetTodosQuery(user || undefined)
  const filtered = useMemo(() => todos, [todos])

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
      {isFetching && <p>Загрузка...</p>}\n      <ul>
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
