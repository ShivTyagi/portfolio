"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [color, setColor] = useState({color : "#1e90ff", overlay : "#0006207a"}); // default blue

  useEffect(() => {
    const savedColor = localStorage.getItem("themeColor");
    if (savedColor.color) applyTheme(savedColor);
  }, []);

  const applyTheme = (newColor) => {
    setColor(newColor.color);
    document.documentElement.style.setProperty("--primary-color", newColor.color);
    document.documentElement.style.setProperty("--primary-hex-alpha",newColor.overlay);
    document.documentElement.style.setProperty("--button-bg", newColor.color);
    document.documentElement.style.setProperty("--button-border", newColor.color);
    localStorage.setItem("themeColor", newColor.color);
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
