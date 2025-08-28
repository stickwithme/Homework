import React from 'react'

interface HeaderProps {
  title?: string
}

const Header: React.FC<HeaderProps> = ({ title = 'Мой Блог' }) => {
  return (
    <header className="header">
      <div className="container">
        <h1>{title}</h1>
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
      </div>
    </header>
  )
}

export default Header
