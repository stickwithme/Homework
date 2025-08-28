import React from 'react'
import { ThemeSwitcher } from '../../features/ThemeSwitcher/ui/ThemeSwitcher'
import styles from './Header.module.css'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>Мой Блог</h1>
        <nav>
          <ul>
            <li>
              <a href="#home">Главная</a>
            </li>
            <li>
              <a href="#posts">Посты</a>
            </li>
            <li>
              <a href="#about">О нас</a>
            </li>
          </ul>
        </nav>
        <div className={styles.controls}>
          <ThemeSwitcher /> {/* Удален пустой тег {} */}
        </div>
      </div>
    </header>
  )
}

export default Header
