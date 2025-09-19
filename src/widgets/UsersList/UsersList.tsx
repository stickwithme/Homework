import type { FC } from 'react'
import type { User } from '../../entities/user/model/types'
import styles from './UsersList.module.css'

interface UsersListProps {
  users: User[]
  onOpenPosts: (userId: number) => void
  onOpenAlbums: (userId: number) => void
  onOpenTodos: (userId: number) => void
}

const UsersList: FC<UsersListProps> = ({ users, onOpenPosts, onOpenAlbums, onOpenTodos }) => {
  return (
    <div className={styles.grid}>
      {users.map(u => (
        <article key={u.id} className={styles.card}>
          <div className={styles.name}>{u.name}</div>
          <div className={styles.meta}>@{u.username} · {u.email}</div>
          <div className={styles.actions}>
            <button className={styles.button} onClick={() => onOpenPosts(u.id)}>Посты</button>
            <button className={styles.button} onClick={() => onOpenAlbums(u.id)}>Альбомы</button>
            <button className={styles.button} onClick={() => onOpenTodos(u.id)}>Задачи</button>
          </div>
        </article>
      ))}
    </div>
  )
}

export default UsersList
