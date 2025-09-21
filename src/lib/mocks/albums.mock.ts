import type { Album } from '../../entities/album/model/types'

export const mockAlbums: Album[] = [
  { id: 1, userId: 1, title: 'Alice — Пейзажи' },
  { id: 2, userId: 1, title: 'Alice — Путешествия' },
  { id: 3, userId: 2, title: 'Bob — Домашний архив' },
  { id: 4, userId: 3, title: 'Charlie — Закат' },
  { id: 5, userId: 3, title: 'Charlie — Рассвет' },
  { id: 6, userId: 4, title: 'Diana — Семья' },
  { id: 7, userId: 5, title: 'Evan — Проекты' },
]
