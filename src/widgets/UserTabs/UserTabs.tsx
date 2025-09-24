import type { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './UserTabs.module.css'

interface UserTabsProps {
  userId: number
}

export const UserTabs: FC<UserTabsProps> = ({ userId }) => {
  const makeClass = ({ isActive }: { isActive: boolean }) =>
    [styles.tab, isActive ? styles.active : ''].join(' ')

  return (
    <nav className={styles.tabs}>
      <NavLink to={`/users/${userId}/posts`} className={makeClass}>Посты</NavLink>
      <NavLink to={`/users/${userId}/albums`} className={makeClass}>Альбомы</NavLink>
      <NavLink to={`/users/${userId}/todos`} className={makeClass}>Задачи</NavLink>
    </nav>
  )
}


