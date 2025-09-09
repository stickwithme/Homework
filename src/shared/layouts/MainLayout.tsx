import React from 'react'
import Header from '../../widgets/LayoutHeader/Header'
import Footer from '../../widgets/LayoutFooter/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
