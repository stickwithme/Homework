import { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { mockTodos } from '../../lib/mocks/todos.mock';

type Todo = typeof mockTodos[number];

const TodosList: FC<{ todos: Todo[] }> = ({ todos }) => (
  <ul>
    {todos.map(t => (
      <li key={t.id}>
        <input type="checkbox" checked={t.completed} readOnly /> {t.title}
      </li>
    ))}
  </ul>
);

export const UserTodosPage: FC = () => {
  const { userId } = useParams();
  const uid = Number(userId);
  const todos = useMemo(() => mockTodos.filter(t => t.userId === uid), [uid]);
  return (
    <section>
      <h2>Todos of user #{uid}</h2>
      <TodosList todos={todos} />
    </section>
  );
};
