import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { DataProvider } from './context/FetchContext.jsx'
import { NewsProvider } from './context/newsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment> 
    <DataProvider>
    <NewsProvider>
    <ThemeProvider> 
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ThemeProvider>
    </NewsProvider>
    </DataProvider>
  </React.Fragment>
)
