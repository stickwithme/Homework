import type { FC } from 'react'
import type { Todo } from '../../entities/todo/model/types'
import styles from './TodosList.module.css'

interface TodosListProps {
  todos: Todo[]
  onToggle?: (todoId: number) => void
}

const TodosList: FC<TodosListProps> = ({ todos, onToggle }) => {
  return (
    <div className={styles.list}>
      {todos.map(t => (
        <label key={t.id} className={styles.item}>
          <input
            type="checkbox"
            checked={t.completed}
            onChange={() => onToggle?.(t.id)}
          />
          <span className={`${styles.title} ${t.completed ? styles.done : ''}`}>{t.title}</span>
        </label>
      ))}
    </div>
  )
}

export default TodosList
