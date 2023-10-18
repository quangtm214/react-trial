import React from 'react'
import { useEffect, useState } from "react"
const themes = {
  dark: {
    backgroundcolor: 'black',
    color: 'white'
  },
  light: {
    backgroundcolor: 'white',
    color: 'black'
  }
}
const initialState = {
  dark: false,
  theme: themes.light,
  toggle: () => {}
}

const ThemeContext = React.createContext(initialState)

function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const isDark = localStorage.getItem('dark') === 'true'
    setDark(isDark)
  }, [dark])
  const toggle = () => {
    const isDark = !dark;
    localStorage.setItem('dark', JSON.stringify(isDark))
    setDark(isDark)
  }
  const theme = dark ? themes.dark : themes.light;
  return (
    <ThemeContext.Provider value={{ dark, theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )

}
export { ThemeContext, ThemeProvider }

