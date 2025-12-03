"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [color, setColor] = useState("#1e90ff"); // default blue

  useEffect(() => {
    const savedColor = localStorage.getItem("themeColor");
    if (savedColor) applyTheme(savedColor);
  }, []);

  const applyTheme = (newColor) => {
    setColor(newColor);
    document.documentElement.style.setProperty("--primary-color", newColor);
    document.documentElement.style.setProperty("--button-bg", newColor);
    document.documentElement.style.setProperty("--button-border", newColor);
    localStorage.setItem("themeColor", newColor);
  };

  return (
    <ThemeContext.Provider value={{ color, applyTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
