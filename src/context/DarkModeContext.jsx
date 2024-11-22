import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  /// use localStorage to to keep the user preference after refreshing the page
  const { value: isDarkMode, setValue: setIsDarkMode } = useLocalStorageState(
    "isDarkMode",
    window.matchMedia("(prefers-color-scheme: dark)").matches /// true: desktop theme is on dark mode by default
  );

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  /// the main command we want to execute when the page is run
  /// into index.html inside the html element there is a class that is responsible for dark-mode or light-mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  
  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

/// create a custom hook to have DarkModeProvider anyplace we want
export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkModeContext was used outside of DarkModeProvider");

  return context;
}
