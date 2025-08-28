import React from 'react'
import { useTheme } from '../../../shared/lib/theme/useTheme'
import styles from './ThemeSwitcher.module.css'

export const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      className={styles.switcher}
      onClick={toggleTheme}
      aria-label="Переключить тему"
    >
      <span>{theme === 'light' ? '🌙' : '☀️'}</span>
      <span>{theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}</span>
    </button>
  )
}
