import type { Todo } from '../../entities/todo/model/types'

export const mockTodos: Todo[] = [
  { id: 1, userId: 1, title: 'Купить молоко', completed: false },
  { id: 2, userId: 1, title: 'Починить велосипед', completed: true },
  { id: 3, userId: 2, title: 'Сделать отчёт', completed: false },
  { id: 4, userId: 3, title: 'Подготовить презентацию', completed: false },
  { id: 5, userId: 4, title: 'Позвонить маме', completed: true },
  { id: 6, userId: 5, title: 'Выучить React Router', completed: false },
]
