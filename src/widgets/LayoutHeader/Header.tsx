import React, { useState } from 'react'
import { ThemeSwitcher } from '../../features/ThemeSwitcher/ui/ThemeSwitcher'
import styles from './Header.module.css'

const links = [
  { href: '#home', label: 'Главная' },
  { href: '#posts', label: 'Посты' },
  { href: '#about', label: 'О нас' },
]

const Header: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a className={styles.logo} href="#home" onClick={() => setOpen(false)}>
          Мой Блог
        </a>

        <button
          className={styles.burger}
          aria-label="Открыть меню"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
          <ul className={styles.navList}>
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} className={styles.link} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
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
