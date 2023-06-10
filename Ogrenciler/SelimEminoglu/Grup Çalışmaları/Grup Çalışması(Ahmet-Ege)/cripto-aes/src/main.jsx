import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CoinProvider } from './context/CoinContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CoinProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CoinProvider>
  </React.StrictMode>
)
