import React, { useEffect, useState } from 'react'
import Header from '../../widgets/LayoutHeader/Header'
import Footer from '../../widgets/LayoutFooter/Footer'
import PostList from '../../widgets/PostList/PostList'

const MainLayout: React.FC = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800) // имитация загрузки

    return () => clearTimeout(t) // очистка таймера на размонтировании
  }, [])

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <PostList isLoading={loading} />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout

