import { ThemeContext } from './ThemeContext'

export default function ThemeProvider({ children }) {
  // Theme context logic here
  return (
    <ThemeContext.Provider value={{}}>
      {children}
    </ThemeContext.Provider>
  )
}
