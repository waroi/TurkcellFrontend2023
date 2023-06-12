import { createContext,useState,useEffect,useContext } from "react";

const ThemeContext = createContext();


// içerisine alan children uygulamanın tamamı olarak alıyor
// sardığımız componentin altında kalan children componentleri alıyor.
export const ThemeProvider = ({children}) => {
  const [theme,setTheme] = useState(localStorage.getItem("theme") || "dark");
  useEffect(() => {
    localStorage.setItem("theme",theme);
  },[theme]);
  const values = {
    theme,
    setTheme
  }
  return (<ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>)
}
export const useTheme = () => useContext(ThemeProvider);