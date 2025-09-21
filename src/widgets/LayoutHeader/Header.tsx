import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import { ThemeSwitcher } from '../../features/ThemeSwitcher/ui/ThemeSwitcher'

const links = [
  { href: '/posts', label: 'Посты' },
  { href: '/users', label: 'Пользователи' },
  { href: '/albums', label: 'Альбомы' },
  { href: '/todos', label: 'Задачи' },
]

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to="/posts" className={styles.logo}>Мой Блог</NavLink>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {links.map((l) => (
              <li key={l.href}>
                <NavLink
                  to={l.href}
                  className={({ isActive }) =>
                    [styles.link, isActive ? styles.active : ''].join(' ')
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.controls}>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}

export default Header
