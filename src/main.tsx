import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './index.css'
import { ThemeProvider } from './shared/lib/theme/ThemeProvider'
import { Provider } from 'react-redux'
import { store } from './app/providers/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
)
