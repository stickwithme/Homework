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

        <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
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
