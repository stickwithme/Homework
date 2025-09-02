import React, { useState } from 'react'
import { ThemeSwitcher } from '../../features/ThemeSwitcher/ui/ThemeSwitcher'
import { Button } from '../../shared/ui/Button/Button'
import { Modal } from '../../shared/ui/Modal/Modal'
import styles from './Header.module.css'

interface HeaderProps {
  title?: string
}

const Header: React.FC<HeaderProps> = ({ title = 'Мой Блог' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <React.Fragment>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>{title}</h1>

          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li>
                <a href="#home" className={styles.navLink}>
                  Главная
                </a>
              </li>
              <li>
                <a href="#posts" className={styles.navLink}>
                  Посты
                </a>
              </li>
              <li>
                <a href="#about" className={styles.navLink}>
                  О нас
                </a>
              </li>
            </ul>
          </nav>

          <div className={styles.controls}>
            <Button
              variant="secondary"
              onClick={openModal}
              className={styles.infoButton}
            >
              О проекте
            </Button>
            <ThemeSwitcher />
          </div>
        </div>
      </header>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="О проекте">
        <p>
          Это учебный проект для демонстрации работы с React, TypeScript и
          современными подходами к разработке веб-приложений.
        </p>

        <p>
          <strong>Основные возможности:</strong>
        </p>
        <ul>
          <li>Отображение списка постов с заглушками</li>
          <li>Переключение между светлой и тёмной темой</li>
          <li>Модальное окно с информацией о проекте</li>
          <li>Адаптивный дизайн</li>
          <li>Соблюдение архитектуры FSD</li>
        </ul>

        <p>
          Проект реализован с использованием современных технологий: React,
          TypeScript, Vite, CSS Modules.
        </p>
      </Modal>
    </React.Fragment>
  )
}

export default Header
