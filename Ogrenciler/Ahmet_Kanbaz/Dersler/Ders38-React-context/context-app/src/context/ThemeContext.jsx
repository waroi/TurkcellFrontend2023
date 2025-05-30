import {useState, useEffect, useContext, createContext} from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  const values = {
    theme, setTheme
  }

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node
}

export const useTheme = () => useContext(ThemeContext)