import React from 'react'
import Header from '../../widgets/LayoutHeader/Header'
import Footer from '../../widgets/LayoutFooter/Footer'
import PostList from '../../widgets/PostList/PostList'

const MainLayout: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <PostList />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
