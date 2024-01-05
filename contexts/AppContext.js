import React, { useState, createContext, useContext } from "react";
import data from "../data.json";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [dataLanguage, setDataLanguage] = useState(data.dataENG);

  const handleDataLanguage = (lang) => {
    lang === "esp"
      ? setDataLanguage(data.dataESP)
      : setDataLanguage(data.dataENG);
  };

  return (
    <AppContext.Provider
      value={{
        dataLanguage,
        handleDataLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
};

export { AppProvider, AppContext };
