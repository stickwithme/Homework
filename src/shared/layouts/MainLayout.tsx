import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../widgets/LayoutHeader/Header'
import Footer from '../../widgets/LayoutFooter/Footer'

const MainLayout: React.FC = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800) // имитация загрузки
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        {/* Рендерим вложенные маршруты */}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
