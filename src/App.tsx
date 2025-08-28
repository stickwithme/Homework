import React from 'react'
import { ThemeProvider } from './shared/lib/theme/ThemeProvider'
import MainLayout from './shared/layouts/MainLayout'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  )
}

export default App
