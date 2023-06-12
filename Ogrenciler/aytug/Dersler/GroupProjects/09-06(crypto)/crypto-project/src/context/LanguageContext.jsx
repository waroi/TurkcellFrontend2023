/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useContext } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "tr"
  );
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);
  const values = {
    language,
    setLanguage,
  };
  return (
    <LanguageContext.Provider value={values}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext);
