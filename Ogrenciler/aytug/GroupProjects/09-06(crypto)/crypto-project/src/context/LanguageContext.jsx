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

export const useLanguage = () => useContext(LanguageContext);
