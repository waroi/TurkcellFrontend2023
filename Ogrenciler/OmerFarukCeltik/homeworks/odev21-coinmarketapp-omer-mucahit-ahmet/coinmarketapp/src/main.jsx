import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { DataProvider } from './context/FetchContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <DataProvider>
    <ThemeProvider> 
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ThemeProvider>
    </DataProvider>
  </React.StrictMode>
)
