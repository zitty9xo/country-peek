import { createContext } from 'react'

export const ThemeContext = createContext()

export default function ThemeProvider({ children }) {
  // Theme context logic here
  return (
    <ThemeContext.Provider value={{}}>
      {children}
    </ThemeContext.Provider>
  )
}
