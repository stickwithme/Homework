import type { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useGetTodosQuery } from '../../entities/todo/api/todosApi'

export const UserTodosPage: FC = () => {
  const { id } = useParams()
  const uid = Number(id) || 0
  const { data: todos = [], isLoading } = useGetTodosQuery(uid)

  if (isLoading) return <p>Загрузка…</p>

  return (
    <section>
      <h2>Todos of user #{uid}</h2>
      <ul>
        {todos.map(t => (
          <li key={t.id}>
            <input type="checkbox" checked={t.completed} readOnly /> {t.title}
          </li>
        ))}
      </ul>
    </section>
  )
}
