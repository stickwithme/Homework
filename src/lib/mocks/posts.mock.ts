import type { Post } from '../../entities/post/model/types'

export const mockPosts: Post[] = [
  {
    id: 1,
    title: 'Введение в React',
    body: 'Быстрый старт с компонентами и JSX.',
    userId: 1,
  },
  {
    id: 2,
    title: 'TypeScript: основы',
    body: 'Типы, интерфейсы, generic-и — кратко.',
    userId: 2,
  },
  {
    id: 3,
    title: 'Архитектура фронтенда',
    body: 'Фиче-модули, слои, алиасы.',
    userId: 3,
  },
]
