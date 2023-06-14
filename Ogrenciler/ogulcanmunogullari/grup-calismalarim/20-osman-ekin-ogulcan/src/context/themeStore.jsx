import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const StoreContext = createContext();

export const StoreThemeProvider = ({ children }) => {
 const [theme, setTheme] = useState("");

 useEffect(() => {
  localStorage.getItem("theme") ? setTheme(localStorage.getItem("theme")) : localStorage.setItem("theme", "light");
 }, []);

 const store = {
  theme,
  setTheme,
 }

 return (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
 );
}

export const useThemeStore = () => useContext(StoreContext);

StoreThemeProvider.propTypes = {
 children: PropTypes.node.isRequired,
}

