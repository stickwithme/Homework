import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ThemeSwitcher } from '../../features/ThemeSwitcher/ui/ThemeSwitcher'
import styles from './Header.module.css'

const links = [
  { to: '/', label: 'Главная' },
  { to: '/posts', label: 'Посты' },
  { to: '/users/1/posts', label: 'Мои посты' },
]

const Header: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>Мой Блог</Link>

        <button
          type="button"
          className={styles.burger}
          aria-label="Открыть меню"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={[styles.nav, open ? styles.open : ''].filter(Boolean).join(' ')}>
          <ul className={styles.navList}>
            {links.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} className={styles.link} onClick={() => setOpen(false)}>
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
