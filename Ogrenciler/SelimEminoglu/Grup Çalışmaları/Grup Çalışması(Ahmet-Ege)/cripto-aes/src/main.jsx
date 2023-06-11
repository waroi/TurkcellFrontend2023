import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CoinProvider } from './context/CoinContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <CoinProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CoinProvider>
    </ThemeProvider>
  </React.StrictMode>
)
