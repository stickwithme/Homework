import React, { useState, type MouseEventHandler } from 'react'
import { ThemeSwitcher } from '../../features/ThemeSwitcher/ui/ThemeSwitcher'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

const links = [
  { href: '/posts', label: 'Посты' },
  { href: '/users', label: 'Пользователи' },
  { href: '/albums', label: 'Альбомы' },
  { href: '/todos', label: 'Задачи' },
]

const Header: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className={`${styles.header} header`}>
      <div className={`${styles.container} container`}>
        <div className={styles.brand}>Мой Блог</div>

        <button
          className={styles.burger}
          aria-expanded={open}
          aria-label="Открыть меню"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>

        <nav className={`${styles.nav} ${open ? styles.open : ''}`} data-open={open}>
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <NavLink to={l.href}>{l.label}</NavLink>
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
