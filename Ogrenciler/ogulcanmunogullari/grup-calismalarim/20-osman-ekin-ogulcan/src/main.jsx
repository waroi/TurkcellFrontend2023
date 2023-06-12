import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from './context/store.jsx'
import { StoreThemeProvider } from './context/themeStore.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <StoreThemeProvider>
          <App />
        </StoreThemeProvider>
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
